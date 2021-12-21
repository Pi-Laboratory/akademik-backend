const { Service } = require('feathers-sequelize');

exports.Studies = class Studies extends Service {
    async create(data, params) {
        if (Array.isArray(data)) {
            return Promise.all(data.map(current => this.create(current, params)));
        }

        return super.create(data, params);
    }
};
