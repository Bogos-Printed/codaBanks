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
      await name;
    }
  }

]);

async function name() {
  const cli = new CLI([
    {
      title: "Make a deposit",
      value: "deposit",
      action: () => {
        console.log("Création d'un compte");
      },
    },
    {
      title: "Check Account Balance",
      value: "check",
      action: () => {
        console.log("poor");
      }
    }])
}

mainMenu.menu();
