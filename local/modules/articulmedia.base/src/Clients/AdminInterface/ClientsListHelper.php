<?php


namespace Articulmedia\Base\Clients\AdminInterface;


use DigitalWand\AdminHelper\Helper\AdminListHelper;

class ClientsListHelper extends AdminListHelper
{
    protected static $model = '\Articulmedia\Entity\Table\ClientsTable';
}