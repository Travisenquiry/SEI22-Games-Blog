if(document.getElementById("upload_widget")){
  var myWidget = cloudinary.createUploadWidget({
    cloudName: 'travisenquiry',
    uploadPreset: 'aheccwh1'}, (error, result) => {
      if (!error && result && result.event === "success") {
        myWidget.close();
        document.getElementById("image-link").value = result.info.url;
        document.getElementById("image-after-upload").innerHTML = result.info.url;
        document.getElementById("upload_widget").style.visibility = "hidden";
      }
    }
  )

  document.getElementById("upload_widget").addEventListener("click", function(){
      myWidget.open();
    }, false);
}