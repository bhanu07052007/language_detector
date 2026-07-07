import LanguageDetect from "languagedetect";
import colors from "colors";

const lngDetector = new LanguageDetect();

const input = process.argv.slice(2).join(" ");

if (!input) {
    console.log(colors.yellow("Please provide some text."));
    process.exit(1);
}

const result = lngDetector.detect(input, 1);

if (result.length === 0) {
    console.log(colors.red("Couldn't detect the language."));
} else {
    console.log(colors.green(`Our best guess is: ${result[0][0]}`));
}