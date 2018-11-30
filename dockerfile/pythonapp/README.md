# Usar el runtime oficial de Python 2.7 slim  como imagen padre
# Definir el working directory en /app
# Copiar el Contenido del directorio actual a /app
# instalar todos los paquetes especificados en el requirements.txt
# el Comando para instalar es "pip install --trusted-host pypi.python.org -r requirements.txt"
# hacer que el puerto 80 este disponible fuera del container
# Definir variable de entorno con el nombre del equipo
# ejecutar el archivo app.py cuando el container inicie
