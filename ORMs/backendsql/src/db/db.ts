import { client } from "../constants/constants";

async function connectDB() {
  try {
    const connection = await client.$connect();
    console.log(`connection established to sql db`);
  } catch (error) {
    console.log(`Error connecting to db ${error}`);
  }
}

export { client, connectDB };
