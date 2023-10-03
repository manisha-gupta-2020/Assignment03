/*
The Word Translator

 Usage: Use simple conditional statements

Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). If they enter one of the four codes, display the translated version of "Hello World" for the given language within the console window. If the user enters anything but those four language codes, the application should default to English. The result should be (for example):
Hello World translated in French is: Bonjour le monde
*/

let langCode = prompt("Enter language code (es,de,en or fr): ");
langCode = langCode.toLowerCase();

window.document.write("The Word Translator </br>");

if (langCode == "es") {
    window.document.write("Hello World translated in espanol is: " + "Hola Mundo");
} else if (langCode == "de") {
    window.document.write("Hello World translated in german is: " +"Hallo Welt");
} else if (langCode == "en") {
    window.document.write("Hello World in english is: " +"Hello World");
} else if (langCode == "fr") {
    window.document.write("Hello World translated in french is: " +"Bonjour le monde");
} else {
    window.document.write("Hello World");
}