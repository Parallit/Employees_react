import bcrypt from 'bcrypt'
import tokenService from './token-service.js';
import UserDto from '../dtos/user-dto.js';
import { User } from '../models/user-model.js';
import { ApiError } from '../exceptions/api-error.js';
import { Employee } from '../models/employee-model.js';


class UserService {
    async registration(email, password, firstName, lastName) {
        const candidate = await User.findOne({ email })
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`);
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const user = await User.create({ email, password: hashPassword, firstName, lastName });

        const userDto = new UserDto(user)
        const tokens = await tokenService.generateTokens({ ...userDto })

        await tokenService.saveToken(userDto._id, tokens.refreshToken);
        return { ...tokens, user: userDto }
    }
    async login(email, password) {
        const user = await User.findOne({ email })
        if (!user) {
            throw ApiError.BadRequest('Пользователь с таким email не найден')
        }
        const isPassEquals = await bcrypt.compare(password, user.password)
        if (!isPassEquals) {
            throw ApiError.BadRequest('Введен некорректный логин или пароль')
        }
        const userDto = new UserDto(user);
        const tokens = await tokenService.generateTokens({ ...userDto })
        await tokenService.saveToken(userDto._id, tokens.refreshToken);
        return { ...tokens, user: userDto }
    }
    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token
    }
    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnathorizedError();
        }
        const userData = await tokenService.validateRefreshToken(refreshToken);
        const tokenFromDB = await tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDB) {
            throw ApiError.UnathorizedError()
        }
        const user = await User.findById(userData._id);
        // вынести в отдельную функцию дублирующийся код
        const userDto = new UserDto(user)
        const tokens = await tokenService.generateTokens({ ...userDto })
        await tokenService.saveToken(userDto._id, tokens.refreshToken);
        return { ...tokens, user: userDto }
    }
    async getAllUsers() {
        const users = await User.find().populate('employeesId');
        return users
    }
    async getCurrentUser(refreshToken) {
        const userData = await tokenService.validateRefreshToken(refreshToken);
        const user = await User.findById(userData._id).populate('employeesId');
        const userDto = new UserDto(user)
        return userDto
    }
    async updateUser(id, newData) {
        const updatedUser = await User.findByIdAndUpdate(id, newData, { new: true }).populate('employeesId');
        const userDto = new UserDto(updatedUser);
        return userDto
    }
    async removeUser(id, refreshToken) {
        if (!id || !refreshToken) {
            throw ApiError.BadRequest()
        }
        const removedUser = await User.findByIdAndDelete(id)
        await Employee.deleteMany({ userId: id })
        await tokenService.removeToken(refreshToken)
        return removedUser
    }
}

export default new UserService()