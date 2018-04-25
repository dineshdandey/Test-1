angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.challenges', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/challenges.html',
        controller: 'challengesCtrl'
      }
    }
  })

  .state('tabsController.nearby', {
    url: '/page8',
    views: {
      'tab2': {
        templateUrl: 'templates/nearby.html',
        controller: 'nearbyCtrl'
      }
    }
  })

  .state('tabsController.dashboard', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/dashboard.html',
        controller: 'dashboardCtrl'
      }
    }
  })

  .state('tabsController.timeline', {
    url: '/page10',
    views: {
      'tab4': {
        templateUrl: 'templates/timeline.html',
        controller: 'timelineCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.cardioChallenge'
      2) Using $state.go programatically:
        $state.go('tabsController.cardioChallenge');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page5
      /page1/tab4/page5
      /page1/tab2/page5
      /page1/tab3/page5
  */
  .state('tabsController.cardioChallenge', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/cardioChallenge.html',
        controller: 'cardioChallengeCtrl'
      },
      'tab4': {
        templateUrl: 'templates/cardioChallenge.html',
        controller: 'cardioChallengeCtrl'
      },
      'tab2': {
        templateUrl: 'templates/cardioChallenge.html',
        controller: 'cardioChallengeCtrl'
      },
      'tab3': {
        templateUrl: 'templates/cardioChallenge.html',
        controller: 'cardioChallengeCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page4')


});