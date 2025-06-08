import express from 'express';
import { RegisterRoutes } from './routes';
const swaggerOption = {
    swaggerDirection: {
        info: {
            title: 'title',
            content: 'testContent',
        },
    },
    apis: ['api.ts'],
};
const port3000 = '3000';
const data = express();
data.use(express.json());
RegisterRoutes(data);
data.get('/api/login', (req, res) => {
    const login = [
        {
            id: 1,
            username: 'test0123',
            password: 'test01234',
        },
    ];
    res.json(login);
});
data.listen(port3000, () => console.log(`Running: http://localhost:${port3000}`));
