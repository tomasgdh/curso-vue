# Requisitos previos
1. Composer
2. PHP 8.1 o más
3. Motor DB (MySQL, MariaDB o PostgreSQL)

# Instalación

1. composer install
2. renombra .env.example a .env
3. crea una bbdd y cumplimenta sus variables en .env
4. php artisan migrate
5. levanta el servidor con php artisan serve


# Rutas

[POST] 127.0.0.1:8000/api/auth/register    -> Crear usuario por 
POST pasando en el body en json enviar name, email y password
{
  "name": "tomasgdh",
  "email":"test@test.com",
  "password":"12345678"
}

[POST] 127.0.0.1:8000/api/auth/login    -> Acceder con un usuario por POST pasando email y password
{
  "email":"test@test.com",
  "password":"12345678"
}
[GET] 127.0.0.1:8000/api/note          -> Leer notas del usuario 
autenticado
en el header agregar "Authoritation" y en value = "Bearer <token>"

[POST] 127.0.0.1:8000/api/note          -> Guardar nota del 
autenticado
en el header agregar "Authoritation" y en value = "Bearer <token>"
la no se carga en el body json ej:
{
  "content":"Esta es mi primera nota!!!"
}
