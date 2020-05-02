//Convert article content from string data into HTML values so <br /> gets recorded
let value = document.getElementById("content").textContent;
document.getElementById("content").innerHTML = value;


//adds event listener to add a comment button
document.getElementById("comment-box-button").addEventListener("click", () => {
    document.getElementById("comment-box-button").style.visibility = "hidden";
    document.getElementById("comment-form").style.visibility = "visible";
});