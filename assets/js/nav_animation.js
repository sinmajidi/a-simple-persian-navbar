const nav=document.querySelector('nav')
const nav_items=document.querySelectorAll('.nav-menu li')
const body=document.querySelector('body')
const span=document.createElement('span')
const products=document.getElementById('products')
const sub_nav=document.querySelector('.sub-nav')
span.classList.add('highlight')
body.appendChild(span)

nav_items.forEach((item)=>{
    item.addEventListener('mouseenter',highlight)
})


nav.addEventListener('mouseleave',()=>{
    span.style.display='none';
})

products.addEventListener('mouseenter',()=>{
    sub_nav.style.display='flex';
})
sub_nav.addEventListener('mouseleave',()=>{
    sub_nav.style.display='none';
})


function highlight(){
    const item_cordinates=this.getBoundingClientRect();
    span.style.display='block';
    span.style.width=item_cordinates.width+'px';
    span.style.transform='translate('+item_cordinates.left+'px,'+item_cordinates.bottom+'px)';
}