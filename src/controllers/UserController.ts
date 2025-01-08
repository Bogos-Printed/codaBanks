import { CoreController } from "./CoreController";
import { User } from "../models/User";
import { users } from "../data/users";

export class UserController extends CoreController {
  deleteUser(user: User, id) {
    console.log(`Suppression de l'utilisateur ${id} par ${user.name}`);
  }

  setAdmin(user: User, id: number) {
    const targetUser = users.find((u) => u.id === id);

    if (!targetUser) {
      throw new Error("Utilisateur introuvable.");
    }

    console.log(`Changement de rôle de l'utilisateur ${id} par ${user.name}`);
    targetUser.role = "admin";
  }

  showUserDetails(userId: number) {
    const user = users.find((u) => u.id === userId);

    if (!user) {
      throw new Error("Utilisateur introuvable.");
    }

    console.log(`Détails de l'utilisateur ${userId} : ${user.name}`);
  }
}