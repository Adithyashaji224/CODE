using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using customerWebApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.Host;

namespace customerWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly CRUDContext _CRUDContext;

        public CustomersController(CRUDContext CRUDContext)
        {
            _CRUDContext = CRUDContext;
        }
        // GET: api/Customers
        [HttpGet]
        public IEnumerable<Customer> Get()
        {
            return _CRUDContext.customers;
        }

        // GET: api/Customers/5
        [HttpGet("{id}", Name = "Get")]
        public Customer Get(int id)
        {
            return _CRUDContext.customers.SingleOrDefault(x=>x.custid==id);
        }

        // POST: api/Customers
        //[Route("Customers")]
        [HttpPost]
        
        public void Post([FromBody] Customer customer)
        {
            _CRUDContext.customers.Add(customer);
            _CRUDContext.SaveChanges();
        }

        // PUT: api/Customers/5
        //[HttpPut("{id}")]
        [HttpPut]
        public void Put([FromBody] Customer customer)
        {
            //customer.custid = id;
            _CRUDContext.customers.Update(customer);
            _CRUDContext.SaveChanges();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var item = _CRUDContext.customers.FirstOrDefault(x=>x.custid==id);
            if(item !=null)
            {
                _CRUDContext.customers.Remove(item);
                _CRUDContext.SaveChanges();
            }
        }
    }
}
