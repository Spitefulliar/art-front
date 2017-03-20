<?php

$conf = include 'bitrix/.settings.php';

return [
    'paths' => [
        'migrations' => '%%PHINX_CONFIG_DIR%%/local/migrations/'
    ],
    'environments' => [
        'default_migration_table' => 'articul_phinxlog',
        'default_database' => 'default',

        'default' => [
            'adapter' => 'mysql',
            'host' => $conf['connections']['value']['default']['host'],
            'name' => $conf['connections']['value']['default']['database'],
            'user' => $conf['connections']['value']['default']['login'],
            'pass' => $conf['connections']['value']['default']['password'],
            'charset' => 'utf8'
        ],
    ]
];