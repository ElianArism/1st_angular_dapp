# Conectarse a una TestNet local utilizando Reach :rocket:

## Que puede hacerse dentro de la app

- Conectarse a una wallet local de prueba
- Ingresarle fondos a la wallet
- Ser notificado de los cambios en la consola

## Requisitos para levantar proyecto en local

- [Instalar Reach y configurarlo](https://www.youtube.com/watch?v=wczwWvBdMTE)
- Instalar Docker (Se explica en la configuracion de Reach)
- Ubuntu Terminal for windows (Se explica en la configuracion de Reach)
- `npm i`

## Tener en cuenta los siguientes puntos

- Esta aplicacion es unicamente para probar la integracion de la criptomoneda Algo sin utilizar AlgoSigner
- Para poder correr correctamente este proyecto una vez configurado Reach debera ejecutar los siguientes comandos
 
  1. Dentro del proyecto `cd src/`
  2. en una terminal ubuntu WSL / WSL 2 (Puede abrirse desde VS Code) Ejecutar:
   `curl https://raw.githubusercontent.com/reach-sh/reach-lang/master/reach -o reach ; chmod +x reach`
  3. `REACH_CONNECTOR_MODE=ALGO ./reach devnet`
  4. Dejar corriendo el servidor
  5. En otra terminal dentro del proyecto `ng serve -o`
  6. Para mas informacion [Reach Docs](https://docs.reach.sh/tut-1.html)
 

## Importante

- Si ya levanto el proyecto en local una vez y quiere seguir estos pasos otra vez al pie de la letra recuerde tener
  docker abierto y eliminar el contenedor de Reach que creo antes de volver a correr los comandos mencionados
