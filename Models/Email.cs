using System.ComponentModel.DataAnnotations;
namespace portfolio_net.Models
{
    public class Email
    {
        public int EmailId { get; set; }
        [Required(ErrorMessage = "Name is required")]
        public string FromName { get; set; }
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Email is invalid")]
        public string EmailAddress { get; set; }
        // public string Subject { get; set; }
        [Required(ErrorMessage = "Subject is required")]
        public string Subject { get; set; }
        [Required(ErrorMessage = "Message is required")]
        public string Body { get; set; }
    }
}