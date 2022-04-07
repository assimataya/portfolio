const nav = document.querySelector('.navList');
const navToggle = document.querySelector('.mobileToggle');
const app1 =  document.querySelector(".app1");
const app2 =  document.querySelector(".app2");
const app3 =  document.querySelector(".app3");

navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');

    if (visibility === "false") {
        nav.setAttribute('data-visible', "true")
        navToggle.setAttribute('aria-expanded', 'true')
    }
    else {
        nav.setAttribute('data-visible', "false")
        navToggle.setAttribute('aria-expanded', 'false')
    }
});

app1.addEventListener('mouseover', () => {
    let img = app1.querySelector(".projectImage");
    if (img.getAttribute("src") != "Images/App1.gif") {
        img.src = "Images/App1.gif";
    }
});

app1.addEventListener('mouseout', () => {
    let img = app1.querySelector(".projectImage");
    img.src = "Images/facialrecog.png";
});

app2.addEventListener('mouseover', () => {
    let img = app2.querySelector(".projectImage");
    if (img.getAttribute("src") != "Images/pokedex.gif") {
        img.src = "Images/pokedex.gif";
    }
});

app2.addEventListener('mouseout', () => {
    let img = app2.querySelector(".projectImage");
    img.src = "Images/pokedex.jpg";
});



// app3.addEventListener('mouseover', () => {
//     let img = app3.querySelector(".projectImage");
//     if (img.getAttribute("src") != "Images/App1.gif") {
//         img.src = "Images/App1.gif";
//     }
// });
