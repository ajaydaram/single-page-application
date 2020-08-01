---
title: "Fourth Post - Functions"
date: 2020-14-07 07:00:00
author: "Daram Ajay"
image: ../../images/web.png
tags:
  - web
  - course
  - functions
  - Declarations
---
Some of the basic points to remember before learning about Functions in JavaScript. It belongs to the category called jumping statements which are the part of the control statements.Jumping statements helps to transfer the function from one place to another place. 

## What is a function ?
A function is a block of code, meant to perform a specific task. The adavtage is reusability. If we remember about variables, the main work of the varaiables is to create a space and store the data for the later use. There we store a single value. In functions we store a block of code and invoke or call it whenevr we require in the programme. It will help you not to write the same code several times. It also helps to divide larger problem into smaller tasks or modules. Functions are used for the abstraction i.e which is used in the process of creating libraries. 

## creating a function. 
Functions can be created in multiple ways. We will discuss one by one 

1. Function declaration 
The basic syntax for declaring the function is 

``` 
function studentsList(studentName, studentAge) {

Your code goes here. 
}
```
Let's analyse the syntax. The function keyword goes first. Later the name of the function with parantheses. 
Inside the parantheses goes the arguments. The data inside the parantheses are called arguments and these are optional. If a function needs an extra information we pass it through paranthesis. Next the curly braces. Inside this goes your execution statement. Remember that function by default returns an empty value. 
Invoke or calling the function 
``` 
<html> 
 <head>
  <title>Example for calling the fuction</title>
 </head>
   <body>
   <script>
     function welcome() {
       console.log("Welcome")
     }
     welcome()  //calling function
     
   </script>
   </body>
 </html>
 ```

 
