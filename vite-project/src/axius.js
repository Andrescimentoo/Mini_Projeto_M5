//sao 2 passos (tipo vc monta sua arma e depois atira)
//                   1 Estruturar conexao com API
//                   2 Estruturar a requisiçao puxando as rotas da api

import axios from "axios"

const conectorApi = axios.create({
    baseURL: 'http://localhost:5000/'
}) 
    
export default conectorApi
