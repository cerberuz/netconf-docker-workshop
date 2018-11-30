# Ejercicio. Crear nu docker compose

Objetivo: crear un compose para desplegar una instancia de Drupal CMS

- Este directorio vacío es donde deberías crear un docker-compose.yml
- Usa la imagen `drupal` junto con la imagen` postgres`
- Establecer la versión a 2
- Use `ports` para exponer Drupal en 8080
- Asegúrese de configurar POSTGRES_PASSWORD en la imagen del postgres
- Camine a través de la configuración de Drupal en el navegador en http: // localhost: 8080
- Sugerencia: Drupal asume que DB es localhost, pero en realidad sera el hostname que se define en el compose
- Utilice la documentación de Docker Hub configurar correctamente el ambiente y los volumenes
- Crédito adicional: use volúmenes para almacenar datos únicos de Drupal