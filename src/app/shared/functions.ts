import { Endereco } from './../models/profissional.model';

export function formatAddres(address: Endereco) {
    return `Rua ${address.rua}, N° ${address.numero} - ${address.setor} - ${address.cidade} - ${address.estado}`;
}