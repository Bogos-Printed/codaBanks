type UserRole = "admin" | "user";

export class user {
  public id: number;
  public name: string;
  public role: UserRole;

  constructor(id: number, name: string, role: UserRole = "user") {
    this.id = id;
    this.name = name;
    this.role = role;
  }
}