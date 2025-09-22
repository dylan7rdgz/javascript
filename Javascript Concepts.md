Shorthand key value pairs
Promises
Prototypal inheritence

Java Object Creation Methods (JS object creation from templates using class keywords) versus Javascript Prototypal inheritence through Object Constructors versus Javascript Prototypal inheritance through factory functions.

Side effect imports (e.g. import "./styles.css";)


By default, Webpack gives your bundled image files a new name by hashing their contents. You do not need to know how this works, nor do you need to dig into the details of why, nor how to change it. You just need to be aware that this is expected behavior (it’s to do with preventing issues with the browser cache and matching file names). - Maybe the authors of webpack solved this as a fix. How did they figure out that this was the bug??

Source Maps


Type of forms
- Sign up forms
- Contact forms
- Search forms


Constraint validation API

Dynamically adding clases versus rerendering


Dynamically adding classes:
```
const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
  input.addEventListener("blur", () => {
    input.classList.add("validated");
    input.reportValidity();
  });
  input.addEventListener("input", () => {
    // Optionally remove the class while typing
    input.classList.remove("validated");
  });
});


input.validated:user-invalid {
    border: 2px solid red;
    background-color: #ffeaea;
}

input.validated:user-valid {
    border: 2px solid green;
    background-color: #eaffea;
}
```


Frontend Prcatices:

Instead of resecting a form which contains a button

Try to find the parent of the button.

```
const confirmBtn = document.getElementById("confirmBtn");
const form = confirmBtn.closest("form");

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity(); // Shows built-in error messages and highlights invalid fields
    return; // Prevent further actions if invalid
  }
  // Proceed with form submission logic here
});
```

