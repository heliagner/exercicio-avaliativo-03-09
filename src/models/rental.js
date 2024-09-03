const book = require("../controllers/book.js");
const student = require("../controllers/student.js");

let nextId = 2

const model = (body, id = nextId++) => {
    if(
        body.livro_id != undefined && book.show(body.livro_id) &&
        body.student_id != undefined && student.show(body.student_id) &&
        body.data_aluguel != undefined && body.data_aluguel != "" &&
        body.data_devolucao != undefined && body.data_devolucao != ""
    ) {
        return {
            id,
            livro: body.livro_id,
            estudante: body.student_id,
            data_aluguel: body.data_aluguel,
            data_devolucao: body.data_devolucao
        };
    };
};

module.exports = model