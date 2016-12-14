window.onload = function() {
    document.body.className += " loaded";
    if (window.innerWidth >= 680) {
        document.getElementById('second').className += ' fadeInLeft';
        document.getElementById('third-red').className += ' slideInLeft';
        document.getElementById('balloon-image').className += ' slideInRight';
        document.getElementById('fimage-block').className += ' slideInLeft';
        document.getElementById('fmap-block').className += ' slideInRight';
    }

}

var leftGroup = document.querySelectorAll('.leftA');
var rightGroup = document.querySelectorAll('.rightA');
var targetForFlag = document.getElementById('nav_gallery').style.display;
var burger = document.getElementById('mobile_menu').classList;
function flag(){
    return targetForFlag == 'none';
}
function toggleAnimationClasses(){
    burger.toggle('clicked');
    if (flag()){
        for(var i=0; i<2;i++)
        {
            leftGroup[i].classList.toggle('fadeInLeft');
            rightGroup[i].classList.toggle('fadeInRight');
            leftGroup[i].classList.toggle('fadeOutLeft');
            rightGroup[i].classList.toggle('fadeOutRight');
        }
        targetForFlag = 'block';
    }
    else if(targetForFlag == 'block'){
        for(var i=0; i<2;i++)
        {
            leftGroup[i].classList.toggle('fadeInLeft');
            rightGroup[i].classList.toggle('fadeInRight');
            leftGroup[i].classList.toggle('fadeOutLeft');
            rightGroup[i].classList.toggle('fadeOutRight');
        }
        targetForFlag = 'none';
    }
    else{
        for(var i=0; i<2;i++)
        {
            leftGroup[i].classList.toggle('fadeInLeft');
            rightGroup[i].classList.toggle('fadeInRight');
            leftGroup[i].classList.toggle('animated');
            rightGroup[i].classList.toggle('animated');
        }
        targetForFlag = 'block';
    }
}

mobile_menu.onclick = toggleAnimationClasses;
close_menu.onclick = toggleAnimationClasses;
