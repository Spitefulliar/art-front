<?php

$result = system('git pull origin master 2>&1;');
$result = system('webpack --progress 2>&1;');