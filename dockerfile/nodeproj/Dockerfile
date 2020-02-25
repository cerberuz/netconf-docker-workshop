#Usar una imagen para correr una servidor NodeJS
FROM node:4.6

#Definir /app como el workdir por defecto
WORKDIR /app

#Agregar el contenido del directorio actual en /app
ADD . /app

#Instalar todas las dependencias del proyecto
RUN npm install

#abrir el puerto 3000 para que este disponible fuera del container
EXPOSE 3000

#Iniciar el servidor node al desplegar el container
CMD npm start
