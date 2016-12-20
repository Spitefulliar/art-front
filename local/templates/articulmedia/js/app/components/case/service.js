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
          'brief': {
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
          'idea': {
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
          },
        },
        {
          'type': 'solution-caroousel',
          'content': `<p>Реализована PR-кампания по поддержке и продвижению сериала, основанная на его концепции и содержании, как в онлайне, так и в оффлайне. </p>
          <p>Создан промо-сайт с активацией-звонком из города Уэйуорд Пайнс, где разворачиваются события фильма.</p>`,
          'style': {
            'color': false,
            'bgColor': '#f3e3cc',
            'bgImg': false,
          }
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