const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

// NAV
let navItems = Object.values(siteContent.nav)
console.log(navItems)
let navLinks = document.querySelectorAll('a');
navLinks.forEach((item, index) => item.innerText = navItems[index])

//change color to green
navLinks.forEach((item) => item.style.color = 'rgb(157, 157, 157)')



//Utilize .appendChild() and .prepend() to add two new items to the navigation system.
let nav = document.querySelector('nav')

let nav1 = document.createElement('a')
//nav1.textContent = 'end of nav'
nav.appendChild(nav1)

let nav2 = document.createElement('a')
//nav2.textContent = 'beginning of nav'
nav.prepend(nav2)

let navImg = document.querySelector('header img')
navImg.src = siteContent.nav["img-src"]

//CTA
let h1 = document.querySelector('h1')
h1.innerText = siteContent.cta.h1;

let button = document.querySelector('button')
button.innerText = siteContent.cta.button;

let ctaImg = document.querySelector('.cta img')
ctaImg.src = siteContent.cta["img-src"];



//main content
let featuresH4 = document.querySelectorAll('.main-content h4')
featuresH4[0].innerText = siteContent["main-content"]["features-h4"]
featuresH4[1].innerText = siteContent["main-content"]["about-h4"]
featuresH4[2].innerText = siteContent["main-content"]["services-h4"]
featuresH4[3].innerText = siteContent["main-content"]["product-h4"]
featuresH4[4].innerText = siteContent["main-content"]["vision-h4"]


let mainContent = document.querySelectorAll('.main-content p')
mainContent[0].innerText = siteContent["main-content"]["features-content"]
mainContent[1].innerText = siteContent["main-content"]["about-content"]
mainContent[2].innerText = siteContent["main-content"]["services-content"]
mainContent[3].innerText = siteContent["main-content"]["product-content"]
mainContent[4].innerText = siteContent["main-content"]["vision-content"]

let mainContentImg = document.querySelector('.main-content img')
mainContentImg.src = siteContent["main-content"]["middle-img-src"]

//contact
let contactH4 = document.querySelector('.contact h4')
contactH4.innerText = siteContent.contact["contact-h4"]

let contactValues = Object.values(siteContent.contact)
let mainContact = document.querySelectorAll('.contact p')
mainContact.forEach((item, index) => item.innerText = contactValues[index + 1])


//footer
let footer = document.querySelector('footer')
footer.innerText = siteContent.footer.copyright;

//stretch
button.addEventListener('click', function () {
  if (button.innerText === 'Clicked!') {
    button.innerText = 'Get Started'
  } else {
    button.innerText = 'Clicked!'
  }
})






