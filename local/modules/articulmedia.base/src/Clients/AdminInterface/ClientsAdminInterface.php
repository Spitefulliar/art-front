<?php


namespace Articulmedia\Base\Clients\AdminInterface;


use DigitalWand\AdminHelper\Helper\AdminInterface;
use DigitalWand\AdminHelper\Widget\CheckboxWidget;
use DigitalWand\AdminHelper\Widget\NumberWidget;
use DigitalWand\AdminHelper\Widget\StringWidget;

class ClientsAdminInterface extends AdminInterface
{
    public function fields()
    {
        return array(
            'MAIN' => array(
                'NAME' => 'Клиенты',
                'FIELDS' => array(
                    'ID' => array(
                        'TITLE' => 'ID',
                        'WIDGET' => new NumberWidget(),
                        'READONLY' => true,
                        'FILTER' => true,
                        'HIDE_WHEN_CREATE' => true
                    ),
                    'SORT' => array(
                        'TITLE' => 'Сортировка',
                        'WIDGET' => new NumberWidget(),
                    ),
                    'ACTIVE' => array(
                        'TITLE' => 'Активность',
                        'WIDGET' => new CheckboxWidget(),
                        'FIELD_TYPE' => CheckboxWidget::TYPE_INT,
                    ),
                    'CODE' => array(
                        'TITLE' => 'Символьный код',
                        'WIDGET' => new StringWidget(),
                    ),
                    'NAME' => array(
                        'TITLE' => 'Название',
                        'WIDGET' => new StringWidget(),
                    ),
                )
            )
        );
    }

    public function helpers()
    {
        return [
            '\Articulmedia\Base\Clients\AdminInterface\ClientsEditHelper',
            '\Articulmedia\Base\Clients\AdminInterface\ClientsListHelper',
        ];
    }


}