import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
    /* Pass your questions in here */
    { message: "Type in your URL:", name: "URL" },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(require("fs").createWriteStream("qr1_img.png"));
    fs.writeFile("URL1.txt", url, (err) => {
      if (err) throw err;
      console.log("the file has been saved");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
