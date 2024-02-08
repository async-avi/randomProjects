import { client, token } from "../../constants/constants";

export function adminSignIn(email: string, password: string) {
  try {
    const findAdmin = client.admin.findFirst({
      where: {
        email: email,
        password: password,
      },
    });
    const adminToken = token.sign({ email: email }, `mimi`);
  } catch (error) {
    return { msg: "Admin with these credentials do not exist" };
  }
}
