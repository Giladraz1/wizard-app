//using Serilog;

//public class Startup
//{
//  public IConfiguration Configuration { get; }

//  public Startup(IConfiguration configuration)
//  {
//    Configuration = configuration;
//  }

//  public void ConfigureServices(IServiceCollection services)
//  {
//    services.AddControllers();

//    services.AddCors(options =>
//    {
//      options.AddDefaultPolicy(builder =>
//      {
//        builder.AllowAnyOrigin()
//            .AllowAnyMethod()
//            .AllowAnyHeader();
//      });
//    });

//    // Add any additional services you need (e.g., database, authentication, etc.)
//  }

//  public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILogger<Startup> logger)
//  {
//    if (env.IsDevelopment())
//    {
//      app.UseDeveloperExceptionPage();
//    }
//    else
//    {
//      // Configure production settings
//    }

//    app.UseRouting();

//    app.UseCors(builder =>
//    {
//      builder.AllowAnyOrigin()
//          .AllowAnyMethod()
//          .AllowAnyHeader();
//    });

//    // Configure Serilog as the logger
//    Log.Logger = new LoggerConfiguration()
//        .WriteTo.Console()
//        .CreateLogger();

//    app.UseSerilogRequestLogging(); // Log HTTP request/response information

//    // Add any additional middleware you need

//    app.UseEndpoints(endpoints =>
//    {
//      endpoints.MapControllers();
//    });

//    // Log a startup message
//    logger.LogInformation("Application started.");
//  }
//}
