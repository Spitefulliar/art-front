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
    titleImg [] изображение заголовка
    summary [string] подзаголовок блока
    release [string] дата релиза
    link [string] линк на страницу кейса (для страницы отличной от страницы самого кейса)
    video [] ссылка на ютуб (только для главной)
    style []
        titleTextColor [string] цвет заголовка блока
        textColor [string] цвет блока
        aboutBgColor [string] цвет фона квадратов
        aboutTextColor [string] цвет текста квадратов
        bgAboutImage изображение для первого квадрата (логотип клиента)
        titleImage изображение заголовка

### Бриф | brief
    
    title [string] заголовок блока
    content [string] текст
    targets [string] текст/список
    
### Идея | idea

    title [string] заголовок блока
    content [string] текст блока

### Решение-карусель | solution-carousel

    title [string] заголовок блока
    content [string] текст блока
    images [array] ссылки на изображения для карусели (от 3х элементов)
        [
            alt [string] alt текст изображения
            original [string] оригинальный размер изображения
            desktop [string] изображение для desktop с зеркальным отражением
            mobile [string] изображение для mobile с зеркальным отражением
        ]

### Решение-картинка-горизонтальная | solution-pic-h

    title [string] заголовок блока
    content [string] текст блока
    image []
        alt [string] alt текст изображения
        original [string] оригинальный размер изображения
        desktop [string] изображение для desktop
        mobile [string] изображение для mobile

### Решение-картинка-вертикальная | solution-pic-v

    title [string] заголовок блока
    content [string] текст блока
    image []
        alt [string] alt текст изображения
        original [string] оригинальный размер изображения
        desktop [string] изображение для desktop
        mobile [string] изображение для mobile
        
### Контент-одна-картинка-маленький (половинный) | content-pic-sm

    contentBlocks [array] контент блока
        main []
            title [string] заголовок блока
            content [string] контент блока
        list []
            title [string] заголовок блока
            content [string] контент блока
        additional []
            title [string] заголовок блока
            content [string] контент блока
    image []
        alt [string] alt текст изображения
        original [string] оригинальный размер изображения
        desktop [string] изображение для desktop
        mobile [string] изображение для mobile
    
### Контент-галерея-маленький (половинный) | content-gallery-sm

    title [string] заголовок блока
    content [string] контент блока
    images [array] изображения для галереи (до 4x)
        [
            alt [string] alt текст изображения
            original [string] оригинальный размер изображения
            desktop [string] изображение для desktop
            mobile [string] изображение для mobile
        ]

### Контент-одна-картинка | content-pic

    title [string] заголовок блока (опционально)
    content [string] контент блока (строка) или [array] контент блока (3 строки, вторая отображается жирно)
    image []
        alt [string] alt текст изображения
        original [string] оригинальный размер изображения
        desktop [string] изображение для desktop
        mobile [string] изображение для mobile

### Контент-галерея | content-gallery

    title [string] заголовок блока
    content [string] контент блока
    images [array] изображения для галереи (до 5)
        [
            alt [string] alt текст изображения
            original [string] оригинальный размер изображения
            desktop [string] изображение для desktop
            mobile [string] изображение для mobile
        ]

### Контент-слайдер | content-slider

    title [string] заголовок блока
    content [array] контент блока (3 строки, вторая отображается жирно)
    images [array] изображения для слайдера (до 5)
        [
            alt [string] alt текст изображения
            original [string] оригинальный размер изображения
            desktop [string] изображение для desktop
            mobile [string] изображение для mobile
        ]

### Контент-текст | content-text

    title [string] заголовок блока (опционально)
    contentBlocks [array] контент блока (два текста, текст + слоган)
        [
            type [string] 'text' | 'slogan'
            content [string] контент блока
        ]

### Контент-картинка-горизонтальная | content-pic-h

    contentBlocks [array] контент блока (два текста, текст + слоган)
        [
            type [string] 'text' | 'slogan'
            content [string] контент блока
        ]
    image []
        alt [string] alt текст изображения
        original [string] оригинальный размер изображения
        desktop [string] изображение для desktop
        mobile [string] изображение для mobile

### Контент-слоган | content-slogan

    content [string] контент блока
        
### Итоги | total

    title [string] заголовок блока
    content [string[]] контент блока (массив столбцов)
    slogans [string[]] список слоганов
    image [] картинка под блоком
        alt [string] alt текст изображения
        original [string] оригинальный размер изображения
        desktop [string] изображение для desktop
        mobile [string] изображение для mobile

### Блок картинка + цитата | image
    
    name [string] имя 
    position [string] позиция в компании
    image [] картинка под блок
    quote [string] цитата

### Видео | video

    video [string] ссылка на youtube видео
        
### Другие проекты | crosses

    style
        textColor [string] цвет текста
    items [] кейсы (до 9)
        [
            type [string] case|client тип клиент или кейс
            code [string] символьный код
            image [string] изображение
        ]

### Кейсы | cases
    
    content [string] контент блока
    slogan [string] слоган в правой части блока
    items [] кейсы (до 5)
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
    long - длинная секция (например, содержит блок решение-картинка-вертикальная)
    brief-idea - бриф/идея; содержит два блока типов бриф и идея
    content-pic-gallery - контент картинка и галерея; содержит два блока типов контент-одна-картинка и контент-несколько-картинок
    
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
    scrollify [bool] флаг включения доводчика пролистывания по секциям
    sections [slide[]] список сeкций страницы
    
   
    
    
    