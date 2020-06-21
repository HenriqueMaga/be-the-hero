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

        console.log(username, password, email, city, uf);
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
        console.log(request.body);
        const {username, password} = request.body;

        let user;
        console.log(username, password);
        
        user = await connection('users')
            .where('username', username)
            .andWhere('password', password)
            .select('username','id')
            .first();
        
        const userWithoutPassword = await connection('users')
            .where('username', username)
            .select('username','id')
            .first();

        if(user){
            return response.json(user);
        } else if (!user && userWithoutPassword) {
            return response.status(401).json({ error: `Senha incorreta` });
        }else{
            return response.status(404).json({ error: `Usuário não encontrado` });
        }
    }
}