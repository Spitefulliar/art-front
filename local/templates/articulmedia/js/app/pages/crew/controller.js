//CONTROLLER
// import moduleConfig from "./config";
// const MODULE_NAME = moduleConfig.name;

export default ["$scope", "$rootScope", "$location", "$log", "$timeout", "$window", "$state", "$http", "ngAudio",
  function($scope, $rootScope, $location, $log, $timeout, $window, $state, $http, ngAudio) {

  let crewTO;

  $scope.crewSounds = [];
  $scope.currentCrewIndex = false;

  $scope.getSoundProgress = function(index) {
    if (!$scope.crewSounds[index]) return 0;
    return $scope.crewSounds[index].progress * 100 || 0;
  };

  $scope.activateCrewItem = function(index) {

    if (crewTO) $timeout.cancel(crewTO);
    let time = 400;
    let selItem = $scope.crewData.items[index];
    $scope.showCrewDesc = false;

    if ($scope.crewSounds[$scope.currentCrewIndex]) $scope.crewSounds[$scope.currentCrewIndex].pause();
    //if item already activeted
    if (selItem.active) {
      index = -1;
      $scope.crewItemCurrent = false;
      $scope.currentCrewIndex = false;
    } else {
      $scope.crewItemCurrent = selItem;
      $scope.currentCrewIndex = index;

      crewTO = $timeout(function(){
        $scope.showCrewDesc = true;
        if (!$scope.crewSounds[$scope.currentCrewIndex]) {
          $scope.crewSounds[$scope.currentCrewIndex] = ngAudio.play($scope.crewItemCurrent.audio);
        } else {
          $scope.crewSounds[$scope.currentCrewIndex].play();
        };
      },time);
    };

    $scope.crewData.items.map(function(elem, itemIndex) {
      elem.active = (itemIndex == index);
      return elem;
    });
  };

	$scope.crewData = {
    "slogan": "СЛУШАЙТЕ<br/>УМНЫХ",
  	"items": [
  		{
  			"title": "Ольга Куликова",
        "image": "../local/templates/articulmedia/img/desktop/crew-item.png",
  			"audio": "../local/templates/articulmedia/audio/crew.mp3",
  			"subTitle": "управляющий директор",
        "content": [
          "<p>В сфере интересов 360 планирование в digital эру – от стратегии бренда до интегрированных коммуникаций, с особым фокусом на роль digital каналов и инструментов</p> <p>Проекты для более чем 50 российских и международных брендов, включая Fox Broadcasting Company, Nike, L'Oreal, ВТБ, Зимние Олимпийские Игры 2014 в Сочи</p>",
          "<p>В маркетинге и рекламе 11 лет, в том числе в крупнейших международных агентствах Ogilvy и Young&Rubicam</p> <p>Преподаватель Академии коммуникаций Wordshop и ирландской бизнес-школы Digital Marketing Institute</p> <p>Спикер на ключевых российских и международных мероприятиях в области рекламы и коммуникаций, в том чилсле GoldenDrum 2014 (Порторож) и Eurobest 2014 (Хельсинки).</p>"
        ]
  		},
      {
        "title": "Егор Аристакесян",
        "image": "../local/templates/articulmedia/img/desktop/crew-item2.png",
        "audio": "../local/templates/articulmedia/audio/crew.mp3",
        "subTitle": "креативный директор",
        "content": [
          "<p>В сфере интересов 360 планирование в digital эру – от стратегии бренда до интегрированных коммуникаций, с особым фокусом на роль digital каналов и инструментов</p> <p>Проекты для более чем 50 российских и международных брендов, включая Fox Broadcasting Company, Nike, L'Oreal, ВТБ, Зимние Олимпийские Игры 2014 в Сочи</p>",
          "<p>В маркетинге и рекламе 11 лет, в том числе в крупнейших международных агентствах Ogilvy и Young&Rubicam</p> <p>Преподаватель Академии коммуникаций Wordshop и ирландской бизнес-школы Digital Marketing Institute</p> <p>Спикер на ключевых российских и международных мероприятиях в области рекламы и коммуникаций, в том чилсле GoldenDrum 2014 (Порторож) и Eurobest 2014 (Хельсинки).</p>"
        ]
      },
      {
        "title": "Александр Чижиков",
        "image": "../local/templates/articulmedia/img/desktop/crew-item3.png",
        "audio": "../local/templates/articulmedia/audio/crew.mp3",
        "subTitle": "директор по стратегическому планированию",
        "content": [
          "<p>В сфере интересов 360 планирование в digital эру – от стратегии бренда до интегрированных коммуникаций, с особым фокусом на роль digital каналов и инструментов</p> <p>Проекты для более чем 50 российских и международных брендов, включая Fox Broadcasting Company, Nike, L'Oreal, ВТБ, Зимние Олимпийские Игры 2014 в Сочи</p>",
          "<p>В маркетинге и рекламе 11 лет, в том числе в крупнейших международных агентствах Ogilvy и Young&Rubicam</p> <p>Преподаватель Академии коммуникаций Wordshop и ирландской бизнес-школы Digital Marketing Institute</p> <p>Спикер на ключевых российских и международных мероприятиях в области рекламы и коммуникаций, в том чилсле GoldenDrum 2014 (Порторож) и Eurobest 2014 (Хельсинки).</p>"
        ]
      },
      {
        "title": "Марьяна Шейнина",
        "image": "../local/templates/articulmedia/img/desktop/crew-item4.png",
        "audio": "../local/templates/articulmedia/audio/crew.mp3",
        "subTitle": "медиа-директор",
        "content": [
          "<p>В сфере интересов 360 планирование в digital эру – от стратегии бренда до интегрированных коммуникаций, с особым фокусом на роль digital каналов и инструментов</p> <p>Проекты для более чем 50 российских и международных брендов, включая Fox Broadcasting Company, Nike, L'Oreal, ВТБ, Зимние Олимпийские Игры 2014 в Сочи</p>",
          "<p>В маркетинге и рекламе 11 лет, в том числе в крупнейших международных агентствах Ogilvy и Young&Rubicam</p> <p>Преподаватель Академии коммуникаций Wordshop и ирландской бизнес-школы Digital Marketing Institute</p> <p>Спикер на ключевых российских и международных мероприятиях в области рекламы и коммуникаций, в том чилсле GoldenDrum 2014 (Порторож) и Eurobest 2014 (Хельсинки).</p>"
        ]
      },
      {
        "title": "Ирина Сотник",
        "image": "../local/templates/articulmedia/img/desktop/crew-item5.png",
        "audio": "../local/templates/articulmedia/audio/crew.mp3",
        "subTitle": "управляющий директор",
        "content": [
          "<p>В сфере интересов 360 планирование в digital эру – от стратегии бренда до интегрированных коммуникаций, с особым фокусом на роль digital каналов и инструментов</p> <p>Проекты для более чем 50 российских и международных брендов, включая Fox Broadcasting Company, Nike, L'Oreal, ВТБ, Зимние Олимпийские Игры 2014 в Сочи</p>",
          "<p>В маркетинге и рекламе 11 лет, в том числе в крупнейших международных агентствах Ogilvy и Young&Rubicam</p> <p>Преподаватель Академии коммуникаций Wordshop и ирландской бизнес-школы Digital Marketing Institute</p> <p>Спикер на ключевых российских и международных мероприятиях в области рекламы и коммуникаций, в том чилсле GoldenDrum 2014 (Порторож) и Eurobest 2014 (Хельсинки).</p>"
        ]
      },
      {
        "title": "Евгений Багро",
        "image": "../local/templates/articulmedia/img/desktop/crew-item6.png",
        "audio": "../local/templates/articulmedia/audio/crew.mp3",
        "subTitle": "бизнес-директор",
        "content": [
          "<p>В сфере интересов 360 планирование в digital эру – от стратегии бренда до интегрированных коммуникаций, с особым фокусом на роль digital каналов и инструментов</p> <p>Проекты для более чем 50 российских и международных брендов, включая Fox Broadcasting Company, Nike, L'Oreal, ВТБ, Зимние Олимпийские Игры 2014 в Сочи</p>",
          "<p>В маркетинге и рекламе 11 лет, в том числе в крупнейших международных агентствах Ogilvy и Young&Rubicam</p> <p>Преподаватель Академии коммуникаций Wordshop и ирландской бизнес-школы Digital Marketing Institute</p> <p>Спикер на ключевых российских и международных мероприятиях в области рекламы и коммуникаций, в том чилсле GoldenDrum 2014 (Порторож) и Eurobest 2014 (Хельсинки).</p>"
        ]
      },
  	]
  };


}];