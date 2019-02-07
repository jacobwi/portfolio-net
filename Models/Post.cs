using System;

namespace portfolio_net.Models
{
    public class Post
    {
        public int Id { get; set; }
        public User PostedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
    }
}