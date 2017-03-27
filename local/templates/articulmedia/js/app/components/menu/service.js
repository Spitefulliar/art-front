//SERVICE
export default [
    function() {
        let tmpNostate = "404";
        let _menu = {
            'menuItems': [{
                'name': 'Компания',
                'link': '/articul/',
                'state': 'articul',
                'hoverColor': 'orange',
                'subMenu': [{
                    'name': 'Мы – Articul',
                    'link': '/articul/',
                    'state': 'articul'
                }, {
                    'name': 'Клиенты',
                    'link': '/clients/',
                    'state': 'clients'
                }, {
                    'name': 'Команда',
                    'link': '/crew/',
                    'state': 'crew'
                }, {
                    'name': 'Articul Group',
                    'link': '/about/',
                    'state': 'about'
                }]
            }, {
                'name': 'Экспертиза',
                'link': '/digital/',
                'state': 'digital',
                'subMenu': [{
                    'name': '360 digital',
                    'link': '/digital/',
                    'state': 'digital'
                }, {
                    'name': 'Уникальный опыт',
                    'link': '/experience/',
                    'state': 'experience'
                }, {
                    'name': 'Развивам digital-индустрию',
                    'link': '/industry/',
                    'state': 'industry'
                }]
            }, {
                'name': 'Работы',
                'link': '/case/',
                'state': 'case',
                'subMenu': [{
                    'name': 'Все подряд',
                    'link': '/case/',
                    'state': tmpNostate
                }, {
                    'name': 'Выбрать по виду',
                    'link': '/case/',
                    'state': tmpNostate
                }, {
                    'name': 'Выбрать по бренду',
                    'link': '/case/',
                    'state': tmpNostate
                }]
            }, {
                'name': 'Достижения',
                'link': '/',
                'state': tmpNostate
            }, {
                'name': 'Новости',
                'link': '/news/',
                'state': 'news'
            }, {
                'name': 'Карьера',
                'link': '/jobs/',
                'state': 'jobs'
            }, {
                'name': 'Контакты',
                'link': '/',
                'state': tmpNostate
            }],
            'headerLinks' : [{
                'name': 'Articul Conceptica',
                'link': '/',
                'img': '/local/templates/articulmedia/img/icon/icon-с.png'
            }, {
                'name': 'Articul Production',
                'link': '/',
                'img': '/local/templates/articulmedia/img/icon/icon-p.png'
            }]
        };

        let service = {
            getNavData: () => {
                return _menu;
            }
        };
        return service;
    }
];
