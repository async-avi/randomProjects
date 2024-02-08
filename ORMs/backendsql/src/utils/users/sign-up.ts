import { client } from "../../constants/constants";

export async function signUpUser(email: string, password: string) {
  try {
    const createUser = await client.user.create({
      data: {
        email,
        password,
      },
    });
    return { msg: "User created successfully", id: createUser.id };
  } catch (error) {
    return { msg: "Email already exists" };
  }
}
