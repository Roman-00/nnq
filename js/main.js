document.addEventListener('DOMContentLoaded', () => {

  'use strict';

    // Функция анимации на главном экране 
    const animImg = () => {
        //Получаем элемент фона с деревом
        const bgTree = document.getElementById("background-tree");
        
        //При движении мышью вызываем функцию, которая меняет положение фона
        document.addEventListener("mousemove", function (e) { MoveBackground(e); });
        
        function MoveBackground(e)
        {
        //Рассчитываем, насколько далеко от начала оси находится курсор: 0 - 0, 0.5 - середина экрана, 1 - ширина экрана (например, 1920)
        //Затем умножаем получившееся число на 30 - настолько будет сдвигаться фон
        //Например, если курсор находится посередине страницы (0.5), то при умножении получится 15
        //Далее отнимаем половину от 30, чтобы фон мог двигаться как влево, так и вправо
        let offsetX = (e.clientX / window.innerWidth * 30) - 15;
        let offsetY = (e.clientY / window.innerHeight * 10) - 5;
        
        //Меняем положение фона
        bgTree.setAttribute("style", "background-position: " + offsetX + "px " + offsetY + "px;");};
    }

    animImg();

    // Функция вызова модального окна с анимацией

    // Анимация

    // Amimate
    const animate = ({ timing, draw, duration }) => {
      const start = performance.now();
      requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // вычисление текущего состояния анимации
        const progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
          requestAnimationFrame(animate);
        }
      });
    };

    // Реализация открытия Popup

    const togglePopUp = () => {
      const popup = document.querySelector('.popup'),
        popupContent = document.querySelector('.popup-content'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupWidth = document.documentElement.clientWidth;
    
      const animatePopup = () => animate({
        duration: 300,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          popupContent.style.top = '0%';
          popup.style.opacity = 0.1;
          popup.style.display = 'block';
          popupContent.style.top = progress * 25 + '%';
          popup.style.opacity = progress * 1;
        }
      });
    
      popupBtn.forEach(item => {
        if (popupWidth > 768) {
          item.addEventListener('click', animatePopup);
        } else {
          item.addEventListener('click', () => popup.style.display = 'block');
        }
      });
    
      popup.addEventListener('click', event => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
          popup.style.display = 'none';
        } else {
          target = target.closest('.popup-content');
          if (!target) {
            popup.style.display = 'none';
          }
        }
      });
    };

    togglePopUp();

});

$(document).ready(function() {

    // Прелоадер
    window.onload = function () {
        document.body.classList.add('loaded_hiding');
        window.setTimeout(function () {
          document.body.classList.add('loaded');
          document.body.classList.remove('loaded_hiding');
        }, 500);
    }

    // Анимация для изображения
    $(function() {  
        $('.btn-6')
          .on('mouseenter', function(e) {
                  var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                  $(this).find('span').css({top:relY, left:relX})
          })
          .on('mouseout', function(e) {
                  var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
              $(this).find('span').css({top:relY, left:relX})
          });
        $('[href=#]').click(function(){return false});
      });

    // Инициализация WOW.js
    $(function() {
        new WOW().init();
    });

    // Инициализация меню
    $(function() {
        $('button').on('click', function(){
            $('body').toggleClass('open');
        });
    });

    // Инициализация Swup.js
    // ------------------------------- Roman code
    // ------------------------------- Бегите! Здесь происходит асинхронная загрузка !)

    const swup = new swup();
});