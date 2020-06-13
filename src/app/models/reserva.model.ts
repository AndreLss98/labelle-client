import { ServicoPago } from './servico.model';
import { Profissional } from './profissional.model';

export interface Reserva {
    id: number;
    dia: number;
    mes: number;
    ano: number;
    horario: string;
    servicos: ServicoPago[],
    profissional: Profissional
}