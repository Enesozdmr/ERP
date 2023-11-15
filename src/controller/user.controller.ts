import { UserPostParams, UserSendParams, UserUpdateParams } from "../model/user/user.interface"
import UserModel from "../model/user/user.model"
import { OId } from "../types/objectId"
import { Controller, Get, Route, Tags, Security, Post, Query, Body, FormField, Path, Patch, Delete } from "tsoa"

@Route("users")
@Tags("Users")
export class UserController extends Controller {

    @Get("get-all")
    public async getAllUsers() {
        return UserModel.find()
    }

    @Get("{id}")
    public async getUserById(@Path() id: OId) {
        return UserModel.findById(id)
    }

    @Post()
    public async addUser(@Body() body: UserPostParams): Promise<UserSendParams> {
        const u = new UserModel(body)
        await u.save()
        return u as UserSendParams
    }

    @Patch("{id}")
    public async updateUserById(@Path() id: OId, @Body() body: UserUpdateParams) {
        return await UserModel.findByIdAndUpdate(id, body)
    }

    @Delete("{id}")
    public async deleteUserById(@Path() id: OId, @Body() body: UserUpdateParams) {
        return await UserModel.findByIdAndDelete(id, body)
    }
}