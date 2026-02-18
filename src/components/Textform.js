import React, {useState} from 'react'

// useState is a hook in React that allows you to add state to functional components.
// In this code, we are using useState to create a state variable called 'text' and a function called 'setText' to update the value of 'text'.
// The initial value of 'text' is set to 'Enter text here'. This means that when the component is rendered for the first time, the textarea will display 'Enter text here' as its default value.
// You can use the 'setText' function to update the value of 'text' whenever the user types something in the textarea. This way, you can keep track of the user's input and perform actions based on it, such as converting it to uppercase when the button is clicked.
// For example, you can add an onChange event handler to the textarea that calls setText with the new value of the textarea whenever it changes. This will allow you to keep the 'text' state variable in sync with the user's input.
// Create a variable called text with starting value 'Enter text here', and give me a function called setText to change it.

export default function Textform(props) {
  const [text, setText] = useState('');
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success"); // here we are showing an alert message when the button is clicked, and the type of alert is success which will show a green colored alert box, if we want to show error alert then type will be 'danger' which will show a red colored alert box, and so on, these types are based on bootstrap classes
  }
  const handleLowClick = () => {
    // console.log("Lowercase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success"); // here we are showing an alert message when the button is clicked, and the type of alert is success which will show a green colored alert box, if we want to show error alert then type will be 'danger' which will show a red colored alert box, and so on, these types are based on bootstrap classes
  }
  const handleTitleCaseClick = () => {
    let newText = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    setText(newText);
    props.showAlert("Converted to title case!", "success"); // here we are showing an alert message when the button is clicked, and the type of alert is success which will show a green colored alert box, if we want to show error alert then type will be 'danger' which will show a red colored alert box, and so on, these types are based on bootstrap classes
  }
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared!", "success"); // here we are showing an alert message when the button is clicked, and the type of alert is success which will show a green colored alert box, if we want to show error alert then type will be 'danger' which will show a red colored alert box, and so on, these types are based on bootstrap classes
  }
    const handleFindEmailClick = () => {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const emails = text.match(emailRegex);
    if (emails) {
      alert("Found email(s): " + emails.join(", "));
    } else {
      alert("No email found.");
    }
  }
    const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
    .then(() => {
      props.showAlert("Text copied to clipboard!", "success");
    })
    .catch(err => {
      props.showAlert("Failed to copy text: " + err, "danger");
    }); 
}
  const handleRemoveClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success"); // here we are showing an alert message when the button is clicked, and the type of alert is success which will show a green colored alert box, if we want to show error alert then type will be 'danger' which will show a red colored alert box, and so on, these types are based on bootstrap classes
  }
 
  return (
    <>
    <div className = "container" style={{ backgroundColor: props.mode}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="My Box" class="form-label">Enter Your Text Below</label> */}
        <textarea className="form-control" value = {text} style={{ backgroundColor: props.mode, color: props.mode === 'white' ? 'black' : 'white', border: `2px solid ${props.mode === 'white' ? 'black' : 'white'}`}}  onChange={(e) => setText(e.target.value)} id="My Box" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} style={{ backgroundColor: props.mode, color: props.mode === 'white' ? 'black' : 'white',border: `2px solid ${props.mode === '#000000' ? 'white' : 'black'}`}}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick} style={{ backgroundColor: props.mode, color: props.mode === 'white' ? 'black' : 'white',border: `2px solid ${props.mode === '#000000' ? 'white' : 'black'}`}}>Convert to Lowercase</button>  {/* mx-4 is bootstrap class which give margin on x axis, means spaces between buttons */}
        <button className="btn btn-primary mx-1" onClick={handleTitleCaseClick} style={{ backgroundColor: props.mode, color: props.mode === 'white' ? 'black' : 'white',border: `2px solid ${props.mode === '#000000' ? 'white' : 'black'}`}}>Convert to Title Case </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick} style={{ backgroundColor: props.mode, color: props.mode === 'white' ? 'black' : 'white',border: `2px solid ${props.mode === '#000000' ? 'white' : 'black'}`}}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleFindEmailClick} style={{ backgroundColor: props.mode, color: props.mode === 'white' ? 'black' : 'white',border: `2px solid ${props.mode === '#000000' ? 'white' : 'black'}`}}>Find Email</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick} style={{ backgroundColor: props.mode, color: props.mode === 'white' ? 'black' : 'white',border: `2px solid ${props.mode === '#000000' ? 'white' : 'black'}`}}>Copy to clipboard</button>
        <button className="btn btn-primary mx-1" onClick={handleRemoveClick} style={{backgroundColor: props.mode,color: props.mode === 'white' ? 'black' : 'white',border: `2px solid ${props.mode === '#000000' ? 'white' : 'black'}`}}>Remove Extra Spaces</button>
    </div>
    {/* here we make words and charachter counter, my-3 class which make distance from upper components or headings or any thing */}
    <div className="container my-3" style={{ backgroundColor: props.mode }}>
        <h2>Your text summary</h2>
        <p>Words: {text.trim().split(/\s+/).filter((word) => word !== "").length} | Characters: {text.length}</p> {/* hecounting words and charachters */}
        <p>{0.008 * text.trim().split(/\s+/).filter((word) => word !== "").length} Minutes read</p> {/* here counting time to read words, 0.008 becuase it reads 125 words in 1 minute so 1/125 is 0.008 */}
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter something in the above textbox to preview it here"}</p>
    </div>
    </>
  )
}
