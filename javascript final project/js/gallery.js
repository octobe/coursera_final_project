/*Name this external file gallery.js*/
function upDate(previewPic){
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    console.log("Changing background image to: " + previewPic.src);
    document.getElementById("image").innerHTML = previewPic.alt;
    console.log("Changing text to: " + previewPic.alt);
      }
  
  
      function unDo(){
    document.getElementById("image").style.backgroundImage = '';
    document.getElementById("image").innerHTML = 'Hover over an image below to display here.';		
      }