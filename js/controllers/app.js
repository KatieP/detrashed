function Task ($scope) {
  $scope.task = {
    "Bottle": {
      "code": "Bottle",
      "title": "Quit plastic bottles",
      "body": "They are bad!",
      "number": "1",
      "score": "21",
      "level": "1",
      "audience": [ ""
      ]
    },
   "Compost": {
      "code": "Compost",
      "title": "Compost the Things Yeah!",
      "body": "Compost goes to landfill and releases methane",
      "number": "2",
      "score": "27",
      "level": "1",
      "audience": [ ""
      ]
    },
   "Coffee Mug": {
      "code": "mug",
      "title": "Get you are reusable coffee cup",
      "body": "Coffee cups may come from endangered rainforest and they also end up in landfill",
      "number": "3",
      "score": "7",
      "level": "1",
      "audience": [ ""
      ]
    },
  };

  $scope.currentTask = null;

  $scope.setTask = function (code) {
    $scope.currentTask = $scope.task[code];
  };
}