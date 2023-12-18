import inquirer from "inquirer";

inquirer
  .prompt([
    {
      type: "input",
      message: "Type in your URL:",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image("I love QR!", { type: "svg" });
    qr_svg.pipe(require("fs").createWriteStream("i_love_qr.svg"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
