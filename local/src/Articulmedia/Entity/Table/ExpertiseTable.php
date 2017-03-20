<?php
namespace Articulmedia\Entity\Table;


use Bitrix\Main\Entity\Validator\Length;
use Core\Bitrix\Entity\DataManager;

class ExpertiseTable extends DataManager
{

    public static function getTableName()
    {
        return 'articul_expertise';
    }

    public static function getMapping()
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
            'POSITION' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validatePosition'),
            ),
            'NOTE' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateNote'),
            ),
            'CONTENT_1_TITLE' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateContent1Title'),
            ),
            'CONTENT_1' => array(
                'data_type' => 'text',
            ),
            'CONTENT_1_TEXT_TYPE' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateContent1TextType'),
            ),
            'CONTENT_2_TITLE' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateContent2Title'),
            ),
            'CONTENT_2' => array(
                'data_type' => 'text',
            ),
            'CONTENT_2_TEXT_TYPE' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateContent2TextType'),
            ),
            'CONTENT_3_TITLE' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateContent3Title'),
            ),
            'CONTENT_3' => array(
                'data_type' => 'text',
            ),
            'CONTENT_3_TEXT_TYPE' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateContent3TextType'),
            ),
        );
    }
    
    /**
     * Returns validators for CODE field.
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
     * Returns validators for NAME field.
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
     * Returns validators for POSITION field.
     *
     * @return array
     */
    public static function validatePosition()
    {
        return array(
            new Length(null, 6),
        );
    }
    /**
     * Returns validators for NAME field.
     *
     * @return array
     */
    public static function validateNote()
    {
        return array(
            new Length(null, 255),
        );
    }
    /**
     * Returns validators for CONTENT_1_TITLE field.
     *
     * @return array
     */
    public static function validateContent1Title()
    {
        return array(
            new Length(null, 255),
        );
    }
    /**
     * Returns validators for CONTENT_1_TEXT_TYPE field.
     *
     * @return array
     */
    public static function validateContent1TextType()
    {
        return array(
            new Length(null, 4),
        );
    }
    /**
     * Returns validators for CONTENT_2_TITLE field.
     *
     * @return array
     */
    public static function validateContent2Title()
    {
        return array(
            new Length(null, 255),
        );
    }
    /**
     * Returns validators for CONTENT_2_TEXT_TYPE field.
     *
     * @return array
     */
    public static function validateContent2TextType()
    {
        return array(
            new Length(null, 4),
        );
    }
    /**
     * Returns validators for CONTENT_3_TITLE field.
     *
     * @return array
     */
    public static function validateContent3Title()
    {
        return array(
            new Length(null, 255),
        );
    }
    /**
     * Returns validators for CONTENT_3_TEXT_TYPE field.
     *
     * @return array
     */
    public static function validateContent3TextType()
    {
        return array(
            new Length(null, 4),
        );
    }
}