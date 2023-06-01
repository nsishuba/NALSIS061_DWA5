const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  try {
        //generate an exception when values are missing.
        if (dividend == "" || divider == "") {
             throw ("Division not performed. Both values are required in inputs. Try again")
        }
        //generate an exception when the divider value is negative. 
        if (divider < 0) {
             throw ("Division not performed. Invalid number provided. Try again")
         } 
        //generate an exception when the dividend and/or divider value is not a number.
        if (isNaN(dividend || divider)) {
            showError("Something critical went wrong. Please reload the page.")
            throw new Error ()
        } 

    result.innerText = parseInt(dividend / divider); //convert answer to integer.

  } catch (e) {
    result.innerText = e
    console.log(e)
  }
 
});

//changes the entire screen to display error. 
const showError = (errorMessage) => {
    document.body.innerHTML = errorMessage
}

// window.addEventListener("error", () => {
//     document.body.innerText = error
//     console.log(error)
// })