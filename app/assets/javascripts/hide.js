function hideWhenClicked(){
// hides the element that was clicked
// bind hide_this
let x = document.getElementById('hide_this')
    x.display = "none";
}

$(document).ready(function() {
  hideWhenClicked();
});
