import User from "../schemas/User";

class UserController {
    async create(request, response){
        const { name, email, username, password, phone } = request.body;
        
        const user = await User.create({
          name, 
          email, 
          username, 
          password, 
          phone,
        });

        return response.json(user)
    }
}

export default new UserController();