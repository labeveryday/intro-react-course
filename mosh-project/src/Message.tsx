// PascalCasing
function Message() {
    // Define a variable
    const name = "";

    // Use a conditional to check if name is True
    if (name) 
        // JSX: JavaScript XML - NOT HTML
        // Display the variable in the browser
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

// To use the function elsewhere we need to export it
export default Message;