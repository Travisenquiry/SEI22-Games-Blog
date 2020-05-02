//Convert article content from string data into HTML values so <br /> gets recorded
let value = document.getElementsByClassName("content");
for(let i=0; i < value.length; i++){
  value[i].innerHTML = value[i].textContent;
}

//adds event listener to add a comment button
if(document.getElementById("comment-box-button")) {
  document.getElementById("comment-box-button").addEventListener("click", () => {
      document.getElementById("comment-box-button").style.visibility = "hidden";
      document.getElementById("comment-form").style.visibility = "visible";
      document.getElementById("comment-form-header").style.visibility = "visible";
  });
}