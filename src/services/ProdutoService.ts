import api from "@/lib/api";

import type { Produto } from "@/models/Produto";

const getProdutos = async () : Promise<Produto[]> => {

    const response = await api().get("/produtos");

    return response.data;

}

export default {
    getProdutos
}