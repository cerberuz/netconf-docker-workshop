# En este ejemplo veremos como extender una imagen a partir de una existente en el dockerhub

FROM nginx:latest
# Se recomienda como una buena practica siempre definir de manera explicita la version del la imagen a utilizar

WORKDIR /usr/share/nginx/html
# cambia el director de trabajo por defecto de root al nginx webhost
# se recomienda utilizar WORKDIR en lugar de 'RUN cd /some/path'

COPY index.html index.html

# No es necesario especificar EXPOSE o CMD porque ya estan definidos en la imagen base en el FROM
