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
    public class EmailsController : Controller {
        private readonly IEmailRepository _repo;
        public EmailsController (IEmailRepository repo) { _repo = repo; }


        // GET api/emails
        [HttpGet ("")]
        public ActionResult<IEnumerable<string>> Gets () {
            return new string[] { "value1", "value2" };
        }


        // POST api/emails
        [HttpPost ("send")]
        public async Task<IActionResult> Send(Email email) { 
            await _repo.SendAsync(email); 
            return StatusCode(200, "Sent");
        }

    }
}