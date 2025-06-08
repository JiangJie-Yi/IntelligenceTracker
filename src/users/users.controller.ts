// src/users/users.controller.ts
import { Controller, Get, Route, Response } from '@tsoa/runtime';

export interface User {
  id: number;
  username: string;
  password: string;
}

@Route('api')
export class UsersController extends Controller {
  /**
   * Get login information
   * @returns Array of users
   */
  @Get('login')
  public async getLogin(): Promise<User[]> {
    return [
      {
        id: 1,
        username: 'test0123',
        password: 'test01234',
      },
    ];
  }
}
