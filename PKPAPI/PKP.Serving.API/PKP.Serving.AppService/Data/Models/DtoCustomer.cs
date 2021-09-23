using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PKP.Serving.AppService.Data.Interfaces
{
    public class DtoCustomer
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
