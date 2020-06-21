const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const {email, password} = request.body;

        let ong = '';
        
        ong = await connection('ongs')
            .where('email', email)
            .andWhere('password', password)
            .select('name','id')
            .first();

        if(ong){
            return response.json(ong);
        }else{
            return response.status(400).json({ error: `Ong não cadastrada` });
        }
    }
}