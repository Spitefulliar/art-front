<?php

require_once __DIR__ . '/../vendor/autoload.php';

if (defined('ADMIN_SECTION')) {
    $APPLICATION->SetAdditionalCSS('/local/templates/admin/css/styles.css');
}