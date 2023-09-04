DROP TABLE IF EXISTS usuarios; 
CREATE TABLE usuarios(
id_usuario serial NOT NULL,
cedula_identidad varchar(10),
nombre varchar(100) NOT NULL,
primer_apellido varchar(100) NOT NULL,
segundo_apellido varchar(100),
fecha_nacimiento date,
PRIMARY KEY(id_usuario) 
);

INSERT INTO usuarios(
cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_nacimiento)
VALUES ('3785072', 'Victor Hugo', 'Flores', 'Medrano', '01/01/2000');

INSERT INTO usuarios(
cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_nacimiento)
VALUES ('3589674', 'Sandro', 'Flores', 'Medrano', '03/01/1999');

INSERT INTO usuarios(
cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_nacimiento)
VALUES ('8889904', 'Juan', 'Perez', 'Perez', '10/10/1990');