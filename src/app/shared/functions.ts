import { Endereco } from './../models/profissional.model';

export function formatAddres(address: Endereco) {
    if (!address.numero) return `Rua ${address.rua}, N° S/N - ${address.setor} - ${address.cidade} - ${address.estado}`;
    return `Rua ${address.rua}, N° ${address.numero} - ${address.setor} - ${address.cidade} - ${address.estado}`;
}