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
          'type': 'video',
        }
      ]
    };

    service.getCase = function() {
      return data;
    }

    return service;
}];