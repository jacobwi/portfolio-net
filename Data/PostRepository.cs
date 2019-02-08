using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using portfolio_net.Models;

namespace portfolio_net.Data
{
    public class PostRepository : IPostRepository
    {
        private readonly DataContext _context;

        public PostRepository (DataContext context) {
            _context = context;
        }
        public Task<bool> DeleteAsync(string id)
        {
            throw new System.NotImplementedException();
        }

        public Task<bool> EditAsync(Post editedPost, string id)
        {
            throw new System.NotImplementedException();
        }

        public async Task<List<Post>> GetPostsAsync()
        {
            var posts = await _context.Posts.ToListAsync();

            return posts;
        }

        public async Task<bool> SendAsync(Post post)
        {

            await _context.Posts.AddAsync(post);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}