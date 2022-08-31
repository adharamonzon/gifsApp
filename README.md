# Gif App 

App desarrollada con **Angular** y **TypeScript**

Para acceder al código debes en la consola poner el siguiente comando *git clone https://github.com/adharamonzon/gifsApp.git*, una vez clonado el repositorio hacer un *npm install* y una vez instalado podrás lanzar la aplicación en local con *ng serve*. 

Para realizar está aplicación estos son algunos de los temas de Angular y TypeScript que se han utilizado:

## Módulos
Implementación de módulos que controlan componentes, para tener una aplicación controlada con componentes pequeños y reutilizables.

## Interfaces
Se ha creado un archivo de interfaces, para tipar la información proveniente de la api. 

## Decoradores
Utilización de decoradores, para usar componentes **@Component**, para usar servicios **@injectable**, o acceder al HTML como **@ViewChild**. 

## Servicios
Creación de un servicio que se instancia una única vez y al que se puede acceder desde cualquier parte de la aplicación para consumir su información. 

## Api 
Se ha utilizado una Api de terceros para acceder a la información. Se ha refactorizado la URL con la que se realiza la llamada, para mejorar el desempeño y su mantenimiento.

## LocalStorage
Aplicación del localStorage para que se guarde la información almacenada y se pueda volver a ella al dejar registradas las búsquedas anteriores. 
