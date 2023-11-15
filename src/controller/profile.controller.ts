
import { get } from "mongoose";
import { ProfileListParams, ProfilePostParams } from "../model/Profile/profile.interface";
import Profile from "../model/Profile/profile.model";
import { OId } from "../types/objectId"

import { Controller, Get, Route, Tags, Security, Post, Query, Body, FormField, Path, Patch, Delete } from "tsoa"

@Route("profile")
@Tags("Profile")
export class ProfileController extends Controller {
    @Get("get-all")
    public async getAllProfile() {
        return Profile.find()
    }
    @Get("{id}")
    public async getUserById(@Path() id: OId) {
        return Profile.findById(id)
    }
    @Post()
    public async addProfile(@Body() Body: ProfilePostParams): Promise<ProfilePostParams> {
        const u = new Profile(Body)
        await u.save()
        return u as ProfilePostParams

    }

}
