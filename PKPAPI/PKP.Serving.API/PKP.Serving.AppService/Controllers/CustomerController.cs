using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using PKP.Serving.AppService.Data;
using PKP.Serving.AppService.Data.Interfaces;
using PKP.Serving.AppService.Data.Models;
using System.Linq;

namespace PKP.Serving.AppService.Controllers
{
    [ApiExplorerSettings(GroupName = "Authentication")]
    [EnableCors]
    [ApiController]
    [Route("/api")]
    public class CustomerController : Controller
    {
        private readonly PKPDbContext context;

        public CustomerController(PKPDbContext context)
        {
            this.context = context;
        }

        [HttpPost("login/auth")]
        public ActionResult<Customer> Login(DtoCustomer data)
        {
            Customer customer = null;
            customer = context.Customers.FirstOrDefault(c => c.Email == data.Email && c.Password == data.Password);

            return customer;
        }
    }
}
