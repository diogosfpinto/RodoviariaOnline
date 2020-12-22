const app = require('./src/server/config/customExpress'),
    conexao = require('./src/server/infraestrutura/conexao');

    
    conexao.connect((erro) => {
        if (erro) {
            console.log(erro);
        } else {
            app.listen(3000, () => {console.log('Servidor rodando na porta 3000.')});
    }
});
