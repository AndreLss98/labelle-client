export interface Endereco {
    rua: string;
    setor: string;
    numero: number;
    quadra: number;
    cidade: string;
    estado: string;
    latitude: number;
    longitude: number;
}

export interface DiasTrabalho {
    dom: boolean;
    seg: boolean;
    ter: boolean;
    qua: boolean;
    qui: boolean;
    sex: boolean;
    sab: boolean;
    horario_inicio: string;
    horario_fim: string;
}

export interface ProServico {
    servico_id: number;
    valor: number;
    disponivel: boolean;
}

export interface Profissional {
    id: number;
    nome: string;
    img_perfil: string;
    diasTrabalho?: DiasTrabalho;
    servicosDisponiveis?: ProServico[];
    local: Endereco;
}