<?php

return [
    [
        'parent_menu' => 'global_menu_articulmedia',
        'sort' => 300,
        'icon' => 'fileman_sticker_icon',
        'page_icon' => 'fileman_sticker_icon',
        'text' => 'Команда',
        'url' => \Articulmedia\Base\Crew\AdminInterface\CrewListHelper::getUrl(),
        'more_url' => [
            \Articulmedia\Base\Crew\AdminInterface\CrewEditHelper::getUrl(),
        ]
    ],
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
