# Типы данных

# Объекты данных 

## Блоки 

### Общие правила

    - цвета передаваемые в свойстве style должны начинаться с # символа
    - все ссылки на статический контент располагаемый на сервере сайта должны быть указаны относительно корня сайта, за исключением внешних
    - если какое-то свойство не требуется, исключить его

### Общие свойства

    type [string] символьный код типа блока
    style [] стили применяемые для блока
        bgColor [string] цвет фона
        bgImage [] изображение фона
            desktop [string] относительная ссылка на изображение для desktop
            mobile [string] относительная ссылка на изображение для mobile
        bgGradient [] градиент для фона
            col1 [string] цвет 1
            col2 [string] цвет 2
            top [boolean] флаг направления (true - сверху вниз, false - снизу вверх)
    
### Анонс | announce
    
    title [string] заголовок блока
    summary [string] подзаголовок блока
    release [string] дата релиза
    video [] видео файлы для анонса на главной странице
        mp4 [string] 
        ogg [string]
        webm [string]
    style []
        titleTextColor [string] цвет заголовка блока
        textColor [string] цвет блока
        aboutBgColor [string] цвет фона квадратов
        aboutTextColor [string] цвет текста квадратов
        bgAboutImage изображение для первого квадрата (логотип клиента)
        titleImage изображение заголовка

### Бриф | brief
    
    title [string] заголовок блока
    summary [string] подпись
    content [string] текст
    
### Идея | idea

    title [string] заголовок блока
    content [string] текст блока

### Решение-карусель | solution-carousel

    title [string] заголовок блока
    content [string] текст блока
    images [] ссылки на изображения для карусели
        [
            alt [string] alt текст изображения
            original [string] оригинальный размер изображения
            desktop [string] изображение для desktop с зеркальным отражением
            mobile [string] изображение для mobile с зеркальным отражением
        ]
        
### Решение-галерея-одна-картинка | solution-gallery-single

    title [string] заголовок блока
    content [string] контент блока
    image []
        alt [string] alt текст изображения
        original [string] оригинальный размер изображения
        desktop [string] изображение для desktop
        mobile [string] изображение для mobile
    
### Решение-галерея-несколько-картинок | solution-gallery-multi

    title [string] заголовок блока
    content [string] контент блока
    images [] изображения для галереи
        [
            alt [string] alt текст изображения
            original [string] оригинальный размер изображения
            desktop [string] изображение для desktop
            mobile [string] изображение для mobile
        ]
        
### Итоги | total

    title [string] заголовок блока
    content [string[]] контент блока (массив столбцов)
    slogans [string[]] список слоганов
    image [] картинка под блоком
        alt [string] alt текст изображения
        original [string] оригинальный размер изображения
        desktop [string] изображение для desktop
        mobile [string] изображение для mobile

### Видео | video

    video [string] ссылка на youtube видео
        
### Другие проекты | crosses

    style
        textColor [string] цвет текста
    items []
        [
            type [string] case|client тип клиент или кейс
            code [string] символьный код
            image [string] изображение
        ]
    
### Картинка | image
### Решение-3 | solution-3
### Итоги-2 | total-2
### Аудио | audio
### Инфографика | infographics
    
## Секция (экран, слайд)

### Общие правила

    - каждый слайд содержит в себе один или более блоков
    - цвет фона слайда может задаваться как фоном слайда, так и фоном блока, приоритет имеет фон блока
    
### Типы секций
    
    single - один блок; содержит только 1 блок
    brief-idea - бриф/идея; содержит два блока типов бриф и идея
    solution-gallery - решение галерея; содержит два блока типов решение-галерея-одна-картинка и решение-галерея-несколько-картинок
    
### Свойства секции

    type [string] символьный код типа слайда
    blocks block[] блоки содержащиеся в слайде
    style []
        bgColor [string] цвет фона
        bgImage [] изображение фона
            desktop [string] относительная ссылка на изображение для desktop
            mobile [string] относительная ссылка на изображение для mobile
    
## Клиент | client
    
### Свойства клиента
    
    id [int] id клиента
    code [string] символьный код клиента
    
## Кейс | case

### Свойства кейса
    
    id [int] id кейса
    code [string] символьный код кейса
    title [string] заголовок кейса
    client [client] клиент кейса

## Страница конструктора | page

### Свойства страницы конструктора
    
    id [int] id страницы
    code [string] символьный код страницы
    title [string] заголовок страницы
    sections [slide[]] список сeкций страницы
    
   
    
    
    