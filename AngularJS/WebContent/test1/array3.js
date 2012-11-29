var controller = function($scope) {

	$scope.persons = [ {
		'name' : 'ken',
		'age' : 39
	}, {
		'name' : 'yu',
		'age' : 4
	}, {
		'name' : 'ou',
		'age' : 7
	} ];

	$scope.set = function(e) {

		console.log($scope.name + ":" + $scope.age);

		$scope.persons.push({
			'name' : $scope.name,
			'age' : $scope.age
		});
		$scope.name = $scope.age = '';
	}
};
