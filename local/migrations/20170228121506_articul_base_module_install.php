<?php

use Phinx\Migration\AbstractMigration;
use Notamedia\ConsoleJedi\Module\Module;

class ArticulBaseModuleInstall extends AbstractMigration
{
    public function up()
    {
        (new Module('articulmedia.base'))->register();
    }

    public function down()
    {
        (new Module('articulmedia.base'))->unRegister();
    }


}
