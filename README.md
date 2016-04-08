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

### Release 0 : Working with Jasmine

We've written a lot of tests for you in Jasmine, your job is to write the code
to make these tests pass.  Start your test server by running `rake jasmine`.
You should see your first failing test.  Write code in
`src/plain-old-js-objects.js` to make this test pass.  Then uncomment the next
test (change the `xit` to `it`) and keep going.

### Release 1 : Plain Old JavaScript Objects (Object Literals)

Here we'll be building objects with functions. In this release we will create an
orange tree, age the tree, grow oranges on the tree, and pick fruit off the
tree.  We will model all of this using JavaScript functions and
Plain-Old-JavaScript-Objects(aka Object-Literals -- without constructor functions).

* One by one, make the
  [plain-old-js-objects-spec](./spec/javascripts/plain-old-js-objects-spec.js)
  pass without using prototypes or constructor functions. Use the
  [plain-old-js-objects](./javascripts/src/plain-old-js-objects.js) file.
* Refactor your JavaScript source files!
* Refactor your spec files!

### Release 2 : JavaScript Constructor Function Objects

In this release we will AGAIN create an orange tree, age the tree, grow oranges
on the tree, and pick fruit off the tree.  We will model all of this using
JavaScript constructor functions and Prototypes.

* One by one, copy the plain old js objects spec into the typed objects spec.
  However, change them to use the `new OrangeTree` and `prototype` syntax as you
  do. use the `javascripts/typed-js-objects.js` file.
* Refactor your JavaScript source files!
* Refactor your spec files!

### Release 3 : The view

Now let's add some interaction with the DOM. Write your DOM interaction code in
`view.js` using the [jQuery library][]. Use either the
objects you built in release 1 or 2.

In this release, let's try writing the code first and then the tests.  We've
provided you a primitive HTML shell in [`orange.html`](./orange.html).

* Write code that allows you to `plant` a tree by clicking a button. It should
  make the tree become visible on the screen somehow.  Look at
  `#orange-tree-template`.  It's not showing when the page loads, could you use
  JavaScript to change a CSS property on that div to make it appear?  Once the
  tree is visible can you make the button become disabled?
* Write code that allows you to `age` a tree by clicking a button.  If you age
  the tree enough there should be oranges that appear on the tree (use the
  orange image).  The age of the tree should be shown in the `p.age` element.
  The total number of oranges it has should be shown in `p.fruit-count`.
* Write code that allows you to `pick` an orange off a tree by clicking a
  button.  This should decrease the count of fruits as well as remove an image

**WARNING**:  Congratulations - you've reached the edge of procedural code.  To
achieve the goals of Release 3 you _could_ do a very procedural implementation
- but each additional change of functionality will be painful and make you sad.
Try to figure out how to implement the MVC pattern in JavaScript.  MVC has
nothing to do with how files are laid out or any particular language but is a
way of identifying primary responsibilities and associating them with classes.
As we said, above, Orange Trees is a simple application that affords you the
change _to create a beautiful implementation_.  Take advantage of this
narrowly-focused application to build your skills!

### Release 4

Explore the `jasmine-jquery` gem to write tests for the jQuery code in the
previous release.

### Release 5

* Have some fun.  Can you add a pear tree? Can you do it TDD?
* Can you pick all the fruit that grows each year and put it in a basket?
* Can you know the number of fruit in the basket and the average diameter of
  that fruit at any time?

## Resources

1. [tryJasmine.com](http://tryjasmine.com)
1. [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
1. [Jasmine Documentation](http://jasmine.github.io/2.0/introduction.html)
1. [Jasmine Cheat Sheet](http://www.cheatography.com/citguy/cheat-sheets/jasmine-js-testing/)
1. [Jasmine jQuery](https://github.com/velesin/jasmine-jquery)
1. [Another Jasmine Tutorial](http://evanhahn.com/how-do-i-jasmine/)
1. [Sandi Metz][metz]
1. [jQuery][jQuery library]

[metz]: http://www.sandimetz.com/
[jQuery library]: http://jquery.com/
[orange tree challenge]: ../../../../orange-tree-1-just-oranges-challenge