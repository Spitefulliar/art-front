<?php

return [
    [
        'parent_menu' => 'global_menu_articulmedia',
        'sort' => 300,
        'icon' => 'fileman_sticker_icon',
        'page_icon' => 'fileman_sticker_icon',
        'text' => 'Клиенты',
        'url' => \Articulmedia\Base\Clients\AdminInterface\ClientsListHelper::getUrl(),
        'more_url' => [
            \Articulmedia\Base\Clients\AdminInterface\ClientsEditHelper::getUrl(),
        ]
    ]
];
