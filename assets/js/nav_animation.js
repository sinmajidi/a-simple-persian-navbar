const nav=document.querySelector('nav')
const nav_items=document.querySelectorAll('.nav-menu li')
const body=document.querySelector('body')
const overlay=document.querySelector('.overlay')
const products=document.getElementById('products')
const sub_nav=document.querySelector('.sub-nav')
const close_button=document.querySelector('.fa-times')
const span=document.createElement('span')
const form=document.getElementById('form');
const username=document.getElementById('username');
const password=document.getElementById('password');
const openmenu=document.getElementById('openmenu');
const closemenu=document.getElementById('closemenu');
const hamberger_nav=document.querySelector('.hamberger-nav');
const global_header=document.querySelector('.global-header');
const mobileItemChildren = document.querySelector('.menu-item-has-children')
const user_icon=document.querySelector('.fa-user-circle');
const close_modal=document.getElementById('close_modal');


span.classList.add('highlight')
body.appendChild(span)

const popup=document.querySelector('.popup');
const signup_button=document.querySelector('.header_button_link');

user_icon.addEventListener('click',()=>{
    popup.style.display='block';
    popup.style.opacity='1';
    overlay.style.visibility='visible';
    overlay.style.opacity='1';
    body.style.overflow='hidden';
})

mobileItemChildren.addEventListener('click',toggleDropDownMenuMobile)
function toggleDropDownMenuMobile(){
    const iElement = this.querySelector('i')
    if(iElement.className==="fa fa-angle-left"){
        this.querySelector('i').className = "fa fa-angle-down"
    }else{
        this.querySelector('i').className = "fa fa-angle-left"
    }
    const ulElement = this.querySelector('ul');
    ulElement.classList.toggle('active')
    iElement.setAttribute('style','position:absolute;left:0')
    this.classList.toggle('active')
}

openmenu.addEventListener('click',(e)=>{
    e.preventDefault();
    OpenHambergerMenu();
})
function OpenHambergerMenu(){
    hamberger_nav.classList.remove('deactive');
    hamberger_nav.classList.add('active');
    global_header.style.transform='translatex(300px)';
    openmenu.style.display='none';
    closemenu.style.display='block';
    body.style.overflow='hidden';
}

closemenu.addEventListener('click',(e)=>{
    e.preventDefault();
    CloseHambergerMenu();
})
function CloseHambergerMenu(){
    hamberger_nav.classList.remove('active');
    hamberger_nav.classList.add('deactive');
    global_header.style.transform='translatex(0)';
    openmenu.style.display='block';
    closemenu.style.display='none';
}

form.addEventListener('submit',function(e){
        e.preventDefault();
        CheckInputs();
})
function CheckInputs(){
    usernameValue=username.value.trim();
    passwordValue=password.value.trim();
    if(usernameValue==='')
        setErrorfor(username,'نام کاربری باید حتما وارد شود');
    else if (!validateEmail(usernameValue))
        setErrorfor(username,'ایمیل باید با فرمت صحیح وارد شود');
    else
        setSuccessfor(username);
    if(passwordValue==='')
        setErrorfor(password,'کلمه عبور باید حتما وارد شود');
    else
        setSuccessfor(password);
    if(passwordValue.length<8)
        setErrorfor(password,'کلمه عبور باید حداقل 8 رقم باشد');
    else
        setSuccessfor(password);
    checkRecaptcha();
}
function setErrorfor(element,err){
    const formcontrol=element.parentElement;
    console.log(formcontrol);
    const small=formcontrol.querySelector('small');
    small.innerText=err;
    formcontrol.classList.add('error');
    return false;
    
}
function setSuccessfor(element){
    const formcontrol=element.parentElement;
    formcontrol.classList.remove('error');
    formcontrol.classList.add('success');
}
function validateEmail(email){
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}
function checkRecaptcha(){
    const response=grecaptcha.getResponse();
    console.log(response)
    if(response.length===0)
    alert('check recaptcha')
    else
    {
        //you can fil here optional
    }
}
nav_items.forEach((item)=>{
    item.addEventListener('mouseenter',highlight)
})

function highlight(){
    const item_cordinates=this.getBoundingClientRect();
    span.style.display='block';
    span.style.width=item_cordinates.width+'px';
    span.style.transform='translate('+item_cordinates.left+'px,'+item_cordinates.bottom+'px)';
}


nav.addEventListener('mouseleave',()=>{
    span.style.display='none';
})

products.addEventListener('mouseenter',()=>{
    sub_nav.style.display='flex';
})
sub_nav.addEventListener('mouseleave',()=>{
    sub_nav.style.display='none';
})

signup_button.addEventListener('click',()=>{
    popup.style.display='block';
    popup.style.opacity='1';
    overlay.style.visibility='visible';
    overlay.style.opacity='1';
    body.style.overflow='hidden';
})
console.log(close_button);
close_button.addEventListener('click',()=>{
    console.log("close_button");
    popup.style.display='none';
    popup.style.opacity='0';
    overlay.style.visibility='hidden';
    overlay.style.opacity='0';
    body.style.overflow='visible';
})

overlay.addEventListener('click',()=>{
    popup.style.display='none';
    popup.style.opacity='0';
    overlay.style.visibility='hidden';
    overlay.style.opacity='0';
    body.style.overflow='visible';
})
close_modal.addEventListener('click',()=>{
    popup.style.display='none';
    popup.style.opacity='0';
    overlay.style.visibility='hidden';
    overlay.style.opacity='0';
    body.style.overflow='visible';
})
/* sticky nav */
window.addEventListener('scroll',()=>{
    if(window.scrollY>=global_header.offsetHeight)
    {
        global_header.style.position="sticky";
    }
})
