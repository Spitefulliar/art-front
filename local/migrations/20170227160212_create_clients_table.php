<?php

use Phinx\Migration\AbstractMigration;

class CreateClientsTable extends AbstractMigration
{
    public function up()
    {
        $this->execute("
            DROP TABLE IF EXISTS `articul_clients`;
            CREATE TABLE `articul_clients`(  
              `ID` INT NOT NULL AUTO_INCREMENT,
              `SORT` INT DEFAULT 100,
              `ACTIVE` BOOL,
              `CODE` VARCHAR(255),
              `NAME` VARCHAR(255),
              `CREATED_DATE` DATETIME,
              `MODIFIED_DATE` DATETIME,
              `CREATED_BY` INT,
              `MODIFIED_BY` INT,
              PRIMARY KEY (`ID`)
            ) ENGINE=INNODB;
        ");
    }

    public function down()
    {
        $this->query("
          DROP TABLE IF EXISTS `articul_clients`;
        ");
    }

}
