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
            startTime: 0,
            endTime: 96,
            interlinks:
            [
                {
                    start: 13,
                    target: "caption",
                    title: '<a href="#/peer-to-peer">Peer-to-peer</a>',
                    text:"",
                    innerHTML:"",
                    direction: "up"
                },
                {
                    start: 28,
                    target: "caption",
                    title: '<a href="#/bitcoin-exchange">Bitcoin Exchange</a>',
                    text:"",
                    innerHTML:"",
                    direction: "up"
                },
                {
                    start: 34,
                    target: "caption",
                    title: '<a href="#/bitcoin-wallet">Bitcoin Wallet</a>',
                    text: "",
                    innerHTML: "",
                    direction: "up"
                },
                {
                    start: 42,
                    target: "caption",
                    title: '<a href="#/bitcoin-merchant">Bitcoin Merchant</a>',
                    text: "",
                    innerHTML: "",
                    direction: "up"
                },
                {   
                    start: 47,
                    target: "caption",
                    title: '<a href="#/bitcoin-mining">Bitcoin Mining</a>',
                    text: "",
                    innerHTML: "",
                    direction: "up"
                },
                {
                    start: 57,
                    target: "caption",
                    title: '<a href="#/bitcoin-blockchain">Bitcoin Blockchain</a>',
                    text: "",
                    innerHTML: "",
                    direction: "up"
                }
            ]
        },
        {
            id: 2,   
            title: "Bitcoin Exchange",
            startTime:63,
            endTime:156,
            videoId: "mB0K7ybVOL8",
            type: "YouTube",
            path: "bitcoin-exchange",
            interlinks:
            [
                {
                    start: 106,
                    target: 'caption',
                    title: '<a href="#/bitcoin">Bitcoin</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"
                },
                {                
                    start: 110,
                    target: 'caption',
                    title: '<a href="#/altcoin">Altcoin</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"

                }
            ]
        },
        {
            id: 3,   
            title: "Bitcoin Wallet",
            startTime:0,
            endTime:96,
            videoId: "oTfOfqmb5tU",
            type: "YouTube",
            path: "bitcoin-wallet",
            interlinks:
            [
                {
                    start: 11,
                    target: 'caption',
                    title: '<a href="#/bitcoin-address">Bitcoin Address</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"
                },
                {                
                    start: 32,
                    target: 'caption',
                    title: '<a href="#/bitcoin-wallet">Bitcoin Wallet</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"

                },
                {
                    start: 40,
                    target: 'caption',
                    title: '<a href="#/private-key">Private Key</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"
                },
                {
                    start: 75,
                    target: 'caption',
                    title: '<a href="#/brain-wallet">Brain Wallet</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"
                }
            ]
        },
        {
            id: 4,   
            title: "Bitcoin Merchant",
            startTime:696,
            endTime:747,
            videoId: "8Z3-DA7aFCU",
            type: "YouTube",
            path: "bitcoin-merchant",
            interlinks:
            [

                {
                    start: 704,
                    target: 'caption',
                    title: '<a href="#/bitcoin">Bitcoin</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"
                }
            ]
        },
        {
            id: 5,   
            title: "Bitcoin Mining",
            startTime:0,
            endTime:115,
            videoId: "GmOzih6I1zs",
            type: "YouTube",
            path: "bitcoin-mining",
            interlinks:
            [
                {
                    start: 3,
                    target: 'caption',
                    title: '<a href="#/peer-to-peer">Peer-to-peer</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"
                },
                {
                    start: 90,
                    target: 'caption',
                    title: '<a href="#/bitcoin-pool">Bitcoin Pool</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"
                }
            ]
        },
        {
            id: 6,   
            title: "Bitcoin Blockchain",
            startTime:13,
            endTime:118,
            videoId: "1tVaA57sP9k",
            type: "YouTube",
            path: "bitcoin-blockchain",
            interlinks:
            [
                {
                    start: 18,
                    target: 'caption',
                    title: '<a href="#/peer-to-peer">Peer-to-peer</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"
                },
                {
                    start: 105,
                    target: 'caption',
                    title: '<a href="#/transaction-fee">Bitcoin Transaction Fee</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"
                }
            ]
        },
        {
            id: 7,   
            title: "Altcoin",
            startTime:154,
            endTime:306,
            videoId: "VOICfyCvous",
            type: "YouTube",
            path: "altcoin",
            interlinks:
            [
                {
                    start: 165,
                    target: 'caption',
                    title: '<a href="#/litecoin">Litecoin</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"
                },
                {
                    start: 173,
                    target: 'caption',
                    title: '<a href="#/bitcoin">Bitcoin</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"
                },
                {
                    start: 186,
                    target: 'caption',
                    title: '<a href="#/premine">Premine</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"
                },
                {                
                    start: 236,
                    target: 'caption',
                    title: '<a href="#/bitcoin-mining">Bitcoin Mining</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"

                },
                {
                    start: 287,
                    target: 'caption',
                    title: '<a href="#/bitcoin-exchange">Bitcoin Exchange</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"
                }
            ]
        },
        {
            id: 8,   
            title: "Bitcoin Address",
            startTime:164,
            endTime:180,
            videoId: "Lx9zgZCMqXE",
            type: "YouTube",
            path: "bitcoin-address",
            interlinks:
            [
                {
                    start: 166,
                    target: 'caption',
                    title: '<a href="#/bitcoin">Bitcoin</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"
                },
                {
                    start: 179,
                    target: 'caption',
                    title: '<a href="#/private-key">Private Key</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"
                }
            ]
        },
        {
            id: 9,   
            title: "Private Key",
            startTime:6,
            endTime:88,
            videoId: "oaG-XJlvFSc",
            type: "YouTube",
            path: "private-key",
            interlinks:
            [
                {
                    start: 12,
                    target: 'caption',
                    title: '<a href="#/bitcoin-wallet">Bitcoin Wallet</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"
                },
                {
                    start: 16,
                    target: 'caption',
                    title: '<a href="#/bitcoin-address">Bitcoin Address</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"
                },
                {
                    start: 23,
                    target: 'caption',
                    title: '<a href="#/bitcoin">Bitcoin</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"
                },
                {
                    start: 27,
                    target: 'caption',
                    title: '<a href="#/bitcoin-blockchain">Bitcoin Blockchain</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"
                },
                {
                    start: 32,
                    target: 'caption',
                    title: '<a href="#/peer-to-peer">Peer-to-peer</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"
                }
            ]
        },
       {
            id: 10,   
            title: "Brain Wallet",
            startTime:5,
            endTime:68,
            videoId: "fBOWAqmS7qY",
            type: "YouTube",
            path: "brain-wallet",
            interlinks:
            [
                {
                    start: 62,
                    target: 'caption',
                    title: '<a href="#/private-key">Private Key</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"
                }
            ]
        },
        {
            id: 11,   
            title: "Peer-to-peer",
            startTime:125,
            endTime:228,
            videoId: "C5UWEWcGJgs",
            type: "YouTube",
            path: "peer-to-peer",
            interlinks:
            [
                {
                    start: 190,
                    target: 'caption',
                    title: '<a href="#/bitcoin">Bitcoin</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"
                }
            ]
        },
        {
            id: 12,   
            title: "Bitcoin Pool",
            startTime:133,
            endTime:177,
            videoId: "zXmIeOL0QPg",
            type: "YouTube",
            path: "bitcoin-pool",
            interlinks:
            [
                {
                    start: 141,
                    target: 'caption',
                    title: '<a href="#/bitcoin-blockchain">Bitcoin Blockchain</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"
                }
            ]
        },
        {
            id: 13,   
            title: "Transaction Fee",
            startTime:375,
            endTime:426,
            videoId: "Em8nJN8IEes",
            type: "YouTube",
            path: "transaction-fee",
            interlinks:
            [
                {
                    start: 414,
                    target: 'caption',
                    title: '<a href="#/bitcoin-blockchain">Bitcoin Blockchain</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"
                },
                {
                    start: 416,
                    target: 'caption',
                    title: '<a href="#/bitcoin-mining">Bitcoin Mining</a>',
                    text: "",
                    innerHTML: "",
                    direction:"up"
                }
            ]
        }

    ]
    return topics;
});

jadyuApp.controller('TopicCtrl', function ($scope, $http, $filter, Data, $location) {

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
                      topic.videoId+
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

    $scope.changeTopicById = function(id){
        for(var i=0;i<$scope.topics.length;i++){
            if($scope.topics[i].id===id){
                $scope.currentTopic = $scope.topics[i];
                break;
            }
        }
    }

    $scope.changeTopicByPath = function(path){
        for(var i=0;i<$scope.topics.length;i++){
            if($scope.topics[i].path===path){
                $scope.currentTopic = $scope.topics[i];
                $scope.initializeTopic($scope.topics[i]);
                break;
            }
        }
    }

    /* Initialization */
    /* ------------------------ */
    $scope.topics = Data;

    /* Watches */
    /* ------------------------ */
    $scope.$on('$locationChangeStart', function(){
        $scope.changeTopicByPath($location.path().slice(1));
    });

});