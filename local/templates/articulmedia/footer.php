<? 

if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

$content = ob_get_clean();

$obLoader = new Twig_Loader_Filesystem([
    $_SERVER['DOCUMENT_ROOT'].SITE_TEMPLATE_PATH.'/layout/',
]);
$obTwig = new Twig_Environment($obLoader, [
    'debug' => true,
]);

$obTwig->addExtension(new Twig_Extension_Debug());
$obTwig->addExtension(new \Core\Twig\CoreTwigExtension());

$obLexer = new Twig_Lexer($obTwig, [
    'tag_variable' => ['[[', ']]'],
]);

$obTwig->setLexer($obLexer);

$layout = $APPLICATION->GetProperty('layout', 'layout');
echo $obTwig->render($layout.'.twig', []);