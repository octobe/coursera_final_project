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

function setImage() {
  var images = document.querySelectorAll('.preview');
  for (let i = 0; i < images.length; i++) {
    let attributes = {
      'tabIndex': 0,
      'onmouseover': 'upDate(this)',
      'onmouseout': 'unDo()',
      'onfocus': 'upDate(this)',
      'onblur': 'unDo()'
    };

    for (let attr in attributes) {
      images[i].setAttribute(attr, attributes[attr]);
    }
  }
}
      
      
