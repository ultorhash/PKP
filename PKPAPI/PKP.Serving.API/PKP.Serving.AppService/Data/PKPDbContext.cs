using Microsoft.EntityFrameworkCore;
using PKP.Serving.AppService.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PKP.Serving.AppService.Data
{
    public class PKPDbContext : DbContext
    {
        public PKPDbContext()
        {

        }

        public PKPDbContext(DbContextOptions<PKPDbContext> options)
            : base(options)
        {

        }

        public DbSet<Customer> Customers { get; set; }
    }
}
