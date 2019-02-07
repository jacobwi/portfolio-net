using System.Collections.Generic;
using System.Threading.Tasks;
using portfolio_net.Models;

namespace portfolio_net.Data
{
    public interface IPostRepository
    {
        Task<List<Post>> GetPostsAsync(Post post);
        Task<bool> SendAsync(Post post);       
        Task<bool> DeleteAsync(string id);
        Task<bool> EditAsync(Post editedPost, string id);          
    }
}