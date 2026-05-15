var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Настройка для статических файлов (твой HTML, CSS, JS)
app.UseDefaultFiles();
app.UseStaticFiles();

app.Run();