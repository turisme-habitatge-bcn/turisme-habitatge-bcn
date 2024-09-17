# bcn-turisme-2024

Visualiza información cuantitativa sobre el turismo y la vivienda
en la ciudad de Barcelona, utilizando datos de 2024.

Información sobre usos turísticos de la vivienda en la ciudad de Barcelona.

Utiliza fuente de OpenDataBCN y otras fuentes de información pública.

Datos de julio de 2024.


FUENTES DE DATOS
============

Hotels
------

* **Fuente**: https://w121.bcn.cat/APPS/censactivitats/cceatDef.do?reqCode=search
* identificador: `hotels`
* **Capas**: se han unido las capas
  * "Hotel 1 estrella"
  * "Hotel 2 estrelles"
  * "Hotel 3 estrelles"
  * "Hotel 4 estrelles"
  * "Hotel 4 estrelles superior"
  * "Hotel 5 estrelles"
  * "Hotel gran luxe"

Hotels OpenData BCN
-------------------
* **Fuente**: El archivo `opendatabcn_allotjament_hotels-csv.csv` que se encuentra en https://opendata-ajuntament.barcelona.cat/data/es/dataset/allotjaments-hotels
* identificador: `hotels-opendata`

Hotel apartament
---------

* **Fuente**: https://w121.bcn.cat/APPS/censactivitats/cceatDef.do?reqCode=search
* **identificador**: `hotel-apartament`
* **Capas**:
  * Hotel-Apart 1 estrella
  * Hotel-Apart 2 estrelles
  * Hotel-Apart 3 estrelles
  * Hotel-Apart 4 estrelles
  * Hotel-Apart 4 estrelles superior
  * Hotel-Apartament
  * Hotel-Apartament gran luxe.

Altes allotjaments
------------------

* **Fuente**: El archivo `opendatabcn_allotjament_altres-allotjaments-csv` que se encuentra en
https://opendata-ajuntament.barcelona.cat/data/es/dataset/allotjaments-altres
* **identificador**: ´altres-allotjaments`

Pisos turístics
-----
* **Fuente**: https://opendata-ajuntament.barcelona.cat/data/es/dataset/habitatges-us-turistic
* **identificador**: `pisos-turistics`

Residències estudiants
--------------

En sòl de zona
*********

* **fuente**: https://w121.bcn.cat/APPS/censactivitats/cceatDef.do?reqCode=search capa
* **capa**: Residències estudiants en sòl de zona
* **identificador**: `residencies-estudiants-zona`

En sòl d'equipament
*********

* **fuente**: https://w121.bcn.cat/APPS/censactivitats/cceatDef.do?reqCode=search capa
* **capa**: Residències estudiants en sòl d'equipament
* **identificador**: `residencies-estudiants-equipament`

Open Data BCN ???
*********

* **fuente**: https://opendata-ajuntament.barcelona.cat/data/es/dataset/allotjaments-altres
* **capa**: opendatabcn_allotjament_altres-allotjaments-csv
* **identificador**: `residencies-estudiants-opendata`

Albergs juvenils
----------------
* **fuente**: https://opendata-ajuntament.barcelona.cat/data/es/dataset/allotjaments-altres
* **identificador**: `albergs-juvenils`
* **capas**: `opendatabcn_allotjament_altres-allotjaments-csv` (se ha extraido la capa) y **no se ha cruzado con Albergs** de https://w121.bcn.cat/APPS/censactivitats/cceatDef.do?reqCode=search para obtener las cantidades

Col·legis majors ??
----------------
* **fuente**: https://opendata-ajuntament.barcelona.cat/data/es/dataset/allotjaments-altres
* **identificador**: `collegis-majors`
* **capas**: `opendatabcn_allotjament_altres-allotjaments-csv` (se ha extraido la capa) y **no se ha cruzado con Albergs** de https://w121.bcn.cat/APPS/censactivitats/cceatDef.do?reqCode=search para obtener las cantidades

Apartaments ??
-----------
* **fuente**: https://opendata-ajuntament.barcelona.cat/data/es/dataset/allotjaments-altres
* **identificador**: `apartaments`
* **capas**: `opendatabcn_allotjament_altres-allotjaments-csv (se ha extraido la capa) y **no se ha cruzado con Albergs** de https://w121.bcn.cat/APPS/censactivitats/cceatDef.do?reqCode=search para obtener las cantidades

Pensions
--------
* **fuente**: https://opendata-ajuntament.barcelona.cat/data/es/dataset/allotjaments-pensions
* **identificador**: `pensions-opendata`

Pensions BCN
--------

* **fuente**: https://w121.bcn.cat/APPS/censactivitats/cceatDef.do?reqCode=search
* **identificador**:

Zones PEUAT
-----------

* **fuente**: https://opendata-ajuntament.barcelona.cat/data/es/dataset/mapa-peuat
* **identificador**: `mapa-peuat`

Usos 22@
--------

* **fuente**: https://w20.bcn.cat/cartobcn/
* **capas**: MAPA TEMÀTIC per ALÇADES i EDIFICACIÓ en format Geopackage
* **identificador**: `mapa22`

METODOLOGIA
===========

Se ha procesado los datos de las fuentes anteriores para crear las distintas capas del mapa. Para cada capa del mapa se indican los identificadores de las fuentes utilizadas así como el procesado realizado para obtener la capa mostrada.

Hotels
------

Se han unido las capas indicadas en la fuente de datos `hotels` y posteriormente se han cruzadocon los de `hotels-opendata`, utilizando el campo XX como campo clave para la fusion.

Hotel apartment
------

Se han unido las capas indicadas en la fuente de datos `hotel-apartament` y posteriormente se han cruzadocon los de `hotels-opendata`, utilizando el campo XX como campo clave para la fusion.

Pisos turistics
---------

Se ha utilizado la fuente de datos `pisos-turistics` sin procesar.

Residencies estudiants en sòl de zona
----------------------
Se ha utilizado la fuente de datos `residencies-estudiants-zona` sin procesar.

Residencies estudiants en sòl d'equipament
----------------------
Se ha utilizado la fuente de datos `residencies-estudiants-equipament` sin procesar.

Residencies estudiants Open Data BCN
----------------------
Se ha utilizado la fuente de datos `residencies-estudiants-opendata` sin procesar.

Albergs juvenils
----------------
Se ha utilizado la fuente de datos `albergs-juvenils` sin procesar.

Col·legis majors ??
----------------
Se ha utilizado la fuente de datos `collegis-majors` sin procesar.

Apartaments ??
-----------
Se ha utilizado la fuente de datos `apartaments` sin procesar.

Pensions
--------

Se ha utilizado la fuente de datos `pensions` y se han cruzado los datos con la capa `Pensió` de la fuente https://w121.bcn.cat/APPS/censactivitats/cceatDef.do?reqCode=search

Zones PEUAT
-----------
Se ha utilizado la fuente de datos `mapa-peuat` sin procesar.

Usos 22@
--------
Para las capas `Edificis 1_residencial`, `Edificis 3_industrial`, `Edificis 4_1_office`, `Edificis 4_2_retail`, `Edificis 4_3_publicServices` y `Sense dades` se han utilizado la fuente de datos `mapa22` y cruzado los datos de uso de suelo del catastro usando el plugin de qGIS: Spanish Inspire Catastral Downloader.

Perfil 22@
---------
* **fuente**: https://ajuntament.barcelona.cat/premsa/2023/03/21/el-22nord-atraura-inversions-en-base-als-sectors-tractors-de-leconomia-verda-i-circular-i-industries-creatives/ dibujo propio.

# Reconocimientos

Utilizamos herramientas Open Source:
* [qGIS](https://www.qgis.org)
* [qgis2web](https://plugins.qgis.org/plugins/qgis2web/)

# Contribuyendo

Por favor lee el [CONTRIBUTING.md](CONTRIBUTING.md) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

El proyecto está abierto a contribuciones. No dudes en hacer un _fork_ y proponer una mejora.

# Autores
* Orestes Sánchez [@miceno](https://github.com/miceno): mantenimiento y moderación.

# Licencia

Este proyecto está bajo la Licencia Creative Commons - mira el archivo [LICENSE.txt](LICENSE.txt) para detalles.
