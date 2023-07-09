using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace WizardApi.Controllers
{
  [ApiController]
  [Route("/api/FormData")]
  public class FormDataController : ControllerBase
  {
    private readonly ILogger<FormDataController> _logger;

    public FormDataController()
    {

    }
    public FormDataController(ILogger<FormDataController> logger)
    {
      _logger = logger;
    }

    [HttpPost(Name ="test")]
    public IActionResult PostFormData([FromBody] string formData)
    {
      _logger.LogInformation("Received form data: {@FormData}", formData);

      // Your logic to process and save the form data

      return Ok();
    }
    [HttpGet]
    [Route("getall")]
    public IActionResult actionResult()
    {
      return Ok();  
    }
  }
}
