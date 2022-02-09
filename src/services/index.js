const users = require('./users/users.service.js');
const rooms = require('./rooms/rooms.service.js');
const semesters = require('./semesters/semesters.service.js');
const students = require('./students/students.service.js');
const employees = require('./employees/employees.service.js');
const subjects = require('./subjects/subjects.service.js');
const majors = require('./majors/majors.service.js');
const studyPrograms = require('./study_programs/study_programs.service.js');
const subjectLecturers = require('./subject_lecturers/subject_lecturers.service.js');
const hours = require('./hours/hours.service.js');
const classes = require('./classes/classes.service.js');
const curriculums = require('./curriculums/curriculums.service.js');
const studyPlans = require('./study_plans/study_plans.service.js');
const lecturers = require('./lecturers/lecturers.service.js');
const studyResults = require('./study_results/study_results.service.js');
const studies = require('./studies/studies.service.js');
const contracts = require('./contracts/contracts.service.js');
const tasks = require('./tasks/tasks.service.js');
const registrations = require('./registrations/registrations.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(rooms);
  app.configure(semesters);
  app.configure(students);
  app.configure(employees);
  app.configure(subjects);
  app.configure(majors);
  app.configure(studyPrograms);
  app.configure(subjectLecturers);
  app.configure(hours);
  app.configure(classes);
  app.configure(curriculums);
  app.configure(studyPlans);
  app.configure(lecturers);
  app.configure(studyResults);
  app.configure(studies);
  app.configure(contracts);
  app.configure(tasks);
  app.configure(registrations);
};
