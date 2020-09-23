document.addEventListener('DOMContentLoaded', () => {

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
});