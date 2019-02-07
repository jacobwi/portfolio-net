using System.Collections.Generic;
using System.Threading.Tasks;
using portfolio_net.Models;

namespace portfolio_net.Data
{
    public class PostRepository : IPostRepository
    {
        public Task<bool> DeleteAsync(string id)
        {
            throw new System.NotImplementedException();
        }

        public Task<bool> EditAsync(Post editedPost, string id)
        {
            throw new System.NotImplementedException();
        }

        public Task<List<Post>> GetPostsAsync(Post post)
        {
            throw new System.NotImplementedException();
        }

        public Task<bool> SendAsync(Post post)
        {
            throw new System.NotImplementedException();
        }
    }
}