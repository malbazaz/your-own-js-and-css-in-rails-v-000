function hideWhenClicked(){
// hides the element that was clicked
// bind hide_this
document.getElementById("myBtn").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World";
});
const x = document.getElementById('hide_this')
x.addEventListener("click",function(){
  x.display = "none";
})
    
}

$(document).ready(function() {
  hideWhenClicked();
});
