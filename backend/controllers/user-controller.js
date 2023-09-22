import UserService from '../services/user-service.js'
import { validationResult } from 'express-validator';
import { ApiError } from '../exceptions/api-error.js';
import avatarService from '../services/avatar-service.js';

class UserController {
    /**
     * @route POST /api/user/registration
     * @desc  Registration
     * @access Public
     */
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }
            const { email, password, firstName, lastName } = req.body;
            const userData = await UserService.registration(email, password, firstName, lastName);
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.status(200).json(userData)
        } catch (err) {
            next(err)
        }
    }
    /**
     * @route POST /api/user/login
     * @desc Login
     * @access Public
     */
    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const userData = await UserService.login(email, password)
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.status(200).json(userData)
        } catch (err) {
            next(err)
        }
    }
    /**
     * @route POST /api/user/logout
     * @desc Logout
     * @access Public
     */
    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const token = await UserService.logout(refreshToken);
            res.clearCookie('refreshToken')
            res.status(200).json(token)
        } catch (error) {
            next(err)
        }
    }
    /**
     * @route GET /api/user/refresh
     * @desc Logout
     * @access Public
     */
    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const userData = await UserService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.status(200).json(userData)
        } catch (err) {
            next(err)
        }
    }
    /**
     * @route GET /api/user/current
     * @desc  get current user
     * @access Private
     */
    async current(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const user = await UserService.getCurrentUser(refreshToken);
            return res.status(200).json(user)
        } catch (err) {
            next(err)
        }
    }
    /**
     * @route GET /api/users
     * @desc  get all users
     * @access Private
     */
    async getAllUsers(_, res, next) {
        try {
            const users = await UserService.getAllUsers();
            return res.status(200).json(users)
        } catch (err) {
            next(err)
        }
    }
    /**
     * @route PATCH /api/users/edit/:id
     * @desc  update user data
     * @access Private
     */
    async updateUserData(req, res, next) {
        try {
            const { id } = req.params;
            const newData = req.body;
            const updatedUser = await UserService.updateUser(id, newData)
            return res.status(200).json(updatedUser)
        } catch (err) {
            next(err)
        }
    }
    /**
     * @route DELETE /api/user/remove/:id
     * @desc  remove user
     * @access Private
     */
    async removeUser(req, res, next) {
        try {
            const { id } = req.params;
            const { refreshToken } = req.cookies;
            const removedUser = await UserService.removeUser(id, refreshToken)
            res.status(204).json(removedUser)
        } catch (err) {
            next(err)
        }
    }
}


export default new UserController()