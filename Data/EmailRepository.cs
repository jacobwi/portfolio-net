using System.Threading.Tasks;
using portfolio_net.Models;

namespace portfolio_net.Data {
    public class EmailRepository : IEmailRepository {
        private readonly DataContext _context;

        public EmailRepository (DataContext context) {

            _context = context;
        }

        public async Task<bool> SendAsync (Email email) {
            if (email.FromName.Length < 1 || email.Subject.Length < 1 || email.Body.Length < 1 || email.EmailAddress.Length < 1) {
                return false;
            };
            await _context.Emails.AddAsync(email);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}