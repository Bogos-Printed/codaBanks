import { CLI } from "./CLI";

const startupParts = [
  "   __________  ____  ___       ____  ___    _   ____ __",
  "  / ____/ __ \\/ __ \\/   |     / __ )/   |  / | / / //_/",
  " / /   / / / / / / / /| |    / __  / /| | /  |/ / ,<   ",
  "/ /___/ /_/ / /_/ / ___ |   / /_/ / ___ |/ /|  / /| |  ",
  "\\____/\\____/_____/_/  |_|  /_____/_/  |_/_/ |_/_/ |_|",
  "",
  "La banque de demain, aujourd'hui.",
  "",
];

console.log(startupParts.join("\n"));

// TODO

const exempleUser: string [] = ["1", "John", "Doe"];
const balance: number = 1000;

const mainMenu = new CLI([
  {
    title: "Créer un compte",
    value: "create",
    action: () => {
      console.log("Création d'un compte");
    },
  },
  {
    title: "Connexion a un compte",
    value: "log",
    action: async () => {
      await accountMenu();
    }
  }

]);

async function accountMenu() {
  const cli = new CLI([
    {
      title: "Faire un dépot",
      value: "deposit",
      action: () => {
        console.log("Combien souhaiter vous déposer ?");
        // askvalue
      },
    },
    {
      title: "Regarder sa solde",
      value: "check",
      action: () => {
        console.log(`Votre solde est à ${balance}`);
      }
    }])

    return cli.menu; 
}

mainMenu.menu();
