//Create a controller
app.controller('MainController', ['$scope', '$http', function($scope){ // scope something everything in our program can talk to
    $scope.todo = {
    title: "Things I Need To Do",
    list : ["Clean my room", "Got to the store", "Study Cracking The Coding Interview"]
    }

    $scope.books = {
        title: "Books I Need To Buy",
        list: []
    }
    function hasOnlyNumbers(item){
        return /^[0-9]*$/.test(item)
    }
    // button controller
    $scope.addItem = function(intemList, item) {
        //ISBN: 10 or 13 length and consist of only numbers
        if ((item.length ==10 || item.length == 13)&& hasOnlyNumbers(item)){
            console.log("ISBN");
            $http.get("");
        } else {
            console.log("Not an ISBN");
        }
        // $scope.list.push($scope.addToDo);
        itemList.push(item);
    }

}])
