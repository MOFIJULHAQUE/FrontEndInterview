// Event bubbling is a mechanism in JavaScript where an event on a child element will propagate to its parent element. For example, if a click event occurs on a button within a div, the click event will also be triggered on the div. This allows for event handlers to be added to parent elements in order to catch events from multiple child elements.


document.getElementById("btn").addEventListener("click", function () {
    alert("Button clicked");
    console.log("Button clicked");
});

document.getElementById("child1").addEventListener("click", function () {
    alert("Child1 clicked");
    console.log("Child1 clicked");
});

document.getElementById("parent").addEventListener("click", function () {
    alert("Parent clicked");
    console.log("Parent clicked");
});