1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**Answer**: 
 **getElementById**,
 . Returns an element with the specified id.
 . Gets only one element.
 . Does not support CSS selectors.
 **getElementsByClassName**,
 . Returns all elements of a specified class.
 . Returns HTMLCollection, elements must be retrieved by index.
 .Does not support CSS selectors.
 **querySelector**,
 . Any CSS selector can be used.
 . Returns the first matching element.


2. How do you **create and insert a new element into the DOM**?

**Answer**
. Creat the element using document.creatElement().
. Set content or attributes using textContent or seAttribute().
. Insert into DOM using appendChild() or insertBefore().


3. What is **Event Bubbling** and how does it work?

**Answer** 
**Event Bubbling**
. Event bubbling is a step in javaScript's Event Propagation, where the event is first triggered on the inner element and then propagates upwards from parent ---> grandparent ---> document.
**How it work**
. User action(click, ets.) --> event will be handled on the element where it first occurred .
. Then the same event will go to the parent element.
. Then it will continue to rise like a bubble until grandparent ---> document ---> window. 


4. What is **Event Delegation** in JavaScript? Why is it useful?

**Answer**
**Event Delegation**
. Event Delegation is a technique where events of child elements are handled by placing an event listener on the parent element.
It works by taking advantage of Event Bubbling.
**Why is it useful**
. Less code required- No need to set a separate listener for each child element.
. Can handle dynamic elements - Works even when new children are added to the DOM.
. Memory efficient - Fewer event listeners mean less memory usage.


5. What is the difference between **preventDefault() and stopPropagation()** methods?

**Answer**
**PreventDefault()**
. Function: Disables the browser's default behavior.
. Does not disable event propagation.
. Example: Disables form submit or link redirection.