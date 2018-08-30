function hideWhenClicked(){
// hides the element that was clicked
// bind hide_this
let x = document.getElementById('hide_this')
if (x.display === "none") {
    x.display = "block";
} else {
    x.display = "none";
}
}
