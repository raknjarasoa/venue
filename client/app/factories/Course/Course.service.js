'use strict';

(function() {

  function CourseResource($resource, $http) {
    var Course = $resource('/api/courses/:id/:controller', {
      id: '@_id'
    }, {
      create: {
        method: 'POST'
      },
      get: {
        method: 'GET'
      },
      getAll: {
        method: 'GET',
        isArray:true
      },
      update: {
        method: 'PUT'
      },
      delete: {
        method: 'DELETE'
      }
    });
    return Course;
  }

  angular.module('venueApp.auth')
    .factory('Course', CourseResource);

  })();