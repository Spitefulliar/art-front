//SERVICE
export default [
  function() {
    let service = {};

    let data = {
      'title': 'всегда<br>отвечай<br>на звонок',
      'summary': 'кампания по продвижению<br>телесериала «Сосны»<br>на канале FOX',
      'date': '2014/02',
      'logo': '../local/templates/articulmedia/img/case/case_logo.jpg',
      'style': {
        'color': '#f3e3cc',
        'bgColor': '#1e2532',
        'bgImg': {
          'desktop': '../local/templates/articulmedia/img/case/case_1.jpg',
          'mobile': '../local/templates/articulmedia/img/case/case_1.jpg',
        }
      },
      'blocks': [
        {
          'type': 'briefidea',
          'brief': {
            'title': 'БРИФ',
            'content': `<p>«Сосны» – 10-серийный остросюжетный триллер. Действие сериала разворачивается в городе Уэйуорд Пайнз, одно из главных правил которого – всегда отвечать на мистические звонки.</p>
            <h3>Цели кампании:</h3>
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
            'content': `погрузить пользователей 
              в атмосферу сериала, дав возможность почувствовать 
              себя на месте жителей мистического города, 
              и с замиранием сердца 
              ожидать таинственного 
              звонка на свой телефон.`,
            'style': {
              'color': '#000000',
              'bgColor': '#f3e3cc',
              'bgImg': {
                  'desktop': '../local/templates/articulmedia/img/case/case_2.jpg',
                  'mobile': '../local/templates/articulmedia/img/case/case_2.jpg',
                },
            }
          },
        },
        {
          'type': 'video',
        }
      ]
    };

    service.getCase = function() {
      return data;
    }

    return service;
}];