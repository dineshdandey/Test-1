angular.module('app.controllers', [])
  
.controller('challengesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	 $scope.names = [
    {title:'500 calories run',image:'img/VU7Odq28Rmq6sgNCZXWz_card-0jhg1.png'},
    {title:'2.4k calories run',image:'img/xYHu9RKQ5YBBeG1YKRJA_card-02dwf.png'}
	];
  $scope.orderByMe = function(x) {
    $scope.myOrderBy = x;
  }


}])
   
.controller('nearbyCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('dashboardCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
 $scope.names = [
    {title:'500 calories run',image:'img/VU7Odq28Rmq6sgNCZXWz_card-0jhg1.png'},
    {title:'2.4k calories run',image:'img/xYHu9RKQ5YBBeG1YKRJA_card-02dwf.png'}
	];
  $scope.orderByMe = function(x) {
    $scope.myOrderBy = x;
  }


}])
   
.controller('timelineCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	 $scope.names = [
    {title:'500 calories run',image:'img/VU7Odq28Rmq6sgNCZXWz_card-0jhg1.png'},
    {title:'2.4k calories run',image:'img/xYHu9RKQ5YBBeG1YKRJA_card-02dwf.png'}
	];
  $scope.orderByMe = function(x) {
    $scope.myOrderBy = x;
  }


}])
      
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cardioChallengeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 