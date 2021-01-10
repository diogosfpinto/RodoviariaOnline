const listarViagens = () => {
    return fetch('http://localhost:4000/lista')
    .then(resposta => {
        return resposta.json();
    })
    .then( json => {
        return json;
    });
}