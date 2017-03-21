<?php


namespace Articulmedia\Base\Crew\AdminInterface;


use DigitalWand\AdminHelper\Helper\AdminInterface;
use DigitalWand\AdminHelper\Widget\CheckboxWidget;
use DigitalWand\AdminHelper\Widget\FileWidget;
use DigitalWand\AdminHelper\Widget\NumberWidget;
use DigitalWand\AdminHelper\Widget\StringWidget;
use DigitalWand\AdminHelper\Widget\TextAreaWidget;
use DigitalWand\AdminHelper\Widget\VisualEditorWidget;

class CrewAdminInterface extends AdminInterface
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
                        'TITLE' => 'Должность',
                        'WIDGET' => new StringWidget(),
                    ],
                    'IMAGE' => [
                        'TITLE' => 'Картинка',
                        'WIDGET' => new FileWidget(),
                    ],
                    'AUDIO' => [
                        'TITLE' => 'Звукозапись',
                        'WIDGET' => new FileWidget(),
                    ],
                    'CONTENT_1' => [
                        'TITLE' => 'Контент столбец 1',
                        'WIDGET' => new VisualEditorWidget(),
                    ],
                    'CONTENT_2' => [
                        'TITLE' => 'Контент столбец 2',
                        'WIDGET' => new VisualEditorWidget(),
                    ],
                ]
            ]
        ];
    }

    public function helpers()
    {
        return [
            '\Articulmedia\Base\Crew\AdminInterface\CrewEditHelper',
            '\Articulmedia\Base\Crew\AdminInterface\CrewListHelper',
        ];
    }


}