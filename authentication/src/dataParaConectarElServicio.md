https://api.escuelajs.co/api/v1/auth/login
email:john@mail.com
password: changeme

utilizamos para testear la conexion "Thunder Client" o Postman, en este caso usamos el pluging de VsCode  Thunder Client

1. # Login BackEnd:
y en la url como POST https://api.escuelajs.co/api/v1/auth/login

en el Body mandar un Json
{
  "email": "john@mail.com",
  "password": "changeme"
}

2. # Login FireBase:

datos:
{
  "email": "cursovuetest@test.com",
  "password": "12345678"
}

3. # Login Social: todo ataves de Firebase.