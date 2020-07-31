using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Sam",
                    Email = "sam@test.com",
                    UserName = "sam@test.com",
                    Address = new Address
                    {
                        FirstName = "Sam",
                        LastName = "Lau",
                        Street = "88 The Street",
                        City = "Vancouver",
                        State = "BC",
                        Zipcode = "V6T0B6"
                    }
                };
                
                await userManager.CreateAsync(user, "Pa$$w0rd");
            };

        }
    }
}