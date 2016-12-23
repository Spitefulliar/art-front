//SERVICE
export default [
  function() {
    let service = {};

    let data = {
      'title': 'всегда<br>отвечай<br>на звонок',
      'summery': 'кампания по продвижению<br>телесериала «Сосны»<br>на канале FOX',
      'date': '2014/02',
      'logo': '../local/templates/articulmedia/img/case/case_logo.jpg',
      'style': {
        'color': '#f3e3cc',
        'bgColor': '#1e2532',
        'bgImg': {
          'desktop': '../local/templates/articulmedia/img/case/case_1.jpg',
          'mobile': '../local/templates/articulmedia/img/case/case_1_mobile.jpg',
        }
      },
      'blocks': [
        {
          'type': 'announce',
          'title': 'всегда<br>отвечай<br>на звонок',
          // 'titleImg': {
          //   'desktop': '../local/templates/articulmedia/img/case/case_title.png',
          //   'mobile': '../local/templates/articulmedia/img/case/case_title.png',
          // },
          'summery': 'кампания по продвижению<br>телесериала «Сосны»<br>на канале FOX',
          'date': '2014/02',
          'logo': '../local/templates/articulmedia/img/case/case_logo.jpg',
          'style': {
            'color': '#f3e3cc',
            'bgColor': '#1e2532',
            'aboutColor': '#000000',
            'aboutBgColor': '#f3e3cc',
            'aboutBg': {
              'desktop': '../local/templates/articulmedia/img/case/case_logo.jpg',
              'mobile': '../local/templates/articulmedia/img/case/case_logo.jpg',
            },
            'bgImg': {
              'desktop': '../local/templates/articulmedia/img/case/case_1.jpg',
              'mobile': '../local/templates/articulmedia/img/case/case_1_mobile.jpg',
            }
          },

        },
        {
          'type': 'briefidea',
          'blocks': [
            {
              'type': 'brief',
              'title': 'БРИФ',
              'summery': `<p>«Сосны» – 10-серийный остросюжетный триллер. Действие</br> сериала разворачивается в городе Уэйуорд Пайнз, одно из</br> главных правил которого – всегда отвечать на мистические звонки.</p>`,
              'content': `<h4>Цели кампании:</h4>
                          <ul>
                            <li>Продвижение сериала «Сосны»</li>
                            <li>Увеличение аудитории телеканала FOX</li>
                            <li>Увеличение дистрибуции телеканала</li>
                            <li>Увеличение подписчиков официальных <br/>групп FOX в социальных сетях</li>
                          </ul>`,
              'style': {
                'color': '#f3e3cc',
                'bgColor': '#1e2532',
                'bgImg': false,
              }
            },
            {
              'type': 'idea',
              'title': 'Идея',
              'content': `погрузить пользователей</br> 
                в атмосферу сериала, дав</br> 
                возможность почувствовать</br>  
                себя на месте жителей</br> 
                мистического города,</br> 
                и с замиранием сердца</br>  
                ожидать таинственного</br>  
                звонка на свой телефон.`,
              'style': {
                'color': '#000000',
                'bgColor': '#f3e3cc',
                'bgImg': {
                    'desktop': '../local/templates/articulmedia/img/case/case_2.jpg',
                    'mobile': '../local/templates/articulmedia/img/case/case_2_mobile.jpg',
                  },
              }
            }
          ],
        },
        {
          'type': 'solution-carousel',
          'title': 'Решение',
          'content': `<p>Реализована PR-кампания по поддержке и продвижению сериала, основанная на его концепции и содержании, как в онлайне, так и в оффлайне. </p>
          <p>Создан промо-сайт с активацией-звонком из города Уэйуорд Пайнс, где разворачиваются события фильма.</p>`,
          'style': {
            'color': false,
            'bgColor': '#f3e3cc',
            'bgImg': false,
          },
          'slides': [
            {
              'original': '../local/templates/articulmedia/img/case/case_slide_1.jpg',
              'desktop': '../local/templates/articulmedia/img/case/case_slide_1.jpg',
              'mobile': '../local/templates/articulmedia/img/case/case_slide_1.jpg',
            },{
              'original': '../local/templates/articulmedia/img/case/case_slide_2.jpg',
              'desktop': '../local/templates/articulmedia/img/case/case_slide_2.jpg',
              'mobile': '../local/templates/articulmedia/img/case/case_slide_2.jpg',
            },{
              'original': '../local/templates/articulmedia/img/case/case_slide_3.jpg',
              'desktop': '../local/templates/articulmedia/img/case/case_slide_3.jpg',
              'mobile': '../local/templates/articulmedia/img/case/case_slide_3.jpg',
            }
          ]
        },
        {
          'type': 'solution-media',
          'title': 'Решение',
          'style': {
            'color': false,
            'bgColor': '#c7b8a3',
            'bgImg': false,
          },
          'blocks': [
            {
              type: 'media-support',
              title: 'Медиаподдержка:',
              content: `<ul>
                  <li>Брендирование сайта «Кинопоиск»</li>
                  <li>Баннерная реклама на сайте Soloway</li>
                  <li>ВКонтакте: ТГБ</li>
                  <li>Facebook: рекомендованная страница и бустинг постов</li>
                </ul>`,
              img: {
                'alt': 'Сосны',
                'original': '../local/templates/articulmedia/img/case/case_smm_1.jpg',
                'desktop': '../local/templates/articulmedia/img/case/case_smm_1.jpg',
                'mobile': '../local/templates/articulmedia/img/case/case_smm_1.jpg',
              }
            },
            {
              type: 'smm',
              title: 'SMM:',
              content: `Основной контент размещался в официальных сообществах телеканала FOX в Facebook и ВК: новости, интересные факты по содержанию серий, еженедельные конкурсы с призами, тизеры и другие активности.`,
              images: [
                {
                  'original': '../local/templates/articulmedia/img/case/case_smm_2.jpg',
                  'desktop': '../local/templates/articulmedia/img/case/case_smm_2.jpg',
                  'mobile': '../local/templates/articulmedia/img/case/case_smm_2.jpg',
                },{
                  'original': '../local/templates/articulmedia/img/case/case_smm_3.jpg',
                  'desktop': '../local/templates/articulmedia/img/case/case_smm_3.jpg',
                  'mobile': '../local/templates/articulmedia/img/case/case_smm_3.jpg',
                },{
                  'original': '../local/templates/articulmedia/img/case/case_smm_4.jpg',
                  'desktop': '../local/templates/articulmedia/img/case/case_smm_4.jpg',
                  'mobile': '../local/templates/articulmedia/img/case/case_smm_4.jpg',
                }
              ]
            }
          ]
        },
        {
          'type': 'video',
        }
      ]
    };

    service.getCase = function(succesCallback) {
      return Promise.resolve(data).then(service.tranformCase(data), function(data) {
          console.warning("can't get case");
        });
    };

    service.tranformCase = function(data){
      let tmpCase = data;
      let annonce = tmpCase.blocks.filter(function(el){
        return el.type == "announce";
      })[0];
      if (annonce) {
        annonce.style.aboutBgColors = convertHexToRgba(annonce.style.aboutBgColor,[100,80,40]);
      }
      service.case = tmpCase;
      return tmpCase;
    };

    function convertHexToRgba(hexColor, opacities) {
      hexColor = hexColor.replace('#','');
      let r = parseInt(hexColor.substring(0,2), 16);
      let g = parseInt(hexColor.substring(2,4), 16);
      let b = parseInt(hexColor.substring(4,6), 16);
      let result;
      if (opacities) {
        if (angular.isArray(opacities)) {
          result = [];
          opacities.forEach(function(opacity) {
            result.push(`rgba(${r},${g},${b},${opacity/100})`);
          });
        } else {
          result = `rgba(${r},${g},${b},${opacity/100})`;
        }
      } else {
        result= `rgb(${r},${g},${b})`;
      }
      return result;
    }

    return service;
}];