'use strict';

import CourseViewCtrl from './courseview.controller';

export default angular.module('venueApp.courseview', ['venueApp.auth', 'venueApp.CourseFactory','venueApp.SectionFactory' ])
  .controller('CourseViewCtrl', CourseViewCtrl)
  .name;
