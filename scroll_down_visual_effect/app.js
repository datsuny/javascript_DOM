scrollAppear = () => {
    var introText = document.querySelector('.intro-text');

    //to get dimensions, in this case, the top.
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/1.2;

    if(introPosition < screenPosition){
        introText.classList.add('intro-appear');
    }


}

window.addEventListener('scroll', scrollAppear);