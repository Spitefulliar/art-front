#   Приложение


##  Установка

+   Сделать пулл с мастера, установить все node modules и собрать для продакшена можно одной командой: `npm run pull`

##  Команды:

+   `npm run build`: собрать в develop mode
+   `npm run buildprod`: собрать в production mode
+   `npm run watch`: запустить сборку с вотчером
+   `npm run pull`: пулл с мастера, обновление пакетов, сборка в production mode

## Менеджер пакетов

Установка всех нод модулей осуществляется с помощью [yarn](https://yarnpkg.com/lang/en/)

## Сборка

Сборка осуществляется с помощью [webpack](http://webpack.github.io/docs/)

## Структура

+   [Базовый шаблон (твиг)](/local/templates/articulmedia/layout/layout.twig)
+   [Выходная папка](/local/templates/articulmedia/assets)
+   [js (входные файлы для сборки стилей и скриптов)](/local/templates/articulmedia/js)
+   [Стили](/local/templates/articulmedia/css)
+   [Картинки](/local/templates/articulmedia/img)

## Структура приложения

+   [Основной конфиг](/local/templates/articulmedia/js/helper_config.js)
+   [Основной файл приложения](/local/templates/articulmedia/js/app/app.js)
+   [Провайдеры](/local/templates/articulmedia/js/app/providers)
+   [Компоненты](/local/templates/articulmedia/js/app/components)
    *   Компонент
        -   Конфиг компонента
        -   Контроллер
        -   Директива (опционально)
        -   Модуль
        -   Шаблон
+   [Страницы](/local/templates/articulmedia/js/app/pages)
    *   Страница (тот же компонент)
        -   Конфиг компонента
        -   Контроллер
        -   Модуль
        -   Шаблон
