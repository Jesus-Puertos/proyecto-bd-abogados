import { defineDb, defineTable, column } from 'astro:db';

const Abogado = defineTable({
  columns:{
    matricula_id: column.number({primaryKey: true}),
    nombre: column.text(),
    apellido: column.text(),
    calle: column.text(),
    colonia: column.text(),
    numero: column.text(),
  }
});

const Cliente = defineTable({
  columns:{
    dni_id: column.number({primaryKey: true}),
    nombre: column.text(),
    apellido: column.text(),
    calle: column.text(),
    colonia: column.text(),
    numero: column.text(),
  }
});

const Asunto = defineTable({
  columns:{
    numero_expediente: column.text({primaryKey: true}),
    nombre: column.text(),
    periodo: column.text(),
    estado: column.text(),
    abogado_id: column.number({references:()=> Abogado.columns.matricula_id}),
    cliente_id: column.number({references:()=> Cliente.columns.dni_id}),
  }
});

export default defineDb({
  tables: { Abogado, Cliente, Asunto},
})