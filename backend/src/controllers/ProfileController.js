const connection = require('../database/connection');

module.exports = {
  async getlist (request, response) {
    const ong_id = request.headers.authorization;

    const incidents = await connection('incidents').select('*').where('ong_id',ong_id);
  
    return response.json(incidents);
  }
}