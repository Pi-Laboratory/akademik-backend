/* eslint-disable no-unused-vars */
exports.Contracts = class Contracts {
  constructor(options, app) {
    this.app = app;
    this.options = options || {};
  }

  async create(data, params) {
    const studies = await this.app.service('studies').create(data.student_ids.map((student_id) => ({
      student_id,
      semester: data.semester
    })));

    for (let i = 0; i < studies.length; i++) {
      const study_id = studies[i].id;
      for (let j = 0; j < data.subject_lecturer_ids.length; j++) {
        const subject_lecturer_id = data.subject_lecturer_ids[j];
        const plans = await this.app.service('study-plans').create({
          study_id,
          subject_lecturer_id
        });
      }
    }
    return studies;
  }
};
