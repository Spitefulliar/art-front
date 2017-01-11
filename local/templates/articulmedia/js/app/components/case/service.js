//SERVICE
export default ['$http', 
  function($http) {
    let service = {};

    // let currentCase = {
    //   'title': 'всегда<br>отвечай<br>на звонок',
    //   'summery': 'кампания по продвижению<br>телесериала «Сосны»<br>на канале FOX',
    //   'date': '2014/02',
    //   'logo': '../local/templates/articulmedia/img/case/case_logo.jpg',
    //   'style': {
    //     'color': '#f3e3cc',
    //     'bgColor': '#1e2532',
    //     'bgImg': {
    //       'desktop': '../local/templates/articulmedia/img/case/case_1.jpg',
    //       'mobile': '../local/templates/articulmedia/img/case/case_1_mobile.jpg',
    //     }
    //   },
    //   'blocks': [
    //     {
    //       'type': 'announce',
    //       'title': 'всегда<br>отвечай<br>на звонок',
    //       // 'titleImg': {
    //       //   'desktop': '../local/templates/articulmedia/img/case/case_title.png',
    //       //   'mobile': '../local/templates/articulmedia/img/case/case_title.png',
    //       // },
    //       'summery': 'кампания по продвижению<br>телесериала «Сосны»<br>на канале FOX',
    //       'date': '2014/02',
    //       'logo': '../local/templates/articulmedia/img/case/case_logo.jpg',
    //       'style': {
    //         'color': '#f3e3cc',
    //         'bgColor': '#1e2532',
    //         'aboutColor': '#000000',
    //         'aboutBgColor': '#f3e3cc',
    //         'aboutBg': {
    //           'desktop': '../local/templates/articulmedia/img/case/case_logo.jpg',
    //           'mobile': '../local/templates/articulmedia/img/case/case_logo.jpg',
    //         },
    //         'bgImg': {
    //           'desktop': '../local/templates/articulmedia/img/case/case_1.jpg',
    //           'mobile': '../local/templates/articulmedia/img/case/case_1_mobile.jpg',
    //         },
    //       },
    //       'blocks' : [
    //         {
    //           'type': 'announce',
    //           'title': 'всегда<br>отвечай<br>на звонок',
    //           // 'titleImg': {
    //           //   'desktop': '../local/templates/articulmedia/img/case/case_title.png',
    //           //   'mobile': '../local/templates/articulmedia/img/case/case_title.png',
    //           // },
    //           'summery': 'кампания по продвижению<br>телесериала «Сосны»<br>на канале FOX',
    //           'date': '2014/02',
    //           'logo': '../local/templates/articulmedia/img/case/case_logo.jpg',
    //           'style': {
    //             'color': '#f3e3cc',
    //             'bgColor': '#1e2532',
    //             'aboutColor': '#000000',
    //             'aboutBgColor': '#f3e3cc',
    //             'aboutBg': {
    //               'desktop': '../local/templates/articulmedia/img/case/case_logo.jpg',
    //               'mobile': '../local/templates/articulmedia/img/case/case_logo.jpg',
    //             },
    //             'bgImg': {
    //               'desktop': '../local/templates/articulmedia/img/case/case_1.jpg',
    //               'mobile': '../local/templates/articulmedia/img/case/case_1_mobile.jpg',
    //             },
    //           }
    //         }
    //       ]
    //     },
    //     {
    //       'type': 'briefidea',
    //       'blocks': [
    //         {
    //           'type': 'brief',
    //           'title': 'БРИФ',
    //           'summery': `<p>«Сосны» – 10-серийный остросюжетный триллер. Действие</br> сериала разворачивается в городе Уэйуорд Пайнз, одно из</br> главных правил которого – всегда отвечать на мистические звонки.</p>`,
    //           'content': `<h4>Цели кампании:</h4>
    //                       <ul>
    //                         <li>Продвижение сериала «Сосны»</li>
    //                         <li>Увеличение аудитории телеканала FOX</li>
    //                         <li>Увеличение дистрибуции телеканала</li>
    //                         <li>Увеличение подписчиков официальных <br/>групп FOX в социальных сетях</li>
    //                       </ul>`,
    //           'style': {
    //             'color': '#f3e3cc',
    //             'bgColor': '#1e2532',
    //             'bgImg': false,
    //           }
    //         },
    //         {
    //           'type': 'idea',
    //           'title': 'Идея',
    //           'content': `погрузить пользователей</br> 
    //             в атмосферу сериала, дав</br> 
    //             возможность почувствовать</br>  
    //             себя на месте жителей</br> 
    //             мистического города,</br> 
    //             и с замиранием сердца</br>  
    //             ожидать таинственного</br>  
    //             звонка на свой телефон.`,
    //           'style': {
    //             'color': '#000000',
    //             'bgColor': '#f3e3cc',
    //             'bgImg': {
    //                 'desktop': '../local/templates/articulmedia/img/case/case_2.jpg',
    //                 'mobile': '../local/templates/articulmedia/img/case/case_2_mobile.jpg',
    //               },
    //           }
    //         }
    //       ],
    //     },
    //     {
    //       'type': 'solution-carousel',
    //       'title': 'Решение',
    //       'content': `<p>Реализована PR-кампания по поддержке и продвижению сериала, основанная на его концепции и содержании, как в онлайне, так и в оффлайне. </p>
    //       <p>Создан промо-сайт с активацией-звонком из города Уэйуорд Пайнс, где разворачиваются события фильма.</p>`,
    //       'style': {
    //         'color': false,
    //         'bgColor': '#f3e3cc',
    //         'bgImg': false,
    //       },
    //       'slides': [
    //         {
    //           'original': '../local/templates/articulmedia/img/case/case_slide_1.jpg',
    //           'desktop': '../local/templates/articulmedia/img/case/case_slide_1.jpg',
    //           'mobile': '../local/templates/articulmedia/img/case/case_slide_1.jpg',
    //         },{
    //           'original': '../local/templates/articulmedia/img/case/case_slide_2.jpg',
    //           'desktop': '../local/templates/articulmedia/img/case/case_slide_2.jpg',
    //           'mobile': '../local/templates/articulmedia/img/case/case_slide_2.jpg',
    //         },{
    //           'original': '../local/templates/articulmedia/img/case/case_slide_3.jpg',
    //           'desktop': '../local/templates/articulmedia/img/case/case_slide_3.jpg',
    //           'mobile': '../local/templates/articulmedia/img/case/case_slide_3.jpg',
    //         }
    //       ],
    //       'blocks' : [
    //         {
    //           'type': 'solution-carousel',
    //           'title': 'Решение',
    //           'content': `<p>Реализована PR-кампания по поддержке и продвижению сериала, основанная на его концепции и содержании, как в онлайне, так и в оффлайне. </p>
    //           <p>Создан промо-сайт с активацией-звонком из города Уэйуорд Пайнс, где разворачиваются события фильма.</p>`,
    //           'style': {
    //             'color': false,
    //             'bgColor': '#f3e3cc',
    //             'bgImg': false,
    //           },
    //           'images': [
    //             {
    //               'original': '../local/templates/articulmedia/img/case/case_slide_1.jpg',
    //               'desktop': '../local/templates/articulmedia/img/case/case_slide_1.jpg',
    //               'mobile': '../local/templates/articulmedia/img/case/case_slide_1.jpg',
    //             },{
    //               'original': '../local/templates/articulmedia/img/case/case_slide_2.jpg',
    //               'desktop': '../local/templates/articulmedia/img/case/case_slide_2.jpg',
    //               'mobile': '../local/templates/articulmedia/img/case/case_slide_2.jpg',
    //             },{
    //               'original': '../local/templates/articulmedia/img/case/case_slide_3.jpg',
    //               'desktop': '../local/templates/articulmedia/img/case/case_slide_3.jpg',
    //               'mobile': '../local/templates/articulmedia/img/case/case_slide_3.jpg',
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       'type': 'solution-gallery',
    //       'title': 'Решение',
    //       'style': {
    //         'color': false,
    //         'bgColor': '#c7b8a3',
    //         'bgImg': false,
    //       },
    //       'blocks': [
    //         {
    //           type: 'solution-gallery-single',
    //           title: 'Медиаподдержка:',
    //           content: `<ul>
    //               <li>Брендирование сайта «Кинопоиск»</li>
    //               <li>Баннерная реклама на сайте Soloway</li>
    //               <li>ВКонтакте: ТГБ</li>
    //               <li>Facebook: рекомендованная страница и бустинг постов</li>
    //             </ul>`,
    //           image: {
    //             'alt': 'Сосны',
    //             'original': '../local/templates/articulmedia/img/case/case_smm_1.jpg',
    //             'desktop': '../local/templates/articulmedia/img/case/case_smm_1.jpg',
    //             'mobile': '../local/templates/articulmedia/img/case/case_smm_1.jpg',
    //           }
    //         },
    //         {
    //           type: 'solution-gallery-multi',
    //           title: 'SMM:',
    //           content: `Основной контент размещался в официальных сообществах телеканала FOX в Facebook и ВК: новости, интересные факты по содержанию серий, еженедельные конкурсы с призами, тизеры и другие активности.`,
    //           images: [
    //             {
    //               'original': '../local/templates/articulmedia/img/case/case_smm_2.jpg',
    //               'desktop': '../local/templates/articulmedia/img/case/case_smm_2.jpg',
    //               'mobile': '../local/templates/articulmedia/img/case/case_smm_2.jpg',
    //             },{
    //               'original': '../local/templates/articulmedia/img/case/case_smm_3.jpg',
    //               'desktop': '../local/templates/articulmedia/img/case/case_smm_3.jpg',
    //               'mobile': '../local/templates/articulmedia/img/case/case_smm_3.jpg',
    //             },{
    //               'original': '../local/templates/articulmedia/img/case/case_smm_4.jpg',
    //               'desktop': '../local/templates/articulmedia/img/case/case_smm_4.jpg',
    //               'mobile': '../local/templates/articulmedia/img/case/case_smm_4.jpg',
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       'type': 'total',
    //       blocks : [
    //         {
    //           'type': 'total',
    //           'title': 'Итоги',
    //           'style': {
    //             'color': '#f3e3cc',
    //             'bgColor': '#435741',
    //           },
    //           'img': {
    //             'desktop': '../local/templates/articulmedia/img/case/case_3.jpg',
    //             'mobile': '../local/templates/articulmedia/img/case/case_3_mobile.jpg',
    //           },
    //           'content': [
    //             `<p>С момента продвижения сериала официальная группа FOX увеличилась на 6000 подписчиков</p>
    //             <p>Сайт посетили 70000 
    //             уникальных пользователей</p>
    //             <p>За время продвижения 
    //             паблик в ВК вырос на 16%.</p>`,
    //             `<p>7000 пользователей 
    //             авторизовались на сайте</p>

    //             <p>1500 человек подписались 
    //             на ежедневные звонки от FOX</p>

    //             <p>Более 2000 пользователей 
    //             социальных сетей ВК и Facebook 
    //             получили от своих друзей приглашение вступить в игру</p>`
    //           ],
    //           'slogans': [
    //             `более <b>11000</b> раз
    //             прозвучал Звонок 
    //             из Уэйуорд Пайнз`,
    //             `более <b>11000</b> раз
    //             прозвучал Звонок 
    //             из Уэйуорд Пайнз`,
    //             `более <b>11000</b> раз
    //             прозвучал Звонок 
    //             из Уэйуорд Пайнз`,
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       'type': 'video',
    //       blocks : [
    //         {
    //           'type': 'video',
    //           'title': 'Video',
    //           'video': 'https://youtu.be/zw94SiaUg-w',
    //           'style': {
    //             'color': '#f3e3cc',
    //             'bgColor': '#1e2532',
    //           },
    //         }
    //       ]
    //     },
    //     {
    //       "type": "single",
    //       "blocks": [
    //         {
    //           "type": "crosses",
    //           "title": "другие проекты ДЛЯ <b>FOX International channels russia</b>",
    //           "style": {
    //             "textColor": false,
    //             'bgColor': '#f3e3cc',
    //           },
    //           "items": [
    //             {
    //               "type": "client",
    //               "code": "fox",
    //               'title':'fox',
    //               "image": {
    //                 'desktop': '../local/templates/articulmedia/img/case/case_logo.jpg',
    //                 'mobile': '../local/templates/articulmedia/img/case/case_logo.jpg',
    //               }
    //             },
    //             {
    //               "type": "case",
    //               "code": "fox",
    //               'title':'fox',
    //               "image": {
    //                 'desktop': '../local/templates/articulmedia/img/case/case_logo.jpg',
    //                 'mobile': '../local/templates/articulmedia/img/case/case_logo.jpg',
    //               }
    //             },
    //             {
    //               "type": "case",
    //               "code": "fox",
    //               'title':'fox',
    //               "image": {
    //                 'desktop': '../local/templates/articulmedia/img/case/case_logo.jpg',
    //                 'mobile': '../local/templates/articulmedia/img/case/case_logo.jpg',
    //               }
    //             },
    //             {
    //               "type": "case",
    //               "code": "fox",
    //               'title':'fox',
    //               "image": {
    //                 'desktop': '../local/templates/articulmedia/img/case/case_logo.jpg',
    //                 'mobile': '../local/templates/articulmedia/img/case/case_logo.jpg',
    //               }
    //             },
    //             {
    //               "type": "case",
    //               "code": "fox",
    //               'title':'fox',
    //               "image": {
    //                 'desktop': '../local/templates/articulmedia/img/case/case_logo.jpg',
    //                 'mobile': '../local/templates/articulmedia/img/case/case_logo.jpg',
    //               }
    //             },
    //             {
    //               "type": "case",
    //               "code": "fox",
    //               'title':'fox',
    //               "image": {
    //                 'desktop': '../local/templates/articulmedia/img/case/case_logo.jpg',
    //                 'mobile': '../local/templates/articulmedia/img/case/case_logo.jpg',
    //               }
    //             },
    //             {
    //               "type": "case",
    //               "code": "fox",
    //               'title':'fox',
    //               "image": {
    //                 'desktop': '../local/templates/articulmedia/img/case/case_logo.jpg',
    //                 'mobile': '../local/templates/articulmedia/img/case/case_logo.jpg',
    //               }
    //             },
    //             {
    //               "type": "case",
    //               "code": "fox",
    //               'title':'fox',
    //               "image": {
    //                 'desktop': '../local/templates/articulmedia/img/case/case_logo.jpg',
    //                 'mobile': '../local/templates/articulmedia/img/case/case_logo.jpg',
    //               }
    //             },
    //             {
    //               "type": "case",
    //               "code": "fox",
    //               'title':'fox',
    //               "image": {
    //                 'desktop': '../local/templates/articulmedia/img/case/case_logo.jpg',
    //                 'mobile': '../local/templates/articulmedia/img/case/case_logo.jpg',
    //               }
    //             }
    //           ]
    //         }
    //       ]
    //     }

    //   ]
    // };

    // service.getCase = function(succesCallback) {
    //   // return Promise.resolve(currentCase).then(service.tranformCase(currentCase), function(response) {
    //   //     console.warning("can't get case");
    //   //   });
    //   return $http({
    //     method: 'GET',
    //     url: '/local/docs/api/json/case.json'
    //   }).then(service.tranformCase, function(response) {
    //     console.warning("can't get case");
    //   });
    // };

    

    return service;
}];