<?php

namespace Articulmedia\Entity\Table;


use Bitrix\Main\Entity\DataManager;
use Bitrix\Main\Entity\Validator\Length;
use Bitrix\Main\Type\DateTime;

class ClientsTable extends DataManager
{
    /**
     * Returns DB table name for entity.
     *
     * @return string
     */
    public static function getTableName()
    {
        return 'articul_clients';
    }

    /**
     * Returns entity map definition.
     *
     * @return array
     */
    public static function getMap()
    {
        return array(
            'ID' => array(
                'data_type' => 'integer',
                'primary' => true,
                'autocomplete' => true,
            ),
            'SORT' => array(
                'data_type' => 'integer',
            ),
            'ACTIVE' => array(
                'data_type' => 'integer',
            ),
            'CODE' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateCode'),
            ),
            'NAME' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateName'),
            ),
            'CREATED_DATE' => array(
                'data_type' => 'datetime',
                'default_value' => new DateTime(),
            ),
            'MODIFIED_DATE' => array(
                'data_type' => 'datetime',
            ),
            'CREATED_BY' => array(
                'data_type' => 'integer',
                'default_value' => static::getUserId(),
            ),
            'MODIFIED_BY' => array(
                'data_type' => 'integer',
            ),
        );
    }

    /**
     * {@inheritdoc}
     */
    public static function update($primary, array $data)
    {
        $data['MODIFIED_BY'] = static::getUserId();
        $data['MODIFIED_DATE'] = new DateTime();

        return parent::update($primary, $data);
    }

    /**
     * Returns validators for code field.
     *
     * @return array
     */
    public static function validateCode()
    {
        return array(
            new Length(null, 255),
        );
    }

    /**
     * Returns validators for name field.
     *
     * @return array
     */
    public static function validateName()
    {
        return array(
            new Length(null, 255),
        );
    }

    /**
     * Возвращает идентификатор пользователя.
     *
     * @return int|null
     */
    public static function getUserId()
    {
        global $USER;
        return $USER->GetID();
    }
}