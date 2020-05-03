export interface Servico {
    id: number;
    nome: string;
    icone_path: string;
}

export interface ServicoPago {
    servico_id: number;
    valorPago: number;
}