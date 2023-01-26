// Event delegation is a technique in which an event handler is added to a parent element rather than to individual child elements. The event handler will then check the target of the event to determine if it should take any action. This can be more efficient than adding event handlers to many child elements, especially if the child elements are dynamically added or removed from the page.


document.getElementById("list").addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        console.log(event.target.innerHTML + " clicked");
        alert(event.target.innerHTML + " clicked");
    }
});