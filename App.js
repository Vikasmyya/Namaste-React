import React from "react";
import ReactDOM from "react-dom/client";

//craeting an element
//1st parameter is what is the element
//2nd is objects or like id
//3rd is what we want to show in the element
const  heading = React.createElement("h1",{
    id:"heading"
},"Hello world from React!")

//element created by react is object
//render method will help to  convert it into the html which browser will understand
console.log(heading)

//creating the root
const root = ReactDOM.createRoot(document.getElementById("root"))

//render the heading elemnt in the root
root.render(heading)


