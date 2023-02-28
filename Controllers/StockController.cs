using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CPP45_eCanteenStock.Models;

namespace CPP45_eCanteenStock.Controllers
{
   
    public class StockController : Controller
    {
       private CPP45_eCanteenEntities DbFile = new CPP45_eCanteenEntities();  //DB
        // GET: Stock
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Products()
        { 
            return View();
        }

    }
}