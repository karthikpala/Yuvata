app.controller('DatePlanController', [
'$scope',
function($scope){
	
	  $scope.activeDate = null;
	  $scope.selectedDates = [new Date().setHours(0, 0, 0, 0)];
	  $scope.type = 'individual';
	  $scope.options = {
	    startingDay:1,
	    minDate:new Date(),
	    customClass: function(data) {
	      if($scope.selectedDates.indexOf(data.date.setHours(0, 0, 0, 0)) > -1) {
	        return 'selected';
	      }
	      return '';
	    }
	  }	  
	  $scope.removeFromSelected = function(dt) {
	    $scope.selectedDates.splice($scope.selectedDates.indexOf(dt), 1);
	  }
	  
	  /*time picker code*/
	  $scope.mytime = new Date();

	  $scope.hstep = 1;
	  $scope.mstep = 15;

	  $scope.update = function() {
	    var d = new Date();
	    d.setHours( 14 );
	    d.setMinutes( 0 );
	    $scope.mytime = d;
	  };

	  $scope.timeChanged = function () {
	  };

	  $scope.clear = function() {
	    $scope.mytime = null;
	  };
	  
	  
}]);