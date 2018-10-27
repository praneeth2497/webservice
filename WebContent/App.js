var myApp = angular.module('test', ["ngRoute"]);
myApp.controller("HomeController",function($scope){$scope.name="praneeth"});
myApp.controller('BlogCtrl', function ($scope, $http)
        {

//postBlog('abc','java','harsha','11/10/2018','language something');
$scope.postBlog = function (t, desc, wby,d_blog,brf) {

var blogData = {

        title: t,

        description: desc,

        writtenby: wby,
        
        date_blog:d_blog,
        
        brief:brf
        

};//blogData  object

//Call the services

$http.post('http://localhost:8081/project2/createblog',
        JSON.stringify(blogData)).then(function (response) {

if (response.data)

$scope.msg = "Blog  Created Successfully!";

},
function (response) {

$scope.msg = "Service not Exists";

$scope.statusval = response.status;

$scope.statustext = response.statusText;

$scope.headers = response.headers();

}); //then

}; //postBlog

}); //controller


 myApp.config(function($routeProvider){
		
		$routeProvider.when("/Home",{
			templateUrl:"Home/Home.html",
			controller:"HomeController"
			
			})
	.when("/Blog",{
			templateUrl:"Blogs/Blog1.html",
			controller:"Blogctrl"
			})
	});
 