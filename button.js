window.onscroll = function() {scrollFunction()};
// once the user scrolls, they button should appear (knows that is is scrolling from the scroll function)

function scrollFunction() {
  // defining the scroll function
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 50) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
// if the user scrolls more than 20 units from the top, then the button should appear. if not, then it shouldn't

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0} // For Chrome, Firefox, IE and Opera
// telling it to scroll, but you need different commands for different languages.
