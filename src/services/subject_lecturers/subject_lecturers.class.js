const { Service } = require('feathers-sequelize');

exports.SubjectLecturers = class SubjectLecturers extends Service {
    constructor(options, app) {
        super(options, app);
        this.app = app;
    }
    async  find(params) {
        // delete params.sequelize;
        return super.find(params);
    }
    async create(data, params) {
        const sl = await super.create(data, params);
        for (let meeting = 1; meeting <= 16; meeting++) {
            await this.app.service('meetings').create({
                meeting,
                subject_lecturer_id: sl.id
            });
        }
        return sl;
    }
};
