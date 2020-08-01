---
title: "Fourth Post - Creating objects using Object constructor"
date: 2020-14-07 07:00:00
author: "Daram Ajay"
image: ../../images/web.png
tags:
  - web
  - JavaScript
  - Objects
  - Create
---


Object constructor is a function of built in object called **Object**. With object constructor it is very convenient to create a single object. 

## Syntax for creating a new object Object():

```var objectName = new Object();```

suppose you want to create an object with a name student 

```var car = new Object();```
Let us look what will happens when the user defines a new object using object constructor. 

```<!doctype html>```

```<html lang="en">```

```<head>```
  
  ```<meta charset="utf-8">```
 
 
 ```<title>Creating Object</title>```

```</head>```

```<body>```
  
  ```<script>```
    
```var car = new Object();```
  
  ```</script>```

```</body>```

```</html>```

step 1.
**var car**
As usual the var keyword allocate a memory with a name car with a value of undefined. 
**var car = new Object** 
The assignment operator *==* have the associativity from right to left.So the it executes the new Object
It will create new empty object which is instance or the object.it set the value of implicit prototype  ____proto____ .  It is also called reference variable which holds the address of another memory location.means it's point to that memory location. 

```Object()``` has Object.prototype. 
Which was created by Javascript engine consists of predefine properties.

