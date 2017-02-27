<?
$arUrlRewrite = array(
	array(
		"CONDITION" => "#^/api/(.*)?/.*#",
		"RULE" => "",
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