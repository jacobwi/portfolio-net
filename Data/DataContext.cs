using Microsoft.EntityFrameworkCore;
using portfolio_net.Models;

namespace portfolio_net.Data
{
    public class DataContext : DbContext
    {
        public DataContext (DbContextOptions<DataContext> options) : base (options) { }

        // User model data context
        public DbSet<User> Users { get; set; }

    }
}