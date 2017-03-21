<?php

use Bitrix\Main\ModuleManager;

if (class_exists('articulmedia_base')) return;

class articulmedia_base extends CModule
{
    var $MODULE_ID = 'articulmedia.base';

    function __construct()
    {
        $arModuleVersion = array();
        include(__DIR__ . '/version.php');
        if (is_array($arModuleVersion) && array_key_exists('VERSION', $arModuleVersion)) {
            $this->MODULE_VERSION = $arModuleVersion['VERSION'];
            $this->MODULE_VERSION_DATE = $arModuleVersion['VERSION_DATE'];
        }

        $this->MODULE_NAME = 'Articulmedia.Base';
        $this->MODULE_DESCRIPTION = '';
        $this->PARTNER_NAME = '';
        $this->PARTNER_URI = '';
    }

    function DoInstall()
    {
        $this->InstallDB();
    }

    function DoUninstall()
    {
        $this->UnInstallDB();
    }

    function InstallDB()
    {
        ModuleManager::registerModule($this->MODULE_ID);
        $this->InstallEvents();

        return true;
    }

    function UnInstallDB()
    {
        $this->UnInstallEvents();
        ModuleManager::unRegisterModule($this->MODULE_ID);
    }

    function InstallEvents()
    {
        RegisterModuleDependences('main', 'OnBuildGlobalMenu', $this->MODULE_ID, '\Articulmedia\Base\EventHandlers', 'onBuildGlobalMenu');
    }

    function UnInstallEvents()
    {
        UnRegisterModuleDependences('main', 'OnBuildGlobalMenu', $this->MODULE_ID, '\Articulmedia\Base\EventHandlers', 'onBuildGlobalMenu');
    }

}