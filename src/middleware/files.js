module.exports = (app) => {
  return async function files(req, res, next) {
    const { service, id, col } = req.params;
    const [field, ext] = col.split('.');

    console.log(service, id);
    try {
      const s = await app.service(service).get(id, { query: { $select: [field] } });
      res.send(s.photo);
    } catch (e) {
      console.log(e);
      res.status(404);
      res.json({ message: 'File not found' });
    }
  };
};
