<?php

namespace Articulmedia\Helpers;


use Bitrix\Main\Application;

class ApiHelper
{
    static public function init()
    {
        if (($component = static::guessComponent()) !== false) {
            static::includeComponent($component);
        } else {
            LocalRedirect('/404/');
        }
    }

    static function guessComponent()
    {
        if ($component = Application::getInstance()->getContext()->getRequest()->get('component')) {
            if (static::checkComponent($component)) {
                return $component;
            }
        }

        return false;
    }

    static function checkComponent($component)
    {
        if (file_exists($_SERVER['DOCUMENT_ROOT'] . '/local/components/articulmedia/api.' . $component . '/class.php')) {
            return true;
        }

        return false;
    }

    static function includeComponent($component)
    {
        global $APPLICATION;
        $APPLICATION->IncludeComponent('articulmedia:api.'.$component, '', []);
    }
}