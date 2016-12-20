<?php

echo '<pre>';
$result = system('cd '.$_SERVER['DOCUMENT_ROOT'].'; git pull origin master 2>&1;');
echo '<br>';
$result = system('cd '.$_SERVER['DOCUMENT_ROOT'].'; yarn 2>&1;');
echo '<br>';
$result = system('cd '.$_SERVER['DOCUMENT_ROOT'].'; webpack 2>&1;');