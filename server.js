const app = require('./server/config/customExpress'),
    conexao = require('./server/config/conexao');

    
    conexao.connect((erro) => {
        if (erro) {
            console.log(erro);
        } else {
            app.listen(3000, () => {console.log('Servidor rodando na porta 3000.')});
    }
});
