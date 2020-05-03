import { ServicoPago } from './servico.model';
import { Profissional } from './profissional.model';

export interface Reserva {
    id: number;
    dia: number;
    horario: string;
    servicos: ServicoPago[],
    profissional: Profissional
}