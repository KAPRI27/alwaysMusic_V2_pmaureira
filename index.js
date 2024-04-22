// Importamos la librería de PostgreSQL
const { Pool } = require('pg');


// Función para conectarnos a la base de datos
const connection = async () => {
  // Creamos una instancia de la clase pool
//***CREAMOS EL OBJETO DE CONFIGURACIÓN***
const config = {
    host: 'localhost',
    database: 'always_music',
    user: 'pmaureira',
    password: 'M4ur3ir4!!Aa',
    port: 5432,
   }
//PASAMOS EL OBJETO AL CONSTRUCTOR DE LA CLASE POOL

const pool = new Pool(config );
  // Nos conectamos a la base de datos
  await pool.connect();
  console.log('Te has conectado exitosamente a la base de datos');

  //***PARA CORRER EL CODIGO HAY QUE DESCOMENTAR CADA INSTRUCCIÓN***/
  
//1. Hacer todas las consultas con un JSON como argumento del método query. (2 Puntos)

//2. Hacer las consultas con texto PARAMETRIZADO. (3 Puntos)
  
//3. Capturar los posibles errores en todas las consultas e imprimirlos por consola. (3 Puntos)
/*
try {
  // Realizamos una consulta a la base de datos que muestre MUESTRA LA TABLA alumnos
  const alumnos = await pool.query("SELECT * FROM alumnos");

  // Mostramos el resultado de la consulta
  console.log(JSON.stringify(alumnos.rows));

} catch (error){
  console.error('No se logró obtener la información', error);
}
  // Cerramos la conexión a la base de datos
  await pool.end();
*/
  
///*
try {
  // Realizamos una consulta a la base de datos que muestre la información del RUT '16.789.202-4' en este caso el alumno Sergio Mora
  const alumno_rut = await pool.query("SELECT * FROM alumnos WHERE rut = '16.789.202-4' ");
  // Mostramos el resultado de la consulta
  console.log(JSON.stringify(alumno_rut.rows));
} catch (error){
  console.error('No se logró obtener la información con ese RUT', error);
} // Cerramos la conexión a la base de datos
  await pool.end();
//*/

/*
try{
  // Realizamos una consulta a la base de datos EDITANDO un alumno 
  const editar_alumno = await pool.query("UPDATE alumnos SET curso ='Guitarra' WHERE curso='Guitarra y Bajo';");
  // Mostramos el resultado de la consulta
  console.log(editar_alumno.rows);
  const alumnos = await pool.query("SELECT * FROM alumnos");
  console.log(JSON.stringify(alumnos.rows));
}  catch (error){
  console.error('No se logró actualizar la información', error);
}
  // Cerramos la conexión a la base de datos
  await pool.end();
*/

/*
try {
//Realizamos la consulta a la base AGREGANDO un Alumno nuevo
  const agregar_alumno = await pool.query("INSERT INTO alumnos (nombre, rut, curso, nivel) VALUES ('Mercedes Gamboa', '12.587.039-7', 'Canto', 10);");
// Mostramos el resultado de la consulta
  console.log(JSON.stringify(alumnos.rows));
}  catch (error){
  console.error('No se pudo añadir al alumno', error);
}
// Cerramos la conexión a la base de datos
  await pool.end();
*/

/*
try{
// Realizamos una consulta a la base de datos BORRANDO a un alumno rut = '14.745.441-1'
  const eliminar_alumno = await pool.query("DELETE from alumnos WHERE rut ='14.745.441-1';");
// Mostramos la nueva tabla resultado de la consulta
}  catch (error){
  console.error('No se pudo eliminar el registro', error);
}  console.log(JSON.stringify(alumnos.rows));
// Cerramos la conexión a la base de datos
  await pool.end();
*/


};

// Llamamos a la función connection
connection();