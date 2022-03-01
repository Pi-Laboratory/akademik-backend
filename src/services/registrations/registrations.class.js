const { Service } = require('feathers-sequelize');
const _ = require('lodash');

exports.Registrations = class Registrations extends Service {
    constructor(options, app) {
        super(options, app);
        this.app = app;
        this.options = options || {};
    }
    async create(data, params) {
        console.log(data);
        const regData = {
            nisn: data.nisn,
            school_name: data.school_name,
            school_address: data.school_address,
            study_program_1_id: data.study_program_1_id,
            study_program_2_id: data.study_program_2_id
        };
        const reg = await super.create(regData, params);
        const stuFields = _.difference(Object.keys(data), Object.keys(regData));
        const stuData = {};
        for (let i of stuFields) {
            stuData[i] = data[i];
        }
        stuData.registration_id = reg.id;
        const student = await this.app.service('students').create(stuData);
        console.log(student);

        return reg;
    }
};
