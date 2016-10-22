console.log('Loaded!');

// Chaing the text of the main-text div

var element = document.getElementById('main-text'
);

element.innerHTML = 'Change the Content Here!';

// Moving the image 
var marginLeft = 0;
var img = document.getElementById('demo');
function moveRight() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px' ;
}

img.onclick = function()
{
    var interval= setInterval(moveRight,'100')
  //  img.style.marginLeft = '100px';
};
