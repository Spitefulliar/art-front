<?php
require $_SERVER['DOCUMENT_ROOT'] . '/local/vendor/autoload.php';

$obLoader = new Twig_Loader_Filesystem([
    $_SERVER['DOCUMENT_ROOT'] . '/local/templates/articulmedia/layout/',
]);

$obTwig = new Twig_Environment($obLoader, []);

$obLexer = new Twig_Lexer($obTwig, [
    'tag_variable' => ['[[', ']]'],
]);

$obTwig->setLexer($obLexer);

$layout = $_GET['l'] ? $_GET['l'] : 'layout';

echo $obTwig->render("{$layout}.twig");