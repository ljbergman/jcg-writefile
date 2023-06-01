const fs = require('fs');

function jcgWriteFile(content) {

    if (content===undefined) {

    let htmlFilename = "JCG_output.html";
    let cssFilename = "JCG_output.css";
    let jsFilename = "JCG_output.js"

    content = [
        { "filename": htmlFilename, "content": 
        
        `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>JCG Document Title</title>
        <link rel="stylesheet" href="${cssFilename}">
    </head>
    <body>
    <div id="container">
        <!--<label for="login">Login: </label>
    <input type="text" id="login" class="my-input-class" value="" placeholder="Användarnamn">

    --><!--<label for="password">Password:</label>
    <input type="password" id="password" class="my-input-class" value="" placeholder="Välj lösenord här">

    --><!--<button id="submit" class="my-button-class">Send</button>

    -->
    </div>
    <script src="${jsFilename}"></script>
    </body>
    </html>
        
        ` },

        { "filename": jsFilename, "content": " " },

        { "filename": cssFilename, "content": `
        
        body {
            text-align: center;
            font-family: arial, verdana;
        }
            
        #container {
            width: 100%;
            text-align: center;
            font-family: arial, verdana;
        }
        
        ` }
    ]

    }

    fs.writeFile(content[0].filename, content[0].content, err => {
        if (err) {
          console.error('Error writing HTML file:', err);
        } else {
          console.log('HTML file generated successfully.');
        }
      });
      
      fs.writeFile(content[1].filename, content[1].content, err => {
        if (err) {
          console.error('Error writing JS file:', err);
        } else {
          console.log('JS file generated successfully.');
        }
      });
      
      fs.writeFile(content[2].filename, content[2].content, err => {
          if (err) {
            console.error('Error writing CSS file:', err);
          } else {
            console.log('CSS file generated successfully.');
          }
        });

}

module.exports = jcgWriteFile;