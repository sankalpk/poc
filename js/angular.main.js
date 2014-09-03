/* Setup */
/* ------------------- */
'use strict';

var jadyuApp = angular.module('app', []);

jadyuApp.factory('Data', function(){
    var topics =
    [   
        {
            id: 1,   
            title: "Bitcoin",
            videoId: "Gc2en3nHxA4",
            type: "YouTube",
            path: "bitcoin",
            startTime: 16,
            endTime: 20,
            interlinks:
            [
                {
                    start: 28,
                    target: "caption",
                    title: '<a ng-click="changeTopic(2)">Bitcoin Exchange</a>',
                    text:"",
                    innerHTML:"",
                    direction: "up"
                },
                {
                    start: 34,
                    target: "caption",
                    title: '<a ng-click="changeTopic(2)">Bitcoin Wallet</a>',
                    text: "",
                    innerHTML: "",
                    direction: "up"
                },
                {
                    start: 42,
                    target: "caption",
                    title: '<a ng-click="changeTopic(2)">Bitcoin Merchant</a>',
                    text: "",
                    innerHTML: "",
                    direction: "up"
                },
                {   
                    start: 47,
                    target: "caption",
                    title: '<a ng-click="changeTopic(2)">Bitcoin Miner</a>',
                    text: "",
                    innerHTML: "",
                    direction: "up"
                },
                {
                    start: 57,
                    target: "caption",
                    title: '<a ng-click="changeTopic(2)">Bitcoin Blockchain</a>',
                    text: "",
                    innerHTML: "",
                    direction: "up"
                }
            ]
        },
        {
            id: 2,   
            title: "Bitcoin Exchange",
            startTime:0,
            endTime:16,
            videoId: "Udfygto6C18",
            type: "YouTube",
            path: "bitcoin-exchange",
            interlinks:[]
        }
    ]
    return topics;
});

jadyuApp.controller('TopicCtrl', function ($scope, $http, $filter, Data) {
    
    /* Initialization */
    /* ------------------------ */
    $scope.topics = Data;
    $scope.currentTopic = $scope.topics[0];

    /* Behavior */
    /* ------------------------ */
    
    //note: bad practice to manipulate dom within controller.
    //but short of rewriting popcornjs, this is a decent way to do it.
    $scope.initializeTopic = function(topic){
        //clear any captions
        var captionDiv = document.getElementById("caption");
        var videoDiv = document.getElementById("video");
        captionDiv.innerHTML="";
        videoDiv.innerHTML="";

        //load video into dom
        var wrapper = Popcorn.HTMLYouTubeVideoElement("#video");
        wrapper.src = "http://www.youtube.com/embed/"+
                      $scope.currentTopic.videoId+
                      "?autohide=1&modestbranding=1&playsinline=1&rel=0"+
                      "&showinfo=0&theme=dark&controls=2&playsinline=1"+
                      "&end="+topic.endTime.toString();
        
        //add timeline events to video
        var pop = Popcorn(wrapper);
        for(var i=0;i<topic.interlinks.length;i++){
            pop.timeline(topic.interlinks[i]);
        }
        
        //compile timeline events so directives work
        //and play the video
        setTimeout(function(){
            var injector = angular.element(captionDiv).injector();
            var element = angular.element(captionDiv);
            injector.invoke(function ($compile) {    
                var scope = element.scope();
                $compile(element)(scope);
            });
            pop.play(topic.startTime);
        },1000);
    }

    $scope.changeTopic = function(id){
        for(var i=0;i<$scope.topics.length;i++){
            if($scope.topics[i].id===id){
                $scope.currentTopic = $scope.topics[i];
                break;
            }
        }
    }

    /* Watches */
    /* ------------------------ */
    $scope.$watchGroup(["currentTopic"], function() {
        $scope.initializeTopic($scope.currentTopic);
    });

});