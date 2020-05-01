function slideShowImages(){
const slideShow = document.querySelectorAll('.slide-show img')
const nextDelay = 4000
let currImage = 0

slideShow[currImage].style.opacity = 1;
setInterval(nextImage, nextDelay)

function nextImage(){
    slideShow[currImage].style.opacity = 0;

    currImage = (currImage+1)%slideShow.length;
    slideShow[currImage].style.opacity = 1;
    var i=-500;
    var id2 = setInterval(anim2,1)
    function anim2(){
        if(i>0)
        clearInterval(id2)
        i+=1;
        slideShow[currImage].style.left = i+'px';
    }
}
}

export default slideShowImages;