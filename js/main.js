let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

window.onscroll = () =>{
    navbar.classList.remove("active");
}

const sr = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,
})

sr.reveal(`.home`, {delay: 700})

$(document).ready(function(){
    $('.tabs-1').show();
    $('.tabs-2').hide();
    $('.tabs-3').hide();
    $('.tabs-4').hide();

    $('#enlace1').click(function(){
        $('.tabs-1').show();
        $('.tabs-2').hide();
        $('.tabs-3').hide();
        $('.tabs-4').hide();
    });

    $('#enlace2').click(function(){
        $('.tabs-2').show();
        $('.tabs-1').hide();
        $('.tabs-3').hide();
        $('.tabs-4').hide();
    });

    $('#enlace3').click(function(){
        $('.tabs-4').hide();
        $('.tabs-3').show();
        $('.tabs-2').hide();
        $('.tabs-1').hide();
    });

    $('#enlace4').click(function(){
        $('.tabs-4').show();
        $('.tabs-3').hide();
        $('.tabs-2').hide();
        $('.tabs-1').hide();
    });
});


const cards = document.getElementById('cards')
const templateCard = document.getElementById('tempcard').content
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', e => { fetchData() });

// Traer productos
const fetchData = async () => {
    const res = await fetch('apic.json');
    const data = await res.json()
    // console.log(data)
    pintarCards(data)
}

// Pintar productos
const pintarCards = data => {
    data.forEach(item => {
        templateCard.querySelector('#planet').textContent = item.name
        templateCard.querySelector('#description').textContent = item.description
        templateCard.querySelector('#distance-text').textContent = item.distance
        templateCard.querySelector('#travel-text').textContent = item.travel
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}




/*

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

window.onscroll = () =>{
    navbar.classList.remove("active");
}

const sr = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,
})

sr.reveal(`.home`, {delay: 700})

$(document).ready(function(){
    $('.tabs-1').show();
    $('.tabs-2').hide();
    $('.tabs-3').hide();
    $('.tabs-4').hide();

    $('#enlace1').click(function(){
        $('.tabs-1').show();
        $('.tabs-2').hide();
        $('.tabs-3').hide();
        $('.tabs-4').hide();
    });

    $('#enlace2').click(function(){
        $('.tabs-2').show();
        $('.tabs-1').hide();
        $('.tabs-3').hide();
        $('.tabs-4').hide();
    });

    $('#enlace3').click(function(){
        $('.tabs-4').hide();
        $('.tabs-3').show();
        $('.tabs-2').hide();
        $('.tabs-1').hide();
    });

    $('#enlace4').click(function(){
        $('.tabs-4').show();
        $('.tabs-3').hide();
        $('.tabs-2').hide();
        $('.tabs-1').hide();
    });
});

const cards = document.getElementById('cards')
const templateCard = document.getElementById('tempcard').content
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', e => { fetchData() });

// Traer productos
const fetchData = async () => {
    const res = await fetch('apic.json');
    const data = await res.json()
    // console.log(data)
    pintarCards(data)
}

// Pintar productos
const pintarCards = data => {
    data.forEach(item => {
        templateCard.querySelector('p').textContent = item.precio
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}



*/
