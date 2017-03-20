<?php

use Phinx\Migration\AbstractMigration;

class CreateExpertiseTable extends AbstractMigration
{
    public function up()
    {
        $this->execute("
            DROP TABLE IF EXISTS `articul_expertise`;
            CREATE TABLE `articul_expertise`(  
              `ID` INT NOT NULL AUTO_INCREMENT,
              `SORT` INT DEFAULT 100,
              `ACTIVE` BOOL,
              `CODE` VARCHAR(255),
              `NAME` VARCHAR(255),
              `POSITION` VARCHAR(6),
              `NOTE` VARCHAR(255),
              `CONTENT_1_TITLE` VARCHAR(255),
              `CONTENT_1` LONGTEXT,
              `CONTENT_1_TEXT_TYPE` VARCHAR(4),
              `CONTENT_2_TITLE` VARCHAR(255),
              `CONTENT_2` LONGTEXT,
              `CONTENT_2_TEXT_TYPE` VARCHAR(4),
              `CONTENT_3_TITLE` VARCHAR(255),
              `CONTENT_3` LONGTEXT,
              `CONTENT_3_TEXT_TYPE` VARCHAR(4),
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
          DROP TABLE IF EXISTS `articul_expertise`;
        ");
    }
}
