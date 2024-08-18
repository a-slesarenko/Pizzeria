# Pizzeria 1.0
Проект сайта пиццерии. Сделан функционал расчета стоимости пиццы в зависимости от выбранных параметров, размеров, вида теста, сортировка по цене будет зависеть от выбора пользователя. Выбранные параметры сохраняются в sessionStorage, чтобы выбор пользователя не терялся между перезагрузками или во время роутинга. Пиццы запрашиваются с бесплатного бекенда Mockapi, функционал поиска пицц, фильтрации по видам, сортировок реализованы тоже через него. Есть функционал корзины, на редаксе. В корзине есть функционал увеличения/уменьшения кол-ва пицц, удаления конкретной позиции, кнопка очистки всей корзины с модальным окном, отдельная страинца пустой корзины. Корзина пользователя сохраняется в localStorage. Есть смена темы с сохранением в localStorage. Адаптив под мобилки, планшеты, десктопы fullHD. 2к и 4к мониторы будут позже.

 Стек:
- Сборшик webpack v5;
- ReactJS 18;
- TypeScript;
- Redux Toolkit 2.2;
- React Router v6;
- Axios;
- Prettier;
- CSS-Modules / SCSS;
- React Content Loader (скелетон);
- Debounce от Lodash;
- Mockapi;
- Хостинг imgbb;

Скрипты:
"start" - запустить сборку в development режиме с webpack dev server;
"build-dev": сделать development сборку, сервер не запускать;
"build-prod": сделать production сборку, сервер не запускать;
"analyzer": сделать production сборку + запустить аналайзер production сборки;

Credits
Thanks to Treepng site for shrinks pizza image
pizza PNG Designed By tree from https://pngtree.com/freepng/delicious-flat-of-a-shrimp-pizza-box_16256426.html?sol=downref&id=bef;
Thanks to unsplash site for many pizza images, link https://unsplash.com/s/photos/pizza-with-shrimps
