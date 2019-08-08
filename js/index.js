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
    "h1": "DOM <br> Is <br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street <br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//NAV BAR
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navItems = document.querySelectorAll('a');
navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];

//APPEND AND PREPEND
let nav = document.querySelector('nav');
let frontNav = document.createElement('a');
let backNav = document.createElement('a');
backNav.textContent = 'Blog';
frontNav.textContent = 'Home';
nav.prepend(frontNav);
nav.appendChild(backNav);

//COLOR CHANGE
for(let i=0; i < 6; i++){
  navItems[i].style.color = 'green';
};
frontNav.style.color = 'green';
backNav.style.color = 'green';

//CTA
const ctaText = document.querySelector('.cta-text h1');
ctaText.innerHTML = siteContent['cta']['h1'];

const ctaButton = document.querySelector('.cta-text button');
ctaButton.innerText = siteContent['cta']['button'];

const ctaPic = document.querySelector('#cta-img');
ctaPic.src = ('src', siteContent['cta']['img-src']);

//MAIN CONTENT
const bodyHeaders = document.querySelectorAll('.text-content h4');
const ptags = document.querySelectorAll('.text-content p');

  //TOP
bodyHeaders[0].textContent = siteContent["main-content"]['features-h4'];
ptags[0].textContent = siteContent['main-content']['features-content'];

bodyHeaders[1].textContent = siteContent["main-content"]['about-h4'];
ptags[1].textContent = siteContent['main-content']['about-content'];

const middleImg = document.querySelector('#middle-img');
middleImg.src = ('src', siteContent["main-content"]["middle-img-src"]);

  //BOTTOM
bodyHeaders[2].textContent = siteContent["main-content"]['services-h4'];
ptags[2].textContent = siteContent['main-content']['services-content'];

bodyHeaders[3].textContent = siteContent["main-content"]['product-h4'];
ptags[3].textContent = siteContent['main-content']['product-content'];

bodyHeaders[4].textContent = siteContent["main-content"]['vision-h4'];
ptags[4].textContent = siteContent['main-content']['vision-content'];

//CONTACT
const contacth4 = document.querySelector('.contact h4');
contacth4.textContent = siteContent['contact']['contact-h4'];
const contactP = document.querySelectorAll('.contact p');
contactP[0].innerHTML = siteContent['contact']['address'];
contactP[1].textContent = siteContent['contact']['phone'];
contactP[2].textContent = siteContent['contact']['email'];

//FOOTER
const copyright = document.querySelector('footer p');
copyright.textContent = siteContent['footer'] ['copyright']

