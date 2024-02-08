import { client } from "../../constants/constants";

export async function createAdmin(email: string, password: string) {
  try {
    const newAdmin = await client.admin.create({
      data: {
        email,
        password,
      },
    });
    return { msg: "New admin created successfully", id: newAdmin.id };
  } catch (error) {
    return {
      msg: "Error creating admin",
      issue: "Email already exists as admin",
    };
  }
}
