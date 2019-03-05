using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Backend;

namespace Portfolio.Controllers
{
	[Produces("application/json")]
	[Route("api/[controller]")]
    [ApiController]
    public class DefaultController : ControllerBase
    {
		private ITest _test;

		public DefaultController(ITest test)
		{
			_test = test;
		}

		[HttpGet]
		[Route("ReturnOne")]
		public int ReturnOneAsync()
		{
			int result = _test.ReturnOne();
			return result;
		}
    }
}