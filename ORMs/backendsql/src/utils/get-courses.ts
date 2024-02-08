import { client } from "../constants/constants";

export async function getAllCourses() {
  const allCourses = await client.course.findMany({});
  return allCourses;
}
