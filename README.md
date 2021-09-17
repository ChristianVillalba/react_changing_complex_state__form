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

We already have some experience using [React: Forms](https://github.com/ChristianVillalba/React_forms.git).       
But when we have too many inputs,       
We would have too many functions and separate constants,       
even though those pieces of information probably should be associated with each other       
(eg: in this project, First Name & Last Name should be associated to the same JS Object).
```javascript
const [fName, setFirstName] = useState("");
const [lName, setLastName] = useState("");
```

### UseState - Objects
We can use ```useState``` but instead of storing a simple value,      
we can actually store an Object as well.
eg: 

```javascript
const [fullName, setFullName] = useState({
  fName: "",
  lName: "",
});
```
Now our ```fullName``` is storing a Object,       
And when we call ```setFullName```, we want to set it to a new Object.

We have to update our code in our return statement:
```html
<h1> Hello, {fullName.fName} {fullName.lName} </h1>
...
<input 
value={fullName.fName}
onChange={handleNameChange}
... 
/>
<input 
value={fullName.lName}
onChange={handleNameChange}
... 
/>
```
We are fetching ```fName``` and ```lName``` from the Object ```fullName```.            
On the ``onChange``, instead of calling two separate methods,        
I'm going to get it call the same method: ```{handleNameChange}```

```javascript
function handleNameChange(event) {
  const NewValue = event.target.value
}
```
So when either of these Inputs are changed,        
they're going to call the same function passing over the ```event``` that calls this change.         
And then, inside this function, we're going to get hold of the new value (```newValue```),       
and I'm gonna set it to ```event.target.value```.

But then I want to somehow be able to get hold of the previous value of the full name (fName & lName),    
so that I can add to it the parts that have been changed.      
So if one inputs changes, then I only want to update that value independently,     
The other part should stay as it was.     

To know which Input actually triggered the ```handleNameChange```:      

```javascript
function handleNameChange(event) {
  const NewValue = event.target.value;
  const inputName = event.target.name;
}
```
We add to Input ```name=``` ```"fName"``` / ```"lName"```,      
And we add to the function ```handleNameChange``` a new const ```inputName```     
The new ```newValue``` also changes our ```inputName```.

But still we can't see changes in our app, 



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
