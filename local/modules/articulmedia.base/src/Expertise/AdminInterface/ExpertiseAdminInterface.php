<?php


namespace Articulmedia\Base\Expertise\AdminInterface;


use DigitalWand\AdminHelper\Helper\AdminInterface;
use DigitalWand\AdminHelper\Widget\CheckboxWidget;
use DigitalWand\AdminHelper\Widget\ComboBoxWidget;
use DigitalWand\AdminHelper\Widget\NumberWidget;
use DigitalWand\AdminHelper\Widget\StringWidget;
use DigitalWand\AdminHelper\Widget\VisualEditorWidget;

class ExpertiseAdminInterface extends AdminInterface
{
    public function fields()
    {
        return [
            'MAIN' => [
                'NAME' => 'Команда',
                'FIELDS' => [
                    'ID' => [
                        'TITLE' => 'ID',
                        'WIDGET' => new NumberWidget(),
                        'READONLY' => true,
                        'FILTER' => true,
                        'HIDE_WHEN_CREATE' => true
                    ],
                    'SORT' => [
                        'TITLE' => 'Сортировка',
                        'WIDGET' => new NumberWidget(),
                    ],
                    'ACTIVE' => [
                        'TITLE' => 'Активность',
                        'WIDGET' => new CheckboxWidget(),
                        'FIELD_TYPE' => CheckboxWidget::TYPE_INT,
                    ],
                    'CODE' => [
                        'TITLE' => 'Символьный код',
                        'WIDGET' => new StringWidget(),
                    ],
                    'NAME' => [
                        'TITLE' => 'Имя',
                        'WIDGET' => new StringWidget(),
                    ],
                    'POSITION' => [
                        'TITLE' => 'Позиция в диаграмме',
                        'WIDGET' => new ComboBoxWidget(),
                        'VARIANTS' => [
                            'top' => 'Сверху',
                            'bottom' => 'Снизу',
                        ],
                    ],
                    'NOTE' => [
                        'TITLE' => 'Подпись',
                        'WIDGET' => new StringWidget(),
                        'SIZE' => 100,
                    ],
                    'CONTENT_1_TITLE' => [
                        'TITLE' => 'Заголовок столбец 1',
                        'WIDGET' => new StringWidget(),
                        'SIZE' => 100,
                    ],
                    'CONTENT_1' => [
                        'TITLE' => 'Контент столбец 1',
                        'WIDGET' => new VisualEditorWidget(),
                    ],
                    'CONTENT_2_TITLE' => [
                        'TITLE' => 'Заголовок столбец 2',
                        'WIDGET' => new StringWidget(),
                        'SIZE' => 100,
                    ],
                    'CONTENT_2' => [
                        'TITLE' => 'Контент столбец 2',
                        'WIDGET' => new VisualEditorWidget(),
                    ],
                    'CONTENT_3_TITLE' => [
                        'TITLE' => 'Заголовок столбец 3',
                        'WIDGET' => new StringWidget(),
                        'SIZE' => 100,
                    ],
                    'CONTENT_3' => [
                        'TITLE' => 'Контент столбец 3',
                        'WIDGET' => new VisualEditorWidget(),
                    ],
                ]
            ]
        ];
    }

    public function helpers()
    {
        return [
            '\Articulmedia\Base\Expertise\AdminInterface\ExpertiseEditHelper',
            '\Articulmedia\Base\Expertise\AdminInterface\ExpertiseListHelper',
        ];
    }


}