import { CustomResponse } from "./../utils/customResponse";
import UserService from "./../services/user.service";

class UserContoller {
    async create(req) {
        const result = await UserService.create(req.body);
        return new CustomResponse(200, "User created", result);
    }

    async getAll(req) {
        const result = await UserService.getAll();
        return new CustomResponse(200, "all users", result);
    }

    async getOne(req) {
        const result = await UserService.getOne(req.params.userId);
        return new CustomResponse(200, "user data", result);
    }

    async update(req) {
        const result = await UserService.update(req.params.userId, req.body);
        return new CustomResponse(200, "user updated", result);
    }

    async delete(req) {
        const result = await UserService.delete(req.params.userId);
        return new CustomResponse(200, "user deleted", result);
    }
}

const UserCtrl = new UserContoller();

export { UserCtrl };
