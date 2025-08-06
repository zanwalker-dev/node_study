const fs = require("fs");
const path = require("path");

// comentando exemplo abaixo para não ficar dando erro já que o diretorio criado já existe:
// mkdir Criar uma pasta
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log("Erro:", error);
//   }

//   console.log("Pasta criada com sucesso!");
// });

// // writeFile criar um file:
// fs.writeFile(
//   path.join(__dirname, "/test", "test.txt"),
//   "hello world",
//   (error) => {
//     if (error) {
//       return console.log("Erro:", error);
//     }

//     console.log("Arquivo e pasta criados com sucesso!");
//   }
// );

// appendFile - adicionar a um arquivo
// fs.appendFile(path.join(__dirname, "/test", "test.txt"), " ,node!", (error) => {
//   if (error) {
//     return console.log("Erro:", error);
//   }

//   console.log("Arquivo modificado com sucesso!");
// });

// readFile - ler o arquivo:
fs.readFile(
  path.join(__dirname, "/test", "test.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("Erro:", error);
    }

    console.log(data);
  }
);
