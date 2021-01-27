let images = ["me.jpg", "metoo.jpg"];
let backgroundColor = [" #eccd41", "rgba(221, 221, 221)"]
const img = document.querySelector('.img-container img');
const firstSpan = document.querySelector('.first');
const secondSpan = document.querySelector('.second');
const firstBtn = document.querySelector('.first-btn i');
const secondBtn = document.querySelector('.second-btn i');
firstBtn.addEventListener('click', function(){
        img.src = images[0];
        firstSpan.style.backgroundColor = backgroundColor[0];
        secondSpan.style.backgroundColor = backgroundColor[1];
});
secondBtn.addEventListener('click', function(){
        img.src = images[1];
        firstSpan.style.backgroundColor = backgroundColor[1];
        secondSpan.style.backgroundColor = backgroundColor[0];
});

// fashion-container

const fashionContainer = document.querySelector('.fashion-container');
fashionContainer.style.display = 'none';
let fashionLink = document.querySelector('.fashion a');
fashionLink.addEventListener('click', function(e){
        e.preventDefault();
        fashionContainer.style.display = "block";
        //this.target = '_blanck';
        let child = document.createElement('div');
        child.setAttribute('class', 'child');
        let message = "Coming Soon!";
        child.textContent = message;
        let closeButton = document.createElement('button');
        closeButton.setAttribute('class', 'close-button');
        let btnContent = document.createTextNode('X');
        closeButton.appendChild(btnContent);
        fashionContainer.appendChild(child);
        fashionContainer.appendChild(closeButton);
        closeButton.addEventListener('click', function(){
                this.parentNode.style.display = 'none';
        }); 
});


