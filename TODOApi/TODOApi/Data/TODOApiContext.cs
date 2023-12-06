using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TODOApi.Models;

namespace TODOApi.Data
{
    public class TODOApiContext : DbContext
    {
        public TODOApiContext (DbContextOptions<TODOApiContext> options)
            : base(options)
        {
        }

        public DbSet<TODOApi.Models.Todo> Todo { get; set; } = default!;
    }
}
