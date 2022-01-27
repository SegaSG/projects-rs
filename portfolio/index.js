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
            document.querySelector('.menu-list').classList.add('dark');            
            document.querySelector('.themetoggle img').src = './assets/svg/theme-light.svg';

        } else {
            document.querySelector('.skills').classList.remove('dark');
            document.querySelector('.portfolio').classList.remove('dark');
            document.querySelector('.video').classList.remove('dark');
            document.querySelector('.price').classList.remove('dark');
            document.querySelector('.title').classList.remove('dark');
            document.querySelector('.menu-list').classList.remove('dark');
            document.querySelector('.themetoggle img').src = './assets/svg/theme-dark.svg';  
        }   
        
    } catch (err) {};
};
addDarkClassToHtml ();





// description

console.log(
    '1. Вёрстка соответствует макету. Вёрстка соответствует макету. Ширина экрана 768px +48 \n'+
        
    '2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15 \n'+
        '\u0020\u2714 нет полосы прокрутки при ширине страницы от 1440рх до 768рх \n'+
        '\u0020\u2714 нет полосы прокрутки при ширине страницы от 768рх до 480рх \n'+
        '\u0020\u2714 нет полосы прокрутки при ширине страницы от 480рх до 320рх\n'+
      
    '3. На ширине экрана 768рх и меньше реализовано адаптивное меню +22 \n'+
        '\u0020\u2714 при ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка \n'+
        '\u0020\u2714 при нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик \n'+
        '\u0020\u2714 высота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана \n'+
        '\u0020\u2714 при нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку \n'+
        '\u0020\u2714 бургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений \n'+
        '\u0020\u2714 ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям \n'+
        '\u0020\u2714 при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку \n'+
    
        '\u0020\u2705 Итоговый результат: 85 баллов \u2705'
);