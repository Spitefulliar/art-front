<?php


namespace Articulmedia\Base;


class EventHandlers
{
    public static function onBuildGlobalMenu()
    {
        return [
            'global_menu_articulmedia' => [
                'menu_id'  => 'articulmedia',
                'text'     => 'Артикул Медиа',
                'title'    => '',
                'sort'     => 10,
                'items_id' => 'menu_articulmedia',
                'items'    => [],
            ],
        ];
    }
}