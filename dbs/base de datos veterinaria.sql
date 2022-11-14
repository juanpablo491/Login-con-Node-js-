create database dbveterinaria
create table usuarios(
idUsuario int identity primary key,
usuario varchar(20),
contraseña varchar(8)
)
create table mascotas(
idMacotas varchar(8) primary key, 
nomMascota varchar(20),
nomDueño varchar(40),
sexo varchar(10),
raza varchar(20),
fechanacim date
)

insert 