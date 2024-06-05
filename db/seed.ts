import { db, Abogado, Cliente, Asunto } from 'astro:db';

export default async function seed() {
 await db.insert(Abogado).values([
    { matricula_id: 1, nombre: 'Lic. Ana Karen', apellido: 'Francisco', calle: 'Calle 1', colonia: 'Colonia 1', numero: '1' },
    { matricula_id: 2, nombre: 'Lic. Rene', apellido: 'Gomez', calle: 'Calle 2', colonia: 'Colonia 2', numero: '2' },
    { matricula_id: 3, nombre: 'Lic. Ivan', apellido: 'Lopez', calle: 'Calle 3', colonia: 'Colonia 3', numero: '3' },
  ]);

  await db.insert(Cliente).values([
    { dni_id: 1, nombre: 'Juan', apellido: 'Perez', calle: 'Calle 4', colonia: 'Colonia 4', numero: '4' },
    { dni_id: 2, nombre: 'Pedro', apellido: 'Gomez', calle: 'Calle 5', colonia: 'Colonia 5', numero: '5' },
    { dni_id: 3, nombre: 'Maria', apellido: 'Lopez', calle: 'Calle 6', colonia: 'Colonia 6', numero: '6' },
  ]);

  await db.insert(Asunto).values([
    { numero_expediente: '1',nombre: 'Pension Alimenticia', periodo: '2020', estado: 'Activo', cliente_id: 1, abogado_id: 1 },
    { numero_expediente: '2',nombre: 'Pension Alimenticia', periodo: '2021', estado: 'Cerrado', cliente_id: 2, abogado_id: 2 },
    { numero_expediente: '3',nombre: 'Pension Alimenticia', periodo: '2022', estado: 'Activo', cliente_id: 3, abogado_id: 3 },
  ]);

}