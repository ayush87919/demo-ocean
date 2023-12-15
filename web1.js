burger= document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navlist = document.querySelector('.navlist')


burger.addEventListener('click',()=>{
    navbar.classList.toggle('hnav-resp');
    navlist.classList.toggle('vclass-resp');
    rightnav.classList.toggle('vclass-resp');
})

