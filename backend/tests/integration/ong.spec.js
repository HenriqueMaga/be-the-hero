const request = require('supertest');
const app = require('../../scr/app');
const connection = require('../../scr/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })

    afterAll(async () =>{
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "OngName",
                email: "henrique.ma400@gmail.com",
                whatsapp: "11970574204",
                city: "Guarulhos",
                uf: "SP"
            });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});