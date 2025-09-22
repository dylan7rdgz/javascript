Concepts
- Understand how the tags are categorized in html.
- When a submit button is clicked, it will submit the form it is contained within. 
- Form controls

- Color Codes
- Thumbnails

- Resizing



Frontend Design Patterns
- Use the sectioning elements to create a broad outline for your page content, including header and footer navigation, and heading elements to identify sections of content.
- Sections should always have a heading, with very few exceptions.
- May use CSS resets
- Fallbackfonts (note down fallback fonts)
- (the ease of changing multiple instances of a value at once)
- Think of a layout that can never be broken.
- Reset Browser Defaults
- Deciding Conent first vs Layout first Design (Anticipating what features might be introduced to the product)

- Using text textContent instead of innerHTML


UX
- Assistive technologies
- Select dropdowns are great for saving space on the page when we have an extensive list of options we want users to choose from. However, when we have a smaller list of 5 or fewer options to choose from, it is often a better user experience to have them displayed on the page instead of hidden behind a dropdown.


Frontend Optimizations
- Use SVGs
- Performance issues with using imported files


Rules
- It has no effect on the content or layout until styled in some way using CSS
- <rt> tage must always be contained within <ruby>


Practices
Always start coding in HTML
Use semantic elements (h1, ,h5, etc) instead of conatiner elements (div or span)

Even Avoid wrapping a semantic element in a div just for styling purposes
Using a div to wrap two semantic elements is fine.

Certain elements have their own content space.

`
<section>
    <div class="app-nav">
        <div class="app-nav-left">
            Header Logo
        </div>
        <div class="app-nav-links">
            <div>Header Link 1</div>
            <div>Header Link 2</div>
            <div>Header Link 3</div>
        </div>
    </div>
    <div>
        <div>
            Website Description
        </div>
        <div>
            Placeholder for Image
        </div>
    </div>
 </section>
`

`css
body {
    font-size: 16px;
}

.app-nav {
    display: flex;
}

.app-nav div {
    flex: 1;
} 

.app-nav .app-nav-links {
    display: flex;
}

.app-nav .app-nav-links div {
    flex: 1
}

.app-nav .app-nav-left {
    flex: 1;
} 

// When I used .app-nav-left instead of div the elements on the right were not evenly spaced.
// but as soon as I used div, the elements got spaced out because this div acted as a flext item of .app-nav and so it will take up equal space.
.app-nav .app-nav-left {
    flex: 1;
} 

.app-nav .app-nav-links {
    flex: 1; // or instead, just adding a flex: 1 declaration does the trick.
    display: flex;
}


`css







Frontend Technologies
- Emmet
- SVGs, Vector Graphics, XML
- Material Icons
- Web fonts
- CSS Frameworks (Bootstrap)
- CSS Preprocessors (S)
- Applications
    - Font Book


CSS Combinators
CSS Selectors
CSS Custom properties



Complex tags
<h-group>


- Use Cases
- Full height heros: Viewport units might be helpful
- Full screen app like interfaces: Viewport units might be helpful
- Modals, Image with caption on it, Icons on top of other elements: Use absolute positioning.
- Navigation bars, floating chat button. Use fixed positioning.
- Section headings. Use sticky positioning.
- Some real-world use cases for using these validations would be limiting the quantity on a product order form or choosing the number of passengers on a flight booking form. Use Number formatting
- A common use-case for these elements is using a fieldset to group radio buttons and using a legend to communicate to the user what each of the options is ultimately fo

- Avoiding certain bugs

1. On iOS and iPadOS, Safari is technically the only supported browser. Yes, you can install Chrome or Firefox, and you can even set them as a default, but they are not full browsers. They are still using the Safari rendering engine (WebKit).

2. All the option elements should have a value attribute (otherwise the text content inside is used). This value will be sent to the server when the form is submitted.

3. It is important to remember that a button within a form with the type value of submit (which happens to be the default value) will always try to make a new request and submit data back to the server. Hence, for buttons that are used within a form for different purposes other than submitting the data, the type attribute should always be specified to avoid unwanted effects of submitting a form.

4. An important implication to notice here is that when you specify flex-grow or flex-shrink, flex items do not necessarily respect your given values for width. In the above example, all 3 divs are given a width of 250px, but when their parent is big enough, they grow to fill it. Likewise, when the parent is too small, the default behavior is for them to shrink to fit. This is not a bug, but it could be confusing behavior if you aren’t expecting it.


Topics
- Forms
- Form Controls


Do not repeat these mistakes:
- How to get a label on top of the corresponding input
- When the labels have different size, how do we align them?


Possibilities
```
    <fieldset>
        <div>
            <label for="email"> Email:</label>
        </div>
        <input type="email"  id="email"></input>
        <div>
            <label for="phone_no" id="num">Phone No: </label>
        </div>
        <input type="number" id="phone_no" min="10" max="12"></input>
    </fieldset>

    element {
        position: relative;
        left: 36%;
        bottom: 255%;
        top: -48px;
    }
```

Or we can use separate divs for formfield having a specific width


- Fonts can be stored on user machines and have its own file format like .otf


- Properties covered
    object-fit
    text-align



Questions to ask CGPT

    .middle-banner {
      background: rgba(0,0,0,0.4);
      color: white;
      text-align: center;
      padding: 1em;
      position: absolute;
      top: 25%;
      width: 100%;
    }

You also used absolute positioning.

.right-part {
      float: left;
      width: 70%;
      height: 100vh;
      background: #f3f1eb;
      overflow-y: auto;
      box-sizing: border-box;
      padding: 2em;
    }

Why box-sizing: border-box; ?


  .right-part {
      float: left;
      width: 70%;
      height: 100vh;
      background: #f3f1eb;
      overflow-y: auto;
      box-sizing: border-box;
      padding: 2em;
    }

    .right-part section {
      margin-bottom: 2em;
    }

Why is there two declarations for .right-part section?


.form-field {
      display: inline-block;
      width: 48%;       /* two side-by-side fields */
      vertical-align: top;
    }

    .form-field label {
      display: block;   /* label above input */
      margin-bottom: .3em;
    }

.form-field input {
      width: 95%;
      padding: .5em;
      border: 1px solid #999;
      border-radius: 3px;
      box-sizing: border-box;
    }

Why .form-field & .form-field label & .form-field input?








