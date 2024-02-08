import { client } from "../constants/constants";

export async function signUpUser(email: string, password: string) {
  try {
    const createUser = await client.user.create({
      data: {
        email,
        password,
      },
    });
    return createUser.id;
  } catch (error) {
    return error;
  }
}
