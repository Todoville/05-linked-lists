![cf](http://i.imgur.com/7v5ASc8.png) lab 05 - Linked List Data Structure
====

## To Submit this Assignment
  * fork this repository and work in a branch called `lab-05`
  * submit a pull request to your forked repository
  * Set up Travis CI on your forked repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Requirements  
#### Configuration  
  <!-- list of files, configurations, tools, etc that are required -->
  Your lab directory must include  
  * **README.md** -- with a documentation about your lab
  * **.gitignore** -- with a robust .gitignore
  * **.eslintrc** -- with the class .eslintrc file
  * **.eslintignore** -- with the class .eslintignore
  * **.package.json** -- with all dependencies and dev-dependencies
  * **lib/** -- directory for holding your programs helper modules
  * **__test__/** -- directory for holding your programs unit and integration tests

#### Testing  
  * write at least two test assertions for each method of your Linked List class
  * organize your tests into appropriate describe/it blocks for test output readability

####  Documentation  
  * in your README, write documentation for you data structures
  * your documentation should includes code block examples
  * provide instructions for:
    * installing and using your data structure
    * accessing each method
    * running your tests

#### Feature Tasks  
  * implement a `LinkedList` class which will use a `Node` class that you have also defined
  * implement a `pop()` on the LinkedList prototype
  * implement a `remove(value)` on the prototype
  * implement `map()` _or_ `reduce()` as pure methods on the LinkedList prototype
  * in comments above or within each function, note the Big-O time AND space complexity

## Bonus Points (not eligible on resubmits):
  * 1pt: test your Node class as well with at least two test assertions, one for a successful instantiation and another for unsuccessful instantiation
  * 2pts: refactor your Linked List class so `pop()` can have a constant / O(1) run time.
