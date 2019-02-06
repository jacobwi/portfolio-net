using System.Threading.Tasks;


namespace portfolio_net.Data
{
    public interface IEmailRepository
    {
        Task<bool> SendAsync(Email email);   
    }
}