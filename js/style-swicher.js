// toggle style swicher
const styleSwicher = document.querySelector('.style-swicher');
const swicherToggle = document .querySelector('.style-swicher-toggler');

swicherToggle.addEventListener('click',function(){
    styleSwicher.classList.toggle('open');
})
//hidden swicher on scroll
window.addEventListener('scroll', function(){
    if( styleSwicher.classList.toggle('open')){

        styleSwicher.classList.toggle('open').style.display = 'none';
    }
})

// ======================theme colors==============
const alternateStyle = document.querySelectorAll('.alternate-style');

function setActiveStyle(color){
    alternateStyle.forEach (elem =>{
        if(color === elem.getAttribute('title')){
            elem.removeAttribute('disabled');
        }else{
            elem.setAttribute('disabled','true');
        }
    })
}


// =================theme light and dark mode
const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click',function(){
    this.querySelector('i').classList.toggle('fa-sun');
    this.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
})

window.addEventListener('load',function(){
    if(document.body.classList.contains('dark')){
        dayNight.querySelector('i').classList.add('fa-sun');
    }else{
        dayNight.querySelector('i').classList.remove('fa-moon');
    }
})