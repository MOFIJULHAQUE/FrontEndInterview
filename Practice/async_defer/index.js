//Async allows your script to run as soon as it's loaded, without blocking other elements on the page. 
//'Defer' means your script will only execute after the page has finished loading.

//The defer is a Boolean value, used to indicate that script is executed after the document has been parsed. It works only with external scripts (i.e., works only when we are specifying the src attribute in <script> tag). It declares that the script will not create any content. So, the browser can continue the parsing of the rest of the page. The <script> with the defer attribute does not block the page.

// Defer is a keyword in JavaScript that allows us to delay the execution of a function until the surrounding code has been executed.

// Example:
// <!DOCTYPE html>  
// <html>  
// <head>  
// <script src = "myscript.js" defer>  
// </script>  
  
// </head>  
// <body>  
// <div>  
// <h1> javaTpoint.com </h1>  
// <h3> This is an example of defer attribute.  </h3>  
// </div>  
// </body>  
// </html>  