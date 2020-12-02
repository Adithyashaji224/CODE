using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace customerWebApi.Models
{
    public class Customer
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int custid { get; set; }
        public string name { get; set; }
        public string  city { get; set; }
        public string district { get; set; }
        public int pincode { get; set; }
        public string emailid { get; set; }
        public string mobile { get; set; }
        public string username { get; set; }
        public string password { get; set; }
    }
}
