//SERVICE
export default ['$http', 
  function($http) {
    let service = {};

    service.getPage = function(apiurl, succesCallback) {
      return $http({
        method: 'GET',
        url: apiurl
      }).then(function(response) {
          service.sectionsCommonTranform(response.data);
        }, function(response) {
          console.warning("can't get page data");
      });
    };

    service.sectionsCommonTranform = function(data){
      let tmpPage = data.page;

      //TODO: transform sections and blocks

      service.page = tmpPage;
      return tmpPage;
    };

    function convertHexToRgba(hexColor, opacities) {
      hexColor = hexColor.replace('#','');
      let r = parseInt(hexColor.substring(0,2), 16);
      let g = parseInt(hexColor.substring(2,4), 16);
      let b = parseInt(hexColor.substring(4,6), 16);
      let result;
      if (opacities) {
        if (angular.isArray(opacities)) {
          result = [];
          opacities.forEach(function(opacity) {
            result.push(`rgba(${r},${g},${b},${opacity/100})`);
          });
        } else {
          result = `rgba(${r},${g},${b},${opacity/100})`;
        }
      } else {
        result= `rgb(${r},${g},${b})`;
      }
      return result;
    }

    return service;
}];