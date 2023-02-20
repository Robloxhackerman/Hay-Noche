
# Tickantel

---

## Introducción
Este script de Python utiliza Selenium para hacer un web scraping de la página web de Tickantel, con el fin de obtener imágenes de teatros. Las imágenes son guardadas en un directorio creado en la misma carpeta donde se encuentra el script.

---
## Requerimientos
- Python 3
- Selenium
- Google Chrome
- wget
- Instalación
- Instalar Python 3: https://www.python.org/downloads/
- Instalar Selenium: pip install selenium
- Descargar Google Chrome: https://www.google.com/chrome/
- Descargar y guardar el archivo chromedriver en la misma carpeta del script desde: https://sites.google.com/a/chromium.org/chromedriver/downloads
- Instalar wget: pip install wget
---
## Uso
Ejecutar el script bot.ipynb
Se abrirá una ventana de Chrome y se cargará la página web de Tickantel.
El script seleccionará el primer teatro en la lista, realizará un scroll hasta el final de la página, y obtendrá las URL de las imágenes de los teatros.
Las imágenes serán guardadas en un directorio llamado "Scrapeo", creado automáticamente en la misma carpeta del script.
---
# Notas
Si se desea cambiar el teatro a escrapear, se debe modificar el valor de la variable "teatro" en el script.
El número de imágenes que se obtienen puede variar según el teatro seleccionado.
Si ya existe un directorio con el nombre "Scrapeo", se producirá un error al crear uno nuevo. En este caso, se recomienda cambiar el nombre del directorio o borrarlo manualmente antes de ejecutar el script.
En este script en paython se hace un web scraping con python el cual ustiliza google chrome para entrar a Tickantel,
donde va a encontrar el elemento: teatros, mediante xpath, y le va a dar clickpara que entre a la seccion teatros.
En el siguiente paso se ejecuta un "scrlleo" para cargar todos los post de la seccion,
proximo a eso se hace una busqueda por el elemento: img , y se almacena su "src",elemento necesario para descargar la imagen.
Se crea una carpeta en una determinada direccion asignada y se comienza la descarga de las imagenes.
Para la implementancion de esta tecnologia se usa python 3.10.9, la libreria de selenium, wget que previamente deben estar instaladas en un entorno asignado por ejemplo: anaconda.

---
