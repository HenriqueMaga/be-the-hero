const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
    async index (request, response) {
        const users = await connection('users').select('*');
        return response.json(users);
    },

    async create(request, response) {

        const { username, password, email, city, uf } = request.body;
        const id = generateUniqueId();

        try{
            await connection('users').insert({
                id,
                username,
                password,
                email,
                city,
                uf
            })
            return response.json({ id, username });

        }catch (err){
            return response.status(400).json({ error: `Error ${err}` });
        }
    },

    async login(request, response) {
        const {params} = request.body;

        const username = params.username;
        const password = params.password;

        let user;
        console.log(username, password);

        try{
            user = await connection('users')
                .where('username', username)
                .andWhere('password', password)
                .select('username','id')
                .first();
            
            return response.json(user);

        }catch (err){
            return response.status(400).json({ error: `Error ${err}` });
        }
    }
}