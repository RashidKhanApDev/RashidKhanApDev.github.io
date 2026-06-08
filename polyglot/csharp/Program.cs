using System;
using System.IO;
using System.Text.Json;

namespace DataGenerator {
    class Program {
        static void Main(string[] args) {
            var data = new {
                title = "Enterprise Polyglot Engine",
                version = "3.0.0",
                languages = new[] { "Rust", "Go", "C++", "Kotlin", "ClojureScript", "WebAssembly", "C#", "Dart", "Python", "TypeScript", "SCSS" }
            };
            
            string jsonString = JsonSerializer.Serialize(data, new JsonSerializerOptions { WriteIndented = true });
            
            string outputPath = Path.Combine(Directory.GetParent(Directory.GetCurrentDirectory()).Parent.FullName, "dist", "data.json");
            
            // Ensure dist directory exists
            Directory.CreateDirectory(Path.GetDirectoryName(outputPath));
            
            File.WriteAllText(outputPath, jsonString);
            
            Console.WriteLine($"[C#] Successfully generated enterprise JSON data at {outputPath}");
        }
    }
}
