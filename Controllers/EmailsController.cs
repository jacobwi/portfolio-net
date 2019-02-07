using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using portfolio_net.Data;
using portfolio_net.Models;
//using portfolio-net.Models;

namespace portfolio_net.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class EmailsController : ControllerBase {
        private readonly IEmailRepository _repo;
        public EmailsController (IEmailRepository repo) { _repo = repo; }


        // GET api/emails/getall
        [HttpGet ("/getall")]
        public async Task<IActionResult> GetAllEmails() {
            var emails = await _repo.GetEmails();

            return Ok(emails);
        }


        // POST api/emails/send
        [HttpPost ("send")]
        public async Task<IActionResult> Send(Email email) { 
            await _repo.SendAsync(email); 
            return StatusCode(200, "Sent");
        }

    }
}