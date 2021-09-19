# React: Changing Complex State - Form
Created with [CodeSandbox](https://codesandbox.io/)  
Notes from: React module  
[The Complete 2021 Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)  
Instructor: Dr. Angela Yu 

## Description
This app is a Form consiting of: 
* Input: First Name
* Input: Last Name
* Submit Button

---
## Notes

### Complex State
This project is about managing the state of Javascript Objects,     
where we have to retrieve the previous value of the Object.

We already have some experience using basic [React: Forms](https://github.com/ChristianVillalba/React_forms.git).       
But having too many inputs, will produce too many functions and separate constants,       
even though those pieces of information probably should be associated with each other       
(eg: in this project, First Name & Last Name should be associated to the same JS Object).
```javascript
const [fName, setFirstName] = useState("");
const [lName, setLastName] = useState("");
```

### UseState - Objects
```useState``` can store a simple value or an Object as well.
eg: 

```javascript
const [fullName, setFullName] = useState({
  fName: "",
  lName: "",
});
```
Now our ```fullName``` is storing a Object,       
And when we call ```setFullName```, we want to set it to a new Object.

We have to update our code in our return statement because      
```value``` is fetching (the data) ```fName``` and ```lName``` from the JS Object ```fullName```.     
```name``` it's the name of the HTML Input, It will help us later on to know what Input was triggered. 

```html
<h1> Hello, {fullName.fName} {fullName.lName} </h1>
...
<input 
value={fullName.fName}
onChange={handleNameChange}
name="fName"
... 
/>
<input 
value={fullName.lName}
onChange={handleNameChange}
name="lName"
... 
/>
```
   
On the ``onChange`` Attribute, instead of calling two separate methods,        
I'm going to get it call the same method: ```{handleNameChange}``` (it will be a JS funct)      
So when either of these Inputs are changed,        
they will call the same function passing over the ```event``` that calls this change:    

```javascript
function handleNameChange(event) {
  const newValue = event.target.value;
  const inputName = event.target.name;
  
}
```
     
Inside this function, we're going to get hold of the new value (```newValue```),       
and I'm gonna set it to ```event.target.value```.

We use ```event.target.name``` to know which Input actually triggered the ```handleNameChange```     
and store the value on ```inputName```.     

   the funct ```handleNameChange``` gets hold of the previous value ```prevValue``` of the ```fullName``` (JS Obj),    
so that I can add to it the parts that have been changed.      
So if one input changes, then I only update that value independently, the other part should stay as it was.     

But still we can't see changes in our app,     
```value``` is a **controlled components** so their value is set to the ```fullName.``` ```fName```/```lName```


<!-- eg: Challange 1
added an input to the website
I want to be able to greet the user using both of these pieces of information       
so that when they type their first name, it says hello       
and then adds the first name to the      
and then when they add their last name, the first name is still there and it's still stateful.
And the last name also updates and is independent from the first name. -->


---
## What I have learned with this project:
* Storing Objects in useState
* Managing the state of the Objects stored
* Update the code to be able to use the Objects stored in useState
* 
