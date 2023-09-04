const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'vhfmadmin23',
    database: 'bdpruebas',
    port: '5432'
});

const crearUsuario = async (req, res) => {
    const { cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_nacimiento } = req.body;
    const response = await pool.query(
        'INSERT INTO usuarios(cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_nacimiento) VALUES ($1, $2, $3, $4, $5)', [cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_nacimiento]);
    res.json({
        message: 'Usuario Creado',
        body: {
            user: {cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_nacimiento}
        }
    })
};

const getUsuarios = async (req, res) => {
    const response = await pool.query('SELECT * FROM usuarios ORDER BY id_usuario');
    res.status(200).json(response.rows);
};

const getUsuariosId = async (req, res) => {
    const id = parseInt(req.params.id_usuario);
    const response = await pool.query('SELECT * FROM usuarios WHERE id_usuario = $1', [id]);
    res.json(response.rows);
};

const actualizarUsuario = async (req, res) => {
    const id = parseInt(req.params.id_usuario);
    const { cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_nacimiento } = req.body;
   
    const response =await pool.query('UPDATE usuarios SET cedula_identidad = $1, nombre = $2, primer_apellido = $3, segundo_apellido = $4, fecha_nacimiento = $5 WHERE id_usuario = $6', 
    [cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_nacimiento,id]);
    res.json('Usuario Actualizado');
};

const eliminarUsuario = async (req, res) => {
    const id = parseInt(req.params.id_usuario);
    await pool.query('DELETE FROM usuarios where id_usuario = $1', [id]);
    res.json(`Usuario ${id} Borrado`);
};

const promedioEdadUsuarios = async (req, res) => {
    const response = await pool.query('SELECT AVG(EXTRACT(YEAR FROM AGE(NOW(),fecha_nacimiento))) AS promedio_edades FROM usuarios');
    res.status(200).json(response);
};

const estado = {
    "nameSystem": "api-users",
    "version": "0.0.1",
    "developer":"Victor Hugo Flores Medrano",
    "email": "vhfloresmedrano@gmail.com"
}

const mostrarEstado = async (req, res) => {
    res.send(estado);
};

module.exports = {
    crearUsuario,
    getUsuarios,
    getUsuariosId,
    actualizarUsuario,
    eliminarUsuario,
    promedioEdadUsuarios,
    mostrarEstado
  };