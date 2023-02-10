const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const user_id = request.headers.authorization;

    try {
      const incidents = await connection("incidents")
        .where("user_id", user_id)
        .where("user_id", user_id)
        .select("*");

      return response.json(incidents);
    } catch (err) {
      console.log(err)
      return response.status(404).json({ error: "Not found" });
    }
  },
};
