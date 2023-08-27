/* eslint-disable indent */
// eslint-disable-next-line import/extensions, import/no-unresolved
const Routine = require('../models/routine.model');

exports.findAll = async (req, res) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const today = days[now.getDay()];
    const routines = await Routine.find({ day: today }).collation({ locale: 'en', strength: 2 }).sort({ day: 1 });
    res.send(routines);
};
