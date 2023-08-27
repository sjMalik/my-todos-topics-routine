const { RoutineRepository } = require('../database');
const { FormatData } = require('../utils');
const { APIError } = require('../utils/app-error');

class RoutineService {
  constructor() {
    this.repository = new RoutineRepository();
  }

  async findAll() {
    try {
      const routines = await this.repository.findAll();
      return FormatData(routines);
    } catch (e) {
      throw new APIError('Data Not Found');
    }
  }
}

module.exports = RoutineService;
