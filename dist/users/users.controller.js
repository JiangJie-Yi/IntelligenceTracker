var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// src/users/users.controller.ts
import { Controller, Get, Route } from '@tsoa/runtime';
let UsersController = class UsersController extends Controller {
    /**
     * Get login information
     * @returns Array of users
     */
    async getLogin() {
        return [
            {
                id: 1,
                username: 'test0123',
                password: 'test01234',
            },
        ];
    }
};
__decorate([
    Get('login')
], UsersController.prototype, "getLogin", null);
UsersController = __decorate([
    Route('api')
], UsersController);
export { UsersController };
