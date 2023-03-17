const image = [
    './images/pic-1.jpg',
    './images/pic-2.jpg',
    './images/pic-3.jpg',
    './images/pic-4.jpg',
    './images/pic-5.jpg',
    './images/pic-6.jpg',
    './images/pic-7.jpg',
    './images/pic-8.jpg',
    './images/pic-9.jpg',
];

let count = 0;
const imageSlide = document.getElementById('image');
setInterval(() => {
    imageSlide.setAttribute('src',image[count++])
    if(count >= 9) count = 0;
}, 1000);


let anotherCounter = 0;
const clickToSlide = document.getElementById('clickToSlide');
const previous = document.getElementById('previous').addEventListener('click',function(){
    clickToSlide.setAttribute('src',image[anotherCounter--]);
    if(anotherCounter <= 0){
        anotherCounter = 0;
    }
})
const next = document.getElementById('next').addEventListener('click',function(){
    clickToSlide.setAttribute('src',image[anotherCounter++]);
    if(anotherCounter >= 9){
        anotherCounter = 0;
    }
});