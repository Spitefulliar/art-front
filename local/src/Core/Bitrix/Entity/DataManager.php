<?php
namespace Core\Bitrix\Entity;


use Bitrix\Main\Type\DateTime;

class DataManager extends \Bitrix\Main\Entity\DataManager
{

    public static function getMapping()
    {
        return [];
    }

    public static function getMap()
    {
        return array_merge(static::getMapping(), [
            'CREATED_DATE' => [
                'data_type' => 'datetime',
                'default_value' => new DateTime(),
            ],
            'MODIFIED_DATE' => [
                'data_type' => 'datetime',
            ],
            'CREATED_BY' => [
                'data_type' => 'integer',
                'default_value' => static::getUserId(),
            ],
            'MODIFIED_BY' => [
                'data_type' => 'integer',
            ],
        ]);
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
     * Возвращает идентификатор текущего пользователя.
     *
     * @return int|null
     */
    public static function getUserId()
    {
        global $USER;
        return $USER->GetID();
    }
}