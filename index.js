// ==================================== SERVICE TOGGLE==============
const servicesButtons = document.querySelectorAll('.service_item');
const serviceDetails = document.querySelector('.services_right');

console.log(servicesButtons)


const getService = (category) => {
  const details = servicesData.find(item => item.category === category);
  serviceDetails.innerHTML = `
      <h3>${details.title}</h3>
    ${details.description.map(paragraph => "<p>" + paragraph + "</p>").join('')}
  `
}

const removeActiveClass = () => {
  servicesButtons.forEach(button => {
    button.classList.remove('active');
  })
}

servicesButtons.forEach(item => {
  item.addEventListener('click', () => {
    removeActiveClass();
    const serviceClass = item.classList[1];
    getService(serviceClass)
    item.classList.add('active')
    
  })
})

getService('frontend')





// ==================================== MIXITUP (Projects Section) ==============//
const containerEl = document.querySelector('.projects_container');
var mixer = mixitup(containerEl, {
  animation: {
    enable: false
  }
});

mixer.filter('*');






 // ==================================== SWIPER (Testimonials Section) ============== //
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    600: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});








 // ==================================== NAV TOGGLE (SMALL  SCREEN) ============== //
 const navMenu = document.querySelector('.nav_menu')
 const navOpenBtn= document.querySelector('.nav_toggle-open')
 const navCloseBtn = document.querySelector('.nav_toggle-close')

const openNavHandler = () => {
  navMenu.computedStyleMap.display = 'flex';
  navCloseBtn.computedStyleMap.display = 'none';
  navCloseBtn.computedStyleMap.display = 'inline-block'
}

const closeNavHandler = () => {
  navMenu.computedStyleMap.display = 'none';
  navCloseBtn.computedStyleMap.display = 'inline-block';
  navCloseBtn.computedStyleMap.display = 'none';
}
 navOpenBtn.addEventListener('click', openNavHandler)
 navCloseBtn.addEventListener('click', closeNavHandler)

// Close nav on click of nav link for snall screens
const navItems = navMenu.querySelectorAll('a');
if(window.innnerWidth < 768) {
  navItems.forEach(item => {
    item.addEventListener('click', closeNavHandler)
  })
}


 // ==================================== THEME TOGGLE (S Light & dark) ============== //
 const themeBtn = document.querySelector('.nav_theme-btn');
 themeBtn.addEventListener('click', () => {
  let bodyClass = document.body.className;
  if(!bodyClass) {
   bodyClass = 'dark';
   document.body.className = bodyClass;  
   // Change Toggle icon from to sun.
   themeBtn.innerHTML = "<i class='uil uil-sun'></i>"
  //  Save theme to local storage
  window.localStorage.setItem('theme', bodyClass);
  } else {
   bodyClass = '';
   document.body.className = bodyClass;
   // Change Toggle icon from to sun.
   themeBtn.innerHTML = "<i class='uil uil-moon'></i>"
   //  Save theme to local storage
  window.localStorage.setItem('theme', bodyClass);
  }
 })
// Load theme on load
window.addEventListener('load', () => {
  document.body.className = window.localStorage.getItem('theme');
})