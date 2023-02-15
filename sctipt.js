const toggleButton = document.getElementsByClassName('toggle-button')[0]
const show = document.getElementsByClassName('show')[0]
const faders = document.querySelectorAll('.fade-in');



toggleButton.addEventListener('click',() =>{
    show.classList.add('active')
})
const ex = document.querySelector('.ex').addEventListener('click',() =>{
    show.classList.remove('active')
})


const appearOptions = {
    threshold:0,
    rootMargin:"0px 0px -250px 0px"
    
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
entries.forEach(entry => {
    if(!entry.isIntersecting){
        return;
    } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    }
});
}, appearOptions);


faders.forEach(fader => {
   appearOnScroll.observe(fader); 
})

