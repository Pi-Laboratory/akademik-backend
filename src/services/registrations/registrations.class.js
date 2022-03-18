const { Service } = require('feathers-sequelize');
const _ = require('lodash');

const padNum = 3;

exports.Registrations = class Registrations extends Service {
    constructor(options, app) {
        super(options, app);
        this.app = app;
    }
    async create(data, params) {
        const regData = {
            nisn: data.nisn,
            // status: data.status,
            school_name: data.school_name,
            school_address: data.school_address,
            study_program_1_id: data.study_program_1_id,
            study_program_2_id: data.study_program_2_id,
            // created_at: data.created_at
        };
        const reg = await super.create(regData, params);
        const stuFields = _.difference(Object.keys(data), Object.keys(regData));
        const stuData = {};
        for (let i of stuFields) {
            stuData[i] = data[i];
        }
        stuData.registration_id = reg.id;
        const student = await this.app.service('students').create(stuData);
        reg.student = student;
        return reg;
    }
    async patch(id, data, params) {
        const selected_study_program_id = data.study_program_id;
        delete data.study_program_id;
        const reg = await super.patch(id, data, params);

        if (reg.status === 'passed') {
            const sequelize = this.app.get('sequelizeClient');
            const stud = (await this.app.service('students').find({
                query: { registration_id: reg.id }
            })).data[0];
            const user = (await this.app.service('users').find({
                query: { student_id: stud.id }
            })).data[0];
            const sp = await this.app.service('study-programs').get(selected_study_program_id);
            const year = new Date(reg.created_at).getFullYear();
            const generationNumber = year - 2000;
            const lastStudent = (await this.app.service('students').find({
                query: {
                    nim: {
                        $ne: null
                    },
                    generation: year,
                    study_program_id: selected_study_program_id,
                    $limit: 1,
                    $sort: {
                        nim: -1
                    }
                }
            })).data[0];

            let nim = '';
            if (!lastStudent) {
                nim = `${pad(generationNumber, 2)}${pad(sp.code, padNum)}001`;
            } else {
                const lastNim = lastStudent.nim;
                const next = parseInt(lastNim.slice(-padNum)) + 1;
                nim = lastNim.slice(0, -padNum) + String(pad(next, padNum));
            }
            const student = await this.app.service('students').patch(stud.id, {
                nim: nim,
                generation: year,
                study_program_id: sp.id,
                student_status: 'active'
            });
            await this.app.service('users').patch(user.id, { registration_id: null });
            // const user = await this.app.service('users').patch(stud.user.id)
        }
    }
};

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}