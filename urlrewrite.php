<?
$arUrlRewrite = array(
	array(
		"CONDITION" => "#^/api/(.*)?/.*#",
		"RULE" => "component=$1",
		"ID" => "api",
		"PATH" => "/api/index.php",
	),
	array(
		"CONDITION" => "#^/(.*)?#",
		"RULE" => "",
		"ID" => "angular",
		"PATH" => "/index.php",
	),
);

?>