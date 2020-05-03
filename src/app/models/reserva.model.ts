import { Cliente } from './cliente.model';
import { ServicoPago } from './servico.model';

export interface Reserva {
    id: number;
    dia: number;
    horario: string;
    servicos: ServicoPago[],
    cliente: Cliente
}