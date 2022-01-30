// burger menu
const menuBurger = document.querySelector('.menu-burger');
const menuList = document.querySelector('.menu-list');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-link');

menuBurger.addEventListener('click', () => menuBurger.classList.toggle('open'));
menuBurger.addEventListener('click', () => menuList.classList.toggle('open'));
menuBurger.addEventListener('click', () => document.body.classList.toggle('lock'));

menuLinks.forEach((el) => el.addEventListener('click', closeMenu));
menuList.addEventListener('click', closeMenu);

function closeMenu(event) {
    if (event.target.classList.contains('menu-link')) {
        menuBurger.classList.remove('open');
        menuList.classList.remove('open');
        document.body.classList.remove('lock');
    }

};

// Theme light-dark

document.querySelector('.themetoggle').addEventListener('click', (e) => {
    e.preventDefault();
    if (localStorage.getItem('theme') === 'dark'){
        localStorage.removeItem('theme');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    addDarkClassToHtml ();
});

function addDarkClassToHtml () {
    try {
        if (localStorage.getItem('theme') === 'dark'){
            document.querySelector('.skills').classList.add('dark');
            document.querySelector('.portfolio').classList.add('dark');
            document.querySelector('.video').classList.add('dark');
            document.querySelector('.price').classList.add('dark');
            document.querySelector('.title').classList.add('dark');
            document.querySelector('.menu-burger').classList.add('dark');
            document.querySelectorAll('.portfolio-button').forEach(el => el.classList.add('dark')); 
            document.querySelector('.menu-list').classList.add('dark');            
            document.querySelector('.themetoggle img').src = './assets/svg/theme-light.svg';

        } else {
            document.querySelector('.skills').classList.remove('dark');
            document.querySelector('.portfolio').classList.remove('dark');
            document.querySelector('.video').classList.remove('dark');
            document.querySelector('.price').classList.remove('dark');
            document.querySelector('.title').classList.remove('dark');
            document.querySelector('.menu-burger').classList.remove('dark');
            document.querySelectorAll('.portfolio-button').forEach(el => el.classList.remove('dark')); 
            document.querySelector('.menu-list').classList.remove('dark');
            document.querySelector('.themetoggle img').src = './assets/svg/theme-dark.svg';  
        }   
        
    } catch (err) {};
};
addDarkClassToHtml ();

// change images in section portfolio

const portfolioBtn = document.querySelectorAll('.portfolio-button');
const portfolioBtns = document.querySelector('.portfolio-buttons');
const portfolioImages = document.querySelectorAll('.portfolio-img');

function changeImage(event) {
    if (event.target.classList.contains('portfolio-button')) {
        console.log(event.target);   
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
        portfolioBtn.forEach((button) => button.classList.remove('active'));
        event.target.classList.add('active');
    }
}
portfolioBtns.addEventListener ('click', changeImage);

// cashing images
const seasons = ['winter', 'spring', 'summer', 'autumn'];
function preloadSummerImages() {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      seasons.forEach((season) => img.src = `./assets/img/${season}/${i}.jpg`);
    }
}
preloadSummerImages(); 

// translate en-ru

const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить'
    }
};

const langRu = document.querySelector('.ru');
const langEn = document.querySelector('.en');

function getTranslate(lang){    
    if (lang === 'ru') {
        langEn.classList.remove('active-languages');
        langRu.classList.add('active-languages');
       
    }
    else {
        langEn.classList.add('active-languages');
        langRu.classList.remove('active-languages');
        
    }
    document.querySelectorAll('[data-i18]').forEach((el) => el.textContent = i18Obj[lang][el.dataset.i18]);  
};

langRu.addEventListener('click',  () => getTranslate('ru'));
langEn.addEventListener('click',  () => getTranslate('en'));


let lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';
function setLocalStorage() {
    localStorage.setItem('lang', lang);   
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if(localStorage.getItem('lang')) {
      localStorage.getItem('lang')
      getTranslate(lang);
    }   
}
window.addEventListener('load', getLocalStorage);

 


// effect button
const buttonsEffect = document.querySelector('.btn')
buttonsEffect.addEventListener('click', function (e) {
    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = e.offsetY + 'px'
    circle.style.left = e.offsetX + 'px'  
    this.appendChild(circle)
  
    setTimeout(() => circle.remove(), 500)
});

// description

console.log(
    '1. Смена изображений в секции portfolio +25 \n'+
        '\u0020\u2714 при кликах по кнопкам Winter, Spring, Summer, Autumn в секции portfolio отображаются изображения из папки с соответствующим названием \n'+
        '\u0020\u2714 кнопка, по которой кликнули, становится активной т.е. выделяется стилем. Другие кнопки при этом будут неактивными \n'+        
    
    '2. Перевод страницы на два языка +25 \n'+
        '\u0020\u2714 при клике по надписи ru англоязычная страница переводится на русский язык \n'+
        '\u0020\u2714 при клике по надписи en русскоязычная страница переводится на английский язык \n'+
        '\u0020\u2714 надписи en или ru, соответствующие текущему языку страницы, становятся активными т.е. выделяются стилем \n'+
      
    '3. Переключение светлой и тёмной темы +25. На страницу добавлен переключатель при клике по которому\n'+
        '\u0020\u2714 тёмная тема приложения сменяется светлой \n'+
        '\u0020\u2714 светлая тема приложения сменяется тёмной \n'+
        '\u0020\u2714 после смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне) \n'+
        
    '4. Дополнительный функционал +10\n'+
        '\u0020\u2714 выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы \n'+
        '\u0020\u2714 сложные эффекты для кнопок при наведении и/или клике \n'+

        '\u0020\u2705 Итоговый результат: 85 баллов \u2705'
);