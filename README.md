# curso-vue

# Conceptos:

# LAYOUTS, SLOTS Y COMPOSABLES

Conceptos Nuevos:

1. #LAYOUTS, SLOTS - Reusavilidad Declarativa:
   es quella que va destinada a mejorar y a reuttilizar de una forma mas eficiente todo lo que esta dentro de las etiquetas <Template>.

2. #COMPOSABLES - Reusavilidad Programatica:
   es aquella que esta enfocada principalmente a la mejora de la estructura <SCRIPT> de cada componente.

# Anotaciones para el deploy

0. Crear el build del Proyecto con <npm run build>
1. En la carpeta que queramos levantar el servidor:
   a. <npm install -g serve>
   b. <serve -s dist>
   c. El puerto predeterminado es 3000 en Vite, pero se puede ajustar usando las banderas -lo :--listen
   <serve -s build -l 4000>
