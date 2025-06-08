import express, { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from './routes';
import { Swagger } from 'tsoa';

interface User {
  id: number;
  username: string;
  password: string;
}

const swaggerOption = {
  swaggerDirection: {
    info: {
      title: 'title',
      content: 'testContent',
    },
  },
  apis: ['api.ts'],
};

const port3000: string = '3000';
const data = express();

data.use(express.json());
RegisterRoutes(data);

data.get('/api/login', (req: Request, res: Response) => {
  const login: User[] = [
    {
      id: 1,
      username: 'test0123',
      password: 'test01234',
    },
  ];

  res.json(login);
});

data.listen(port3000, () => console.log(`Running: http://localhost:${port3000}`));
