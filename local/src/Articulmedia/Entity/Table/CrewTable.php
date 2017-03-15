<?php
namespace Articulmedia\Entity\Table;


use Bitrix\Main\Entity\Validator\Length;
use Core\Bitrix\Entity\DataManager;

class CrewTable extends DataManager
{

    public static function getTableName()
    {
        return 'articul_crew';
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
            'POSITION' => [
                'data_type' => 'string',
                'validation' => [__CLASS__, 'validatePosition'],
            ],
            'CONTENT_1' => [
                'data_type' => 'text',
            ],
            'CONTENT_2' => [
                'data_type' => 'text',
            ],
            'CONTENT_1_TEXT_TYPE' => [
                'data_type' => 'string',
            ],
            'CONTENT_2_TEXT_TYPE' => [
                'data_type' => 'string',
            ],
            'IMAGE' => [
                'data_type' => 'integer',
            ],
            'AUDIO' => [
                'data_type' => 'integer',
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

    public static function validatePosition()
    {
        return [
            new Length(null, 255),
        ];
    }
}