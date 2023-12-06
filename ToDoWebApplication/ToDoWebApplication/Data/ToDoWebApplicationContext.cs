using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ToDoWebApplication.Models;

namespace ToDoWebApplication.Data
{
    public class ToDoWebApplicationContext : DbContext
    {
        public ToDoWebApplicationContext (DbContextOptions<ToDoWebApplicationContext> options)
            : base(options)
        {
        }

        public DbSet<ToDoWebApplication.Models.Todo> Todo { get; set; } = default!;
    }
}
