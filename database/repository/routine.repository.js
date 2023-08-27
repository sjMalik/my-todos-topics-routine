const { APIError } = require('../../utils/app-error');
const { RoutineModel } = require('../models');

class RoutineRepository {
  async findAll() {
    try {
      const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
      const now = new Date();
      const today = days[now.getDay()];
      const routines = await RoutineModel.find({ day: today })
        .collation({ locale: 'en', strength: 2 })
        .sort({ day: 1 });
      return routines;
    } catch (e) {
      throw new APIError();
    }
  }
}

module.exports = RoutineRepository;

// exports.findAll = async (req, res) => {
//   const days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   const now = new Date();
//   const today = days[now.getDay()];
//   const routines = await Routine.find({ day: today })
//     .collation({ locale: "en", strength: 2 })
//     .sort({ day: 1 });
//   res.send(routines);
// };
