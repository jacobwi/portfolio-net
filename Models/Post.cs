using System;
using System.ComponentModel.DataAnnotations;

namespace portfolio_net.Models
{
    public class Post
    {
        public int Id { get; set; }
        public User PostedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        [Required(ErrorMessage = "Title is required")]
        public string Title { get; set; }
        [Required(ErrorMessage = "Body is required")]
        public string Body { get; set; }
    }
}