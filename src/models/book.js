const db = [];

let nextId = 2;

const model = (body, id = nextId++) => {
    if(
        body.titulo != undefined && body.titulo != "" &&
        body.autor != undefined && body.autor != "" &&
        body.ano != undefined && body.ano != "" &&
        body.genero != undefined && body.genero != ""
    ) {
        return {
            id,
            titulo: body.titulo,
            autor: body.autor,
            ano: body.ano,
            genero: body.genero
        };
    };
};

module.exports = model