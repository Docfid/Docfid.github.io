var Image = document.querySelector('img');
Image.onclick = function() {
    var Src = Image.getAttribute('src');
    if(Src === 'image/2.jpg') {
		Image.setAttribute ('src','image/3.jpg');
    }
	else {
		Image.setAttribute ('src','image/4.jpg');
	}
	 if(Src === 'image/4.jpg') {
		Image.setAttribute ('src','image/5.jpg');
	 }
	 if(Src === 'image/5.jpg') {
		Image.setAttribute ('src','image/2.jpg'); 
	 }
}
var Button = document.querySelector('button');
var Head = document.querySelector('h1');
	Button.onclick = function() {
	location.href='http://clubmasters.ru/musicschool';
}