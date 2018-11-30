# Ejercicio. Crear nu docker compose

Objetivo: crear un compose para desplegar una instancia de la aplicacion NodeJS del ejemplo de Dockerfile con una conexion a base de datos Mysql



- Este directorio es donde deberías crear un docker-compose.yml

- Establecer la versión a 2

- Hacer build de la imagen de nodejs en el compose
- Modificar el comando de inicio de la imagen por defecto para que ejecute index-db.js

- usar `ports` para exponer nodejs en 3000

- Debe estar enlazado el container de node al de mysql

- El container deve tener las variables de entorno para conectar a al base de datos

- La imagen para Db debe ser `mariadb`

- El container del BD debe exponer el puerto 3306

- Validar en la documentacion las variables de ambiente necesarias para la conexion

