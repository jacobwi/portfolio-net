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
    public class PostsController : ControllerBase {
        private readonly IPostRepository _repo;
        public PostsController (IPostRepository repo) { _repo = repo; }
        
        // GET api/posts/getall
        [HttpGet ("/getall")]
        public async Task<IActionResult> GetAllPosts() {
            var posts = await _repo.GetPostsAsync();

            return Ok(posts);
        }

        // POST api/posts
        [HttpPost ("/new")]
        public async Task<IActionResult> NewPost (Post post) {
            await _repo.SendAsync(post); 
            return StatusCode(201, "Created");
        }

    }
}