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

export interface Servico {
    valor: number;
    disponivel: boolean;
    tipo: TipoServico
}

export interface TipoServico {
    id: number;
    nome: string;
    icone_path: string;
}

export interface Profissional {
    id: number;
    nome: string;
    img_perfil: string;
    disponibilidade?: DiasTrabalho;
    servicos?: Servico[];
    local: Endereco;
}