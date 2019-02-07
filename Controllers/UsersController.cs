using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using portfolio_net.Data;
using portfolio_net.DataTransferObjects;
using portfolio_net.Models;
//using portfolio-net.Models;

namespace portfolio_net.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;

        public UsersController (IAuthRepository repo, IConfiguration config) {
            _config = config;
            _repo = repo;
        }

        // POST api/users/login
        [HttpPost ("login")]
        public async Task<IActionResult> Login(LoginUser loginUser) {

            loginUser.Username = loginUser.Username.ToLower ();
            var user = await _repo.Login (loginUser.Username, loginUser.Password);

            if (user == null) {
                string[] errorArray = new string[1];
                errorArray[0] = "Username or password is incorrect";
                return Unauthorized (new {errors = errorArray});
            }

            var claims = new [] {
                new Claim (ClaimTypes.NameIdentifier, user.Id.ToString ()),

                new Claim (ClaimTypes.GivenName, user.Username)
            };
            var key = new SymmetricSecurityKey (Encoding.UTF8.GetBytes (_config.GetSection("AppSettings:JWTSecretKey").Value));

            var authIt = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDecoder = new SecurityTokenDescriptor{
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = authIt
            };

            var jwtHandler = new JwtSecurityTokenHandler();

            var token = jwtHandler.CreateToken(tokenDecoder);
            var savedToken =  new {
                token = jwtHandler.WriteToken(token),
                message = "User has successfully logged in"
            };

            return StatusCode(200, savedToken);
        }
        // POST api/users/register
        [HttpPost ("register")]
        public async Task<IActionResult> Register (RegisterUser registerUser) {
            registerUser.Username = registerUser.Username.ToLower ().TrimEnd ();
            registerUser.FirstName = registerUser.FirstName.TrimEnd ();
            registerUser.Email = registerUser.Email.TrimEnd ();
            registerUser.LastName = registerUser.LastName.TrimEnd ();

            if (await _repo.IsUser (registerUser.Username)) {
                return BadRequest ("User already exists");
            }

            if (await _repo.IsEmail (registerUser.Username)) {
                return BadRequest ("Email address is associated with another account");
            }

            var createUser = new User {
                Username = registerUser.Username,
                FirstName = registerUser.FirstName,
                LastName = registerUser.LastName,
                Email = registerUser.Email
            };
            var user = await _repo.RegisterAsync (createUser, registerUser.Password);

            return StatusCode (201);
        }
    }
}