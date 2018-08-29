function hideWhenClicked(){
// hides the element that was clicked
// bind hide_this
let x = document.getElementById('hide_this')
if (x.style.display === "none") {
    x.style.display = "block";
} else {
    x.style.display = "none";
}
}
