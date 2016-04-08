# OOJS: Model an Orange Tree

## Summary
Remember the [orange tree][orange tree challenge] objects that we built in Ruby?  We're going to build JavaScript objects with the same attributes and behaviors.  

We're going to create orange trees through a constructor function.  The constructor will initialize each tree with its own unique attributes: age, height, and a collection of oranges.  All trees might start being zero years old, zero feet tall, and with an empty collection of oranges; but, these attributes are unique to each tree object—they're not shared.  On the other hand, the behaviors of orange trees will be shared.  All trees will inherit methods for aging, growing, etc.


### Prototypal Inheritance
When thinking about inheritance in JavaScript, throw out what we know about method lookup in Ruby—well, most of it, anyway.  JavaScript doesn't have classes, so when an object itself doesn't have a property, we can't look in the class, parent class, grandparent class, etc.  Instead, JavaScript objects inherit attributes and behaviors from their prototypes.  So, what is a prototype and how does an object get a prototype?

Every JavaScript function has a `prototype` property.  Regardless of whether we intend to use the function as a constructor or not, when we write a function, JavaScript will give the function a `prototype` property and set its value to a new empty JavaScript object (`{}`, see Figure 1).

```js
var addition = function(number1, number2) {
  return number1 + number2;
}
addition.prototype;
// => {}

var Person = function(name) {
  this.name = name;
}
Person.prototype;
// => {}
addition.prototype === Person.prototype;
// => false ()
```
*Figure 1*. Creating functions and looking at the value of each function's `prototype` property.


So, every function has a `prototype`, how does that affect inheritance?  A function's `prototype` object comes into play when we use a function as a constructor (e.g., `new Person("Jamie")`).  When we use a function as a constructor to initialize objects, the constructor's prototype object is figuratively buried deep within the newly created objects and becomes the object from which the new instances inherit.  If we want to know from which object an object inherits, we can ask `Object` to get it for us.  Figure 2 presents some code to demonstrate these concepts; follow along in the browser console or the node REPL if node is installed on our system (use the `node` command from the command line).

```js
// Create a constructor function and check its prototype.
var Person = function(name) {
  this.name = name;
}
Person.prototype;
// => {}


// Give the Person constructor's prototype a greeting property.
Person.prototype.greeting = "Hello";
Person.prototype;
// => { greeting: 'Hello' }


// Create a new Person instance, jamie.
jamie = new Person("Jamie");
// => { name: 'Jamie' }


// Look up the object from which the jamie object inherits.
Object.getPrototypeOf(jamie);
// => { greeting: 'Hello' }


// Show that the object from which the jamie object inherits
// is the Person constructor's prototype.
Object.getPrototypeOf(jamie) === Person.prototype;
// => true


// Show that the jamie object inherits the greeting property
// from the Person constructor's prototype.
Person.prototype.greeting;
// => 'Hello'
jamie;
// => { name: 'Jamie' }
jamie.name;
// => 'Jamie'
jamie.greeting;
// => 'Hello'


// Add another property to the Person constructor's prototype, 
// and show that is it inherited by the jamie object.
Person.prototype.bigName = function() {
  return this.name.toUpperCase();
}
jamie.bigName();
// => 'JAMIE'
```
*Figure 2*.  Exploring prototypal inheritance in JavaScript.


## Releases
### Release 0: Model an Orange Tree
Here are some details for how our orange tree model will behave.  Don't worry about modeling things like how the temperature affects production; we're just building a basic model.  Each of these details should be translated into tests (`spec/orange_tree_spec.js`), so that we can verify that our model conforms to each expectation.  Suggested property names are in parentheses; our model may very well include more properties than these.

- A tree has an age, which we should be able to check (`age`).
- A tree has a height, which we should be able to check (`height`).
- A tree has a collection of oranges, which we should be able to check (`oranges`).
- We can check if a tree is old enough to produce fruit (`is_mature()`).
- A tree dies at age 100, and we can check if it's dead (`is_dead()`).
- We can check if a tree has any oranges (`has_oranges()`).
- Each growing season (`pass_growing_season()`) ...
  - Any unharvested oranges from the previous season should drop.
  - A tree should age one year.
  - A tree should grow 2.5 feet taller until it reaches its maximum height, say 25 feet.
  - A tree should bear fruit if it is mature (i.e. at least six years old), say 100 to 300 oranges.
- We can pick an orange off a tree (`pick_an_orange()`).


## Conclusion
Prototypal inheritance is different from the class-based inheritance found in Ruby.  When we try to access a property of an object, property look up starts with the object itself.  If the object has the property, it is returned.  If it doesn't have the property, then we look for the property in the object's prototype, then the prototype's prototype, etc.  We should leave this challenge understanding how to share properties among objects created through the same constructor function by relying on inheriting from the constructor's prototype object.


[orange tree challenge]: ../../../../orange-tree-1-just-oranges-challenge