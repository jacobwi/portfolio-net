using System.ComponentModel.DataAnnotations;

namespace portfolio_net.DataTransferObjects
{
    public class RegisterUser
    {
        [Required(ErrorMessage = "This field is required")]
        [StringLength(int.MaxValue, MinimumLength = 4, ErrorMessage = "Username must be longer than 3 characters")]
        public string Username { get; set; }

        [Required(ErrorMessage = "This field is required")]
        [StringLength(32, MinimumLength = 4, ErrorMessage = "Password's length must be greater than 3 but no more than 33")]
        public string Password { get; set; }

        [Required(ErrorMessage = "This field is required")]
        [EmailAddress(ErrorMessage = "This is not a valid email address")]
        public string Email { get; set; }

        [Required(ErrorMessage = "This field is required")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "This field is required")]
        public string LastName { get; set; }
    }
}