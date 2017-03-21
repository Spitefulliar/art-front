<?php

namespace Articulmedia\Entity\Table;


use Bitrix\Main\Entity\Validator\Length;
use Core\Bitrix\Entity\DataManager;

class ClientsTable extends DataManager
{

    public static function getTableName()
    {
        return 'articul_clients';
    }

    public static function getMapping()
    {
        return [
            'ID' => [
                'data_type' => 'integer',
                'primary' => true,
                'autocomplete' => true,
            ],
            'SORT' => [
                'data_type' => 'integer',
            ],
            'ACTIVE' => [
                'data_type' => 'integer',
            ],
            'CODE' => [
                'data_type' => 'string',
                'validation' => [__CLASS__, 'validateCode'],
            ],
            'NAME' => [
                'data_type' => 'string',
                'validation' => [__CLASS__, 'validateName'],
            ],
        ];
    }

    public static function validateCode()
    {
        return [
            new Length(null, 255),
        ];
    }

    public static function validateName()
    {
        return [
            new Length(null, 255),
        ];
    }


}