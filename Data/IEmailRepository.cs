using System.Collections.Generic;
using System.Threading.Tasks;
using portfolio_net.Models;

namespace portfolio_net.Data
{
    public interface IEmailRepository
    {
        Task<List<Email>> GetEmails();   
        Task<bool> SendAsync(Email email);   
    }
}