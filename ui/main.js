console.log('Loaded!');

// Chaing the text of the main-text div

var element = document.getElementById('main-text'
);

element.innerHTML = 'Change the Content Here!';

// Moving the image 
var img = document.getElementById('demo');
img.onclick = function()
{
    img.style.marginLeft = '100px';
};
