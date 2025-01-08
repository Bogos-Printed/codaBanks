import { User } from "../models/User";

const user = new User(1, "John Doe", "user");
const admin = new User(2, "Jack Doe", "admin");

export const users: User[] = [user, admin];
