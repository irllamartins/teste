import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function create(objetoDeCategoria){
    return fetch(`${URL_CATEGORIES}`,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(objetoDeCategoria),
    })
    .then(async (respostaDoServidor) => {
        // = esperar
        if(respostaDoServidor.ok){
            const resposta = await respostaDoServidor.json();
            return resposta;
        }
        throw new Error('Não foi possivel cadastrar os dados');
    });
}
function getAll(){
    return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServidor) => {
        // = esperar
        if(respostaDoServidor.ok){
            const resposta = await respostaDoServidor.json();
            return resposta;
        }
        throw new Error('Não foi possivel consultar os dados');
    });
}

function getAllWithVideos(){
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServidor) => {
        // = esperar
        if(respostaDoServidor.ok){
            const resposta = await respostaDoServidor.json();
            return resposta;
        }
        throw new Error('Não foi possivel consultar os dados');
    });
}

export default{
  
    getAllWithVideos,
    getAll,
    create,
};