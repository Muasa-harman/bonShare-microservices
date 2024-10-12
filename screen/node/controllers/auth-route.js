import User from "@/module/User.js";

const createUser = async () => {
  const { name, email, phone_number, password } = body;
  const user = await new User.post({ body });
  console.log(user);
};

export default createUser;
