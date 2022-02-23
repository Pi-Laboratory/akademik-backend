const { Service } = require('feathers-sequelize');

exports.Students = class Students extends Service {
    async get(id, params) {
        const result = await super.get(id, params);
        result.photo = result.photo.toString('base64');
        return result;
    }

    async find(params) {
        const result = await super.find(params);
        result.data = result.data.map((d) => {
            if (d.photo) {
                console.log(d.photo);
                d.photo = d.photo.toString('base64');
            }
            return d;
        });
        return result;
    }
};
