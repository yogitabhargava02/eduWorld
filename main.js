// change navbar on scroll
window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY >  0);
})

const faqs= document.querySelectorAll('.faq');
faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
    faq.classList.toggle('open');


    //changeicom\
    const icon= faq.querySelector('faq_icon i');
if(icon.classList==='fa-solid fa-plus'){
    icon.className='fa-solid fa-minus'
}
else{
    icon.className='fa-solid fa-plus';
}
})
})

