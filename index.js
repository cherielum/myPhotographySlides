var i = 0 ;
var image = [];  //creating an array of images
var time = 3000; //3 second

//image List
image[0]= 'image1.jpg';
image[1]= 'image2.jpg';
image[2]= 'image3.jpg'; 
image[3]= 'image4.jpg'; 
image[4]= 'image5.jpg'; 

//change image
function changeImage() {
	document.slide.src = image[i]; //setting to first image

	if (i<image.length -1) {
		i++; 
		} else {
			i=0; 
		}

	setTimeout("changeImage()", time);
	console.log(123);
}


window.onload = changeImage; 





