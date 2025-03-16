import React from "react";
import ReactDOM from "react-dom/client";

// //craeting an element
// //1st parameter is what is the element
// //2nd is objects attributes or like id
// //3rd is what we want to show in the element
// const  heading = React.createElement("h1",{
//     id:"heading"
// },"Hello world from React!")

// //element created by react is object
// //render method will help to  convert it into the html which browser will understand
// console.log(heading)

//JSX
const jsxheading = <h1 id="heading">Namaste React from JSX</h1>

//conventinal way
const Headingcomponent = () =>{
    return <h1 className="f1">Hello from fuction component</h1>
}

//we can remove bracket and return if its a one line and if its multiple line wrap it around paranthesis
//component composition
const Headingcomponent1 = () =>(
    <div id="container">
        <Headingcomponent/>
        <h1 className="f1">Hello from fuction component</h1>
    </div>
    )

    const number = 1000;
//we can do with normal function but we need to return the jsx
const Heading3 = function(){
    return(
        <div id="container">
            {number}
            <Headingcomponent/>
            <Headingcomponent1/>
        </div>
    )
}


//creating the root
const root = ReactDOM.createRoot(document.getElementById("root"))

//render the heading elemnt in the root
root.render(<Heading3/>)


