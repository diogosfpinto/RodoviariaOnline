const conexao = require('../config/conexao');

class ViagensDao {

    lista(res){
        const sql = 'SELECT * FROM viagens';

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }
        })
    }

    adiciona(){
        
    }
}

module.exports = ViagensDao;