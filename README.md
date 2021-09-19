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

#### Updating the code tha JSX Code that will be rendered as HTML

We have to update our code in our return statement:      
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

#### Function that outpouts depending on the previous value

```javascript
function handleNameChange(event) {
  const newValue = event.target.value;
  const inputName = event.target.name;
  setFullName((prevValue) => {
    if (inputName === "fName") {
      return {
        fName: newValue,
        lName: prevValue.lName
      };
    } else if (inputName === "lName") {
      return {
        fName: prevValue.fName,
        lName: newValue
      };
    }
  });
}
```
     
Inside this function, we're going to get hold of the new value (```newValue```),       
and I'm gonna set it to ```event.target.value```.

We use ```event.target.name``` to know which Input actually triggered the ```handleNameChange```     
and store the value on ```inputName```.     

The funct ```handleNameChange``` gets hold of the previous value ```prevValue``` of the ```fullName``` (JS Obj),    
so that I can add to it the parts that have been changed.      
So if one input changes, then I only update that value independently, the other part should stay as it was.     

As we type into our inputs, React will re-render our app component.      
Our app has state in the form of the ```fullName``` (JS Object).       
And React remembers the value of this Object.          
We can use this remembered value as we're updating our ```fName``` or our ```lName```.      

The code above is functional and as expressive as possible, however it's more common to see this code in a simpler way...

#### Object Destructuring

```javascript
const newValue = event.target.value;
const inputName = event.target.name;
```
It can be changed to:
```javascript
const {value, name} = event.target;
});
```
And use this constants in our function:
```javascript
setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    }
```

#### SyntheticEvent

Remember, don't try to access ```event```.target or anything related to the ```event```      
inside the ```setFullName``` function. eg: (```event.target.value```)

When the inputs are passing an event through these event listeners (onChange) ,     
the event that you actually get hold of is not a real event. It's a ***synthetic event*** that React has created.
And we must never try to access those events when you're trying to use stateful setters (```setFullName``` in our case).

---
## What I have learned with this project:
* Storing Objects in useState
* Managing the state of the Objects stored
* Update the code to be able to use the Objects stored in useState
* Function that outpouts depending on the previous value
* Object Destructuring
