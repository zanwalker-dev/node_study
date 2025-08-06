const path = require("path");

// basename - nome do arquivo(file)
console.log(path.basename(__filename));

// dirname - nome do diretorio(dir)
console.log(path.dirname(__filename));

// extname - extensão do arquivo
console.log(path.extname(__filename));

// parse - criar objeto path com todos os dados(root, diretorio, base, extensão e nome)
console.log(path.parse(__filename));

// join - juntar caminhos de arquivos
console.log(path.join(__dirname, "teste"));
