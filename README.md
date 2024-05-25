# Proyecto Hospital

## Realizado por:
- Juan Jose Vanegas Ospina
- Juan Miguel Soto Sanchez

# Descripcion

Este proyecto es una aplicación web para gestionar los empleados de un hospital, desarrollado con un backend en Python usando Django y un frontend en React. La base de datos se gestiona con XAMPP.

## Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- Python
- Django
- Node.js
- XAMPP (con Apache y MySQL)

## Instalación

### Backend

1. **Clonar el repositorio:**
    ```bash
    git clone https://github.com/JuanjoseVanegas/CS4
    cd CS4/
    ```

2. **Configurar la base de datos:**
    - Abre XAMPP y asegúrate de que Apache y MySQL estén encendidos.
    - Crea una base de datos llamada `hospital`.

3. **Aplicar las migraciones de la base de datos:**
    - Navega a la carpeta del backend:
    ```bash
    cd CS4/Django/Hospital
    ```
    - Ejecuta los siguientes comandos:
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

4. **Correr el servidor:**
    ```bash
    python manage.py runserver
    ```

### Frontend

1. **Instalar las dependencias de Node.js:**
    - Navega a la carpeta del frontend:
    ```bash
    cd CS4/FireBaseCS4
    ```

    - Verifica si la carpeta `node_modules` está presente. Si no es así, instálalas:
    ```bash
    npm install
    ```

2. **Correr el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

## Uso

Abre el navegador en la direccion que se esta corriendo el front y asegúrate de que el backend está corriendo en `http://127.0.0.1:8000`.

## Problemas Comunes

### Error de CORS

Si encuentras errores de CORS, actualiza el archivo `Django/Hospital/Hospital/settings.py`:

```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",  
]

Actualiza el puerto en la URL anterior al puerto en el que se este lanzando la APP de React