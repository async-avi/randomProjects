import { client } from "../../constants/constants";

export async function createAdmin(email: string, password: string) {
  try {
    await client.admin.create({
      data: {
        email,
        password,
      },
    });
    return {
      msg: "New admin created successfully. Sign up to get the auth token",
    };
  } catch (error) {
    return {
      msg: "Error creating admin",
      issue: "Email already exists as admin",
    };
  }
}
