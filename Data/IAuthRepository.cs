using System.Threading.Tasks;
using portfolio_net.Models;

namespace portfolio_net.Data
{
    public interface IAuthRepository
    {
        Task<User> RegisterAsync(User user, string password);   
        Task<User> Login(string username, string password);  
        Task<bool> IsUser(string username); 
        Task<bool> IsEmail(string email);
    }
}