const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const {email, password} = request.body;

        let ong = '';

        try{
            ong = await connection('ongs')
                .where('email', email)
                .andWhere('password', password)
                .select('name','id')
                .first();
        }catch (err){
            return response.status(400).json({ error: `Error ${err}` });
        }
        
        return response.json(ong);
    }
}