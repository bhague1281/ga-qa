
'use strict';

/* Services */

angular.module('ga-qa.services', [])
  .factory('Question', ['$resource', '$window', function ($resource, $window) {
    return $resource($window.location.origin + '/api/questions/:id', { id: '@id' }, {
      query: { isArray: false },
      update: { method: 'PUT' }
    });
  }])

  .factory('Answer', ['$resource', '$window', function ($resource, $window) {
    return $resource($window.location.origin + '/api/questions/:questionId/answers/:id', { questionid: '@questionId', id: '@id' }, {
      update: { method: 'PUT' }
    });
  }])

  // .factory('Comment', ['$resource', '$window', function ($resource, $window) {
  //   return $resource($window.location.origin + '/api/parent/:parentId/comments/:id', { parentId: '@parentId', id: '@id' }, {
  //     update: { method: 'PUT' }
  //   });
  // }])

  .factory('Auth', ['$auth', function ($auth) {
    return {
      currentUser: function() {
        var user = $auth.getPayload();
        var currentUser = {
          _id: user.sub,
          email: user.email,
          picture: user.picture,
          displayName: user.displayName
        }
        return currentUser;
      }
    }
  }])