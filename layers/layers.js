var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/#map=13/41.39439/2.10835">OSM</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_CartoPositron_1 = new ol.layer.Tile({
            'title': 'Carto - Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://carto.com/blog/getting-to-know-positron-and-dark-matter">Carto-Positron</a>',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Perfil22_2 = new ol.format.GeoJSON();
var features_Perfil22_2 = format_Perfil22_2.readFeatures(json_Perfil22_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perfil22_2 = new ol.source.Vector({
    attributions: ' &middot; <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fobservatorio.desarrolloeconomico.gov.co%2Fsites%2Fdefault%2Ffiles%2Ffiles_articles%2Felproyecto22barcelona.pdf&psig=AOvVaw0pD_ZP8_zF1ljMNUruBg0e&ust=1725559275348000&source=images&cd=vfe&opi=89978449&ved=0CBMQ3YkBahcKEwiojOb176mIAxUAAAAAHQAAAAAQBA">22@ Barcelona</a>',
});
jsonSource_Perfil22_2.addFeatures(features_Perfil22_2);
var lyr_Perfil22_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perfil22_2, 
                style: style_Perfil22_2,
                popuplayertitle: "Perfil 22@",
                interactive: false,
                title: '<img src="styles/legend/Perfil22_2.png" /> Perfil 22@'
            });
var format_Sensedades_3 = new ol.format.GeoJSON();
var features_Sensedades_3 = format_Sensedades_3.readFeatures(json_Sensedades_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sensedades_3 = new ol.source.Vector({
    attributions: ' &middot; <a href="https://w20.bcn.cat/cartobcn/">CartoBCN</a>',
});
jsonSource_Sensedades_3.addFeatures(features_Sensedades_3);
var lyr_Sensedades_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sensedades_3, 
                style: style_Sensedades_3,
                popuplayertitle: "Sense dades",
                interactive: true,
                title: '<img src="styles/legend/Sensedades_3.png" /> Sense dades'
            });
var format_Edificis4_3_publicServices_4 = new ol.format.GeoJSON();
var features_Edificis4_3_publicServices_4 = format_Edificis4_3_publicServices_4.readFeatures(json_Edificis4_3_publicServices_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificis4_3_publicServices_4 = new ol.source.Vector({
    attributions: ' &middot; <a href="https://w20.bcn.cat/cartobcn/">CartoBCN</a>',
});
jsonSource_Edificis4_3_publicServices_4.addFeatures(features_Edificis4_3_publicServices_4);
var lyr_Edificis4_3_publicServices_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edificis4_3_publicServices_4, 
                style: style_Edificis4_3_publicServices_4,
                popuplayertitle: "Edificis 4_3_publicServices",
                interactive: true,
                title: '<img src="styles/legend/Edificis4_3_publicServices_4.png" /> Edificis 4_3_publicServices'
            });
var format_Edificis4_2_retail_5 = new ol.format.GeoJSON();
var features_Edificis4_2_retail_5 = format_Edificis4_2_retail_5.readFeatures(json_Edificis4_2_retail_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificis4_2_retail_5 = new ol.source.Vector({
    attributions: ' &middot; <a href="https://w20.bcn.cat/cartobcn/">CartoBCN</a>',
});
jsonSource_Edificis4_2_retail_5.addFeatures(features_Edificis4_2_retail_5);
var lyr_Edificis4_2_retail_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edificis4_2_retail_5, 
                style: style_Edificis4_2_retail_5,
                popuplayertitle: "Edificis 4_2_retail",
                interactive: true,
                title: '<img src="styles/legend/Edificis4_2_retail_5.png" /> Edificis 4_2_retail'
            });
var format_Edificis4_1_office_6 = new ol.format.GeoJSON();
var features_Edificis4_1_office_6 = format_Edificis4_1_office_6.readFeatures(json_Edificis4_1_office_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificis4_1_office_6 = new ol.source.Vector({
    attributions: ' &middot; <a href="https://w20.bcn.cat/cartobcn/">CartoBCN</a>',
});
jsonSource_Edificis4_1_office_6.addFeatures(features_Edificis4_1_office_6);
var lyr_Edificis4_1_office_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edificis4_1_office_6, 
                style: style_Edificis4_1_office_6,
                popuplayertitle: "Edificis 4_1_office",
                interactive: true,
                title: '<img src="styles/legend/Edificis4_1_office_6.png" /> Edificis 4_1_office'
            });
var format_Edificis3_industrial_7 = new ol.format.GeoJSON();
var features_Edificis3_industrial_7 = format_Edificis3_industrial_7.readFeatures(json_Edificis3_industrial_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificis3_industrial_7 = new ol.source.Vector({
    attributions: ' &middot; <a href="https://w20.bcn.cat/cartobcn/">CartoBCN</a>',
});
jsonSource_Edificis3_industrial_7.addFeatures(features_Edificis3_industrial_7);
var lyr_Edificis3_industrial_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edificis3_industrial_7, 
                style: style_Edificis3_industrial_7,
                popuplayertitle: "Edificis 3_industrial",
                interactive: true,
                title: '<img src="styles/legend/Edificis3_industrial_7.png" /> Edificis 3_industrial'
            });
var format_Edificis1_residencial_8 = new ol.format.GeoJSON();
var features_Edificis1_residencial_8 = format_Edificis1_residencial_8.readFeatures(json_Edificis1_residencial_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificis1_residencial_8 = new ol.source.Vector({
    attributions: ' &middot; <a href="https://w20.bcn.cat/cartobcn/">CartoBCN</a>',
});
jsonSource_Edificis1_residencial_8.addFeatures(features_Edificis1_residencial_8);
var lyr_Edificis1_residencial_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edificis1_residencial_8, 
                style: style_Edificis1_residencial_8,
                popuplayertitle: "Edificis 1_residencial",
                interactive: true,
                title: '<img src="styles/legend/Edificis1_residencial_8.png" /> Edificis 1_residencial'
            });
var format_ZonesPEUAT_9 = new ol.format.GeoJSON();
var features_ZonesPEUAT_9 = format_ZonesPEUAT_9.readFeatures(json_ZonesPEUAT_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonesPEUAT_9 = new ol.source.Vector({
    attributions: ' &middot; <a href="https://ajuntament.barcelona.cat/pla-allotjaments-turistics/ca">PEUAT</a>',
});
jsonSource_ZonesPEUAT_9.addFeatures(features_ZonesPEUAT_9);
var lyr_ZonesPEUAT_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonesPEUAT_9, 
                style: style_ZonesPEUAT_9,
                popuplayertitle: "Zones PEUAT",
                interactive: true,
    title: 'Zones PEUAT<br />\
    <img src="styles/legend/ZonesPEUAT_9_0.png" /> ZONA EXCLOSA<br />\
    <img src="styles/legend/ZonesPEUAT_9_1.png" /> ZONA DE DECREIXEMENT NATURAL<br />\
    <img src="styles/legend/ZonesPEUAT_9_2.png" /> ZONA DE MANTENIMENT GENERAL<br />\
    <img src="styles/legend/ZonesPEUAT_9_3.png" /> ZONA DE CREIXEMENT CONTINGUT<br />\
    <img src="styles/legend/ZonesPEUAT_9_4.png" /> FINS QUE ES QUEIXIN<br />'
        });
var format_Pensions_10 = new ol.format.GeoJSON();
var features_Pensions_10 = format_Pensions_10.readFeatures(json_Pensions_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pensions_10 = new ol.source.Vector({
    attributions: ' &middot; <a href="https://opendata-ajuntament.barcelona.cat/es">Open Data BCN</a>',
});
jsonSource_Pensions_10.addFeatures(features_Pensions_10);
var lyr_Pensions_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pensions_10, 
                style: style_Pensions_10,
                popuplayertitle: "Pensions",
                interactive: true,
                title: '<img src="styles/legend/Pensions_10.png" /> Pensions'
            });
var format_Apartaments_11 = new ol.format.GeoJSON();
var features_Apartaments_11 = format_Apartaments_11.readFeatures(json_Apartaments_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Apartaments_11 = new ol.source.Vector({
    attributions: ' &middot; <a href="https://opendata-ajuntament.barcelona.cat/es">Open Data BCN</a>',
});
jsonSource_Apartaments_11.addFeatures(features_Apartaments_11);
var lyr_Apartaments_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Apartaments_11, 
                style: style_Apartaments_11,
                popuplayertitle: "Apartaments",
                interactive: true,
                title: '<img src="styles/legend/Apartaments_11.png" /> Apartaments'
            });
var format_Collegismajors_12 = new ol.format.GeoJSON();
var features_Collegismajors_12 = format_Collegismajors_12.readFeatures(json_Collegismajors_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Collegismajors_12 = new ol.source.Vector({
    attributions: ' &middot; <a href="https://opendata-ajuntament.barcelona.cat/es">Open Data BCN</a>',
});
jsonSource_Collegismajors_12.addFeatures(features_Collegismajors_12);
var lyr_Collegismajors_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Collegismajors_12, 
                style: style_Collegismajors_12,
                popuplayertitle: "Col·legis majors",
                interactive: true,
                title: '<img src="styles/legend/Collegismajors_12.png" /> Col·legis majors'
            });
var format_Albergsjuvenils_13 = new ol.format.GeoJSON();
var features_Albergsjuvenils_13 = format_Albergsjuvenils_13.readFeatures(json_Albergsjuvenils_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Albergsjuvenils_13 = new ol.source.Vector({
    attributions: ' &middot; <a href="https://opendata-ajuntament.barcelona.cat/es">Open Data BCN</a>',
});
jsonSource_Albergsjuvenils_13.addFeatures(features_Albergsjuvenils_13);
var lyr_Albergsjuvenils_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Albergsjuvenils_13, 
                style: style_Albergsjuvenils_13,
                popuplayertitle: "Albergs juvenils",
                interactive: true,
                title: '<img src="styles/legend/Albergsjuvenils_13.png" /> Albergs juvenils'
            });
var format_OpenDataBCN_14 = new ol.format.GeoJSON();
var features_OpenDataBCN_14 = format_OpenDataBCN_14.readFeatures(json_OpenDataBCN_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OpenDataBCN_14 = new ol.source.Vector({
    attributions: ' &middot; <a href="https://opendata-ajuntament.barcelona.cat/es">Open Data BCN</a>',
});
jsonSource_OpenDataBCN_14.addFeatures(features_OpenDataBCN_14);
var lyr_OpenDataBCN_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OpenDataBCN_14, 
                style: style_OpenDataBCN_14,
                popuplayertitle: "Open Data BCN",
                interactive: true,
                title: '<img src="styles/legend/OpenDataBCN_14.png" /> Open Data BCN'
            });
var format_Ensldequipament_15 = new ol.format.GeoJSON();
var features_Ensldequipament_15 = format_Ensldequipament_15.readFeatures(json_Ensldequipament_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ensldequipament_15 = new ol.source.Vector({
    attributions: ' &middot; <a href="https://ajuntament.barcelona.cat/pla-allotjaments-turistics/ca">PEUAT</a>',
});
jsonSource_Ensldequipament_15.addFeatures(features_Ensldequipament_15);
var lyr_Ensldequipament_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ensldequipament_15, 
                style: style_Ensldequipament_15,
                popuplayertitle: "En sòl d'equipament",
                interactive: true,
                title: '<img src="styles/legend/Ensldequipament_15.png" /> En sòl d\'equipament'
            });
var format_Ensldezona_16 = new ol.format.GeoJSON();
var features_Ensldezona_16 = format_Ensldezona_16.readFeatures(json_Ensldezona_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ensldezona_16 = new ol.source.Vector({
    attributions: ' &middot; <a href="https://ajuntament.barcelona.cat/pla-allotjaments-turistics/ca">PEUAT</a>',
});
jsonSource_Ensldezona_16.addFeatures(features_Ensldezona_16);
var lyr_Ensldezona_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ensldezona_16, 
                style: style_Ensldezona_16,
                popuplayertitle: "En sòl de zona",
                interactive: true,
                title: '<img src="styles/legend/Ensldezona_16.png" /> En sòl de zona'
            });
var format_Pisosturstics_17 = new ol.format.GeoJSON();
var features_Pisosturstics_17 = format_Pisosturstics_17.readFeatures(json_Pisosturstics_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pisosturstics_17 = new ol.source.Vector({
    attributions: ' &middot; <a href="https://opendata-ajuntament.barcelona.cat/es">Open Data BCN</a>',
});
jsonSource_Pisosturstics_17.addFeatures(features_Pisosturstics_17);cluster_Pisosturstics_17 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Pisosturstics_17
});
var lyr_Pisosturstics_17 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Pisosturstics_17, 
                style: style_Pisosturstics_17,
                popuplayertitle: "Pisos turístics",
                interactive: true,
                title: '<img src="styles/legend/Pisosturstics_17.png" /> Pisos turístics'
            });
var format_Hotelapartament_18 = new ol.format.GeoJSON();
var features_Hotelapartament_18 = format_Hotelapartament_18.readFeatures(json_Hotelapartament_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotelapartament_18 = new ol.source.Vector({
    attributions: ' &middot; <a href="https://opendata-ajuntament.barcelona.cat/es">Open Data BCN</a>',
});
jsonSource_Hotelapartament_18.addFeatures(features_Hotelapartament_18);
var lyr_Hotelapartament_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hotelapartament_18, 
                style: style_Hotelapartament_18,
                popuplayertitle: "Hotel apartament",
                interactive: true,
                title: '<img src="styles/legend/Hotelapartament_18.png" /> Hotel apartament'
            });
var format_Hotels_19 = new ol.format.GeoJSON();
var features_Hotels_19 = format_Hotels_19.readFeatures(json_Hotels_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotels_19 = new ol.source.Vector({
    attributions: ' &middot; <a href="https://opendata-ajuntament.barcelona.cat/es">Open Data BCN</a>',
});
jsonSource_Hotels_19.addFeatures(features_Hotels_19);
var lyr_Hotels_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hotels_19, 
                style: style_Hotels_19,
                popuplayertitle: "Hotels",
                interactive: true,
                title: '<img src="styles/legend/Hotels_19.png" /> Hotels'
            });
var group_HotelsApartamentsPisos = new ol.layer.Group({
                                layers: [lyr_Pisosturstics_17,lyr_Hotelapartament_18,lyr_Hotels_19,],
                                fold: "open",
                                title: "Hotels-Apartaments-Pisos"});
var group_Residnciesestudiants = new ol.layer.Group({
                                layers: [lyr_OpenDataBCN_14,lyr_Ensldequipament_15,lyr_Ensldezona_16,],
                                fold: "close",
                                title: "Residències estudiants"});
var group_Otros = new ol.layer.Group({
                                layers: [lyr_Pensions_10,lyr_Apartaments_11,lyr_Collegismajors_12,lyr_Albergsjuvenils_13,],
                                fold: "close",
                                title: "Otros"});
var group_Usos22 = new ol.layer.Group({
                                layers: [lyr_Perfil22_2,lyr_Sensedades_3,lyr_Edificis4_3_publicServices_4,lyr_Edificis4_2_retail_5,lyr_Edificis4_1_office_6,lyr_Edificis3_industrial_7,lyr_Edificis1_residencial_8,],
                                fold: "close",
                                title: "Usos 22@"});

lyr_OpenStreetMap_0.setVisible(false);lyr_CartoPositron_1.setVisible(true);lyr_Perfil22_2.setVisible(false);lyr_Sensedades_3.setVisible(false);lyr_Edificis4_3_publicServices_4.setVisible(false);lyr_Edificis4_2_retail_5.setVisible(false);lyr_Edificis4_1_office_6.setVisible(false);lyr_Edificis3_industrial_7.setVisible(false);lyr_Edificis1_residencial_8.setVisible(false);lyr_ZonesPEUAT_9.setVisible(false);lyr_Pensions_10.setVisible(false);lyr_Apartaments_11.setVisible(false);lyr_Collegismajors_12.setVisible(false);lyr_Albergsjuvenils_13.setVisible(false);lyr_OpenDataBCN_14.setVisible(false);lyr_Ensldequipament_15.setVisible(false);lyr_Ensldezona_16.setVisible(false);lyr_Pisosturstics_17.setVisible(false);lyr_Hotelapartament_18.setVisible(false);lyr_Hotels_19.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CartoPositron_1,group_Usos22,lyr_ZonesPEUAT_9,group_Otros,group_Residnciesestudiants,group_HotelsApartamentsPisos];
lyr_Perfil22_2.set('fieldAliases', {'id': 'id', 'Seccion': 'Seccion', });
lyr_Sensedades_3.set('fieldAliases', {'fid': 'fid', 'NIVELL': 'NIVELL', 'AREA': 'AREA', 'PERIMETRE': 'PERIMETRE', 'DISTRICTE': 'DISTRICTE', 'BARRI': 'BARRI', 'Z_MIN_VOL': 'Z_MIN_VOL', 'Z_MAX_VOL': 'Z_MAX_VOL', 'beginn': 'beginn', 'end': 'end', 'localI': 'localI', 'value': 'value', 'value_m': 'value_m', 'U_currentU': 'U_currentU', 'U_numberOf': 'U_numberOf', 'U_number_1': 'U_number_1', 'U_number_2': 'U_number_2', 'U_value': 'U_value', 'U_value_uo': 'U_value_uo', });
lyr_Edificis4_3_publicServices_4.set('fieldAliases', {'fid': 'fid', 'NIVELL': 'NIVELL', 'AREA': 'AREA', 'PERIMETRE': 'PERIMETRE', 'DISTRICTE': 'DISTRICTE', 'BARRI': 'BARRI', 'Z_MIN_VOL': 'Z_MIN_VOL', 'Z_MAX_VOL': 'Z_MAX_VOL', 'beginn': 'beginn', 'end': 'end', 'localI': 'localI', 'value': 'value', 'value_m': 'value_m', 'U_currentU': 'U_currentU', 'U_numberOf': 'U_numberOf', 'U_number_1': 'U_number_1', 'U_number_2': 'U_number_2', 'U_value': 'U_value', 'U_value_uo': 'U_value_uo', });
lyr_Edificis4_2_retail_5.set('fieldAliases', {'fid': 'fid', 'NIVELL': 'NIVELL', 'AREA': 'AREA', 'PERIMETRE': 'PERIMETRE', 'DISTRICTE': 'DISTRICTE', 'BARRI': 'BARRI', 'Z_MIN_VOL': 'Z_MIN_VOL', 'Z_MAX_VOL': 'Z_MAX_VOL', 'beginn': 'beginn', 'end': 'end', 'localI': 'localI', 'value': 'value', 'value_m': 'value_m', 'U_currentU': 'U_currentU', 'U_numberOf': 'U_numberOf', 'U_number_1': 'U_number_1', 'U_number_2': 'U_number_2', 'U_value': 'U_value', 'U_value_uo': 'U_value_uo', });
lyr_Edificis4_1_office_6.set('fieldAliases', {'fid': 'fid', 'NIVELL': 'NIVELL', 'AREA': 'AREA', 'PERIMETRE': 'PERIMETRE', 'DISTRICTE': 'DISTRICTE', 'BARRI': 'BARRI', 'Z_MIN_VOL': 'Z_MIN_VOL', 'Z_MAX_VOL': 'Z_MAX_VOL', 'beginn': 'beginn', 'end': 'end', 'localI': 'localI', 'value': 'value', 'value_m': 'value_m', 'U_currentU': 'U_currentU', 'U_numberOf': 'U_numberOf', 'U_number_1': 'U_number_1', 'U_number_2': 'U_number_2', 'U_value': 'U_value', 'U_value_uo': 'U_value_uo', });
lyr_Edificis3_industrial_7.set('fieldAliases', {'fid': 'fid', 'NIVELL': 'NIVELL', 'AREA': 'AREA', 'PERIMETRE': 'PERIMETRE', 'DISTRICTE': 'DISTRICTE', 'BARRI': 'BARRI', 'Z_MIN_VOL': 'Z_MIN_VOL', 'Z_MAX_VOL': 'Z_MAX_VOL', 'beginn': 'beginn', 'end': 'end', 'localI': 'localI', 'value': 'value', 'value_m': 'value_m', 'U_currentU': 'U_currentU', 'U_numberOf': 'U_numberOf', 'U_number_1': 'U_number_1', 'U_number_2': 'U_number_2', 'U_value': 'U_value', 'U_value_uo': 'U_value_uo', });
lyr_Edificis1_residencial_8.set('fieldAliases', {'fid': 'fid', 'NIVELL': 'NIVELL', 'AREA': 'AREA', 'PERIMETRE': 'PERIMETRE', 'DISTRICTE': 'DISTRICTE', 'BARRI': 'BARRI', 'Z_MIN_VOL': 'Z_MIN_VOL', 'Z_MAX_VOL': 'Z_MAX_VOL', 'beginn': 'beginn', 'end': 'end', 'localI': 'localI', 'value': 'value', 'value_m': 'value_m', 'U_currentU': 'U_currentU', 'U_numberOf': 'U_numberOf', 'U_number_1': 'U_number_1', 'U_number_2': 'U_number_2', 'U_value': 'U_value', 'U_value_uo': 'U_value_uo', });
lyr_ZonesPEUAT_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ZE': 'ZE', 'AREA': 'AREA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Descripcio': 'Descripcio', 'tipo': 'tipo', });
lyr_Pensions_10.set('fieldAliases', {'register_i': 'register_i', 'name': 'Nombre', 'created': 'created', 'modified': 'modified', 'addresse_3': 'Dirección', 'addresse_4': 'Número', 'addresse_7': 'addresse_7', 'secondar_1': 'secondar_1', 'rtc': 'RTC', 'Num_Exp': 'Nº. Expediente', 'Num_plazas': 'Nº. de plazas', });
lyr_Apartaments_11.set('fieldAliases', {'register_i': 'Registro', 'name': 'Nombre', 'created': 'Creado', 'modified': 'Modificado', 'addresse_2': 'addresse_2', 'addresse_3': 'Dirección', 'addresse_4': 'Número', 'addresse_5': 'addresse_5', 'addresse_6': 'addresse_6', 'secondar_1': 'Descripción', });
lyr_Collegismajors_12.set('fieldAliases', {'register_i': 'Registro', 'name': 'Nombre', 'created': 'Creado', 'modified': 'Modificado', 'addresse_2': 'addresse_2', 'addresse_3': 'Dirección', 'addresse_4': 'Número', 'addresse_5': 'addresse_5', 'addresse_6': 'addresse_6', 'secondar_1': 'Descripción', });
lyr_Albergsjuvenils_13.set('fieldAliases', {'register_i': 'Registro', 'name': 'Nombre', 'created': 'Creado', 'modified': 'Modificado', 'addresse_3': 'Dirección', 'addresse_4': 'Número', 'secondar_1': 'Descripción', });
lyr_OpenDataBCN_14.set('fieldAliases', {'register_i': 'Registro', 'name': 'Nombre', 'created': 'Creado', 'modified': 'Modificado', 'addresse_2': 'addresse_2', 'addresse_3': 'Dirección', 'addresse_4': 'Número', 'addresse_5': 'addresse_5', 'addresse_6': 'addresse_6', 'secondar_1': 'Descripción', });
lyr_Ensldequipament_15.set('fieldAliases', {'Expedient': 'Expedient', 'RTC': 'RTC', 'categoria': 'categoria', 'Emplaçament': 'Emplaçament', 'Tipus_carrer': 'Tipus_carrer', 'Carrer': 'Carrer', 'Primer_numero': 'Primer_numero', 'Primera_lletra': 'Primera_lletra', 'Segon_numero': 'Segon_numero', 'Segona_lletra': 'Segona_lletra', 'Bloc': 'Bloc', 'Portal': 'Portal', 'Escala': 'Escala', 'Pis': 'Pis', 'Porta': 'Porta', 'Barri': 'Barri', 'Districte': 'Districte', 'Zona': 'Zona', 'zona_1': 'zona_1', 'Num_places': 'Núm places', 'Superficie': 'Superficie', 'X': 'X', 'Y': 'Y', 'X1': 'X1', 'Y1': 'Y1', });
lyr_Ensldezona_16.set('fieldAliases', {'Núm. Expedient': 'Núm. Expedient', 'RTC': 'RTC', 'Descripció categoria': 'Descripció categoria', 'Emplaçament': 'Emplaçament', 'Tipus carrer': 'Tipus carrer', 'Carrer': 'Carrer', 'Primer número': 'Primer número', 'Primera lletra': 'Primera lletra', 'Segon número': 'Segon número', 'Segona lletra': 'Segona lletra', 'Bloc': 'Bloc', 'Portal': 'Portal', 'Escala': 'Escala', 'Pis': 'Pis', 'Porta': 'Porta', 'Barri': 'Barri', 'Districte': 'Districte', 'Zona': 'Zona', 'Descripció zona': 'Descripció zona', 'Núm. places allotjament turístic': 'Núm. places', 'Superfície de sòl': 'Superfície de sòl', 'X': 'X', 'Y': 'Y', });
lyr_Pisosturstics_17.set('fieldAliases', {'N_EXPEDIEN': 'Nº expedient', 'NOM_BARRI': 'Barri', 'TIPUS_CARR': 'Tipus carrer', 'CARRER': 'Carrer', 'TIPUS_NUM': 'TIPUS_NUM', 'NUM1': 'Num 1', 'LLETRA1': 'Lletra 1', 'NUM2': 'Num 2', 'LLETRA2': 'Lletra 2', 'BLOC': 'Bloc', 'PORTAL': 'Portal', 'ESCALA': 'Escala', 'PIS': 'Pis', 'PORTA': 'Porta', 'NUMERO_REG': 'Num registre', 'NUMERO_PLA': 'Nº. de Places', });
lyr_Hotelapartament_18.set('fieldAliases', {'register_i': 'register_i', 'name': 'Nombre', 'created': 'created', 'modified': 'modified', 'B_Núm. Ex': 'Nº. Expediente', 'B_RTC': 'RTC', 'B_Descripc': 'Descripción', 'B_Emplaça': 'Direccuón', 'B_Tipus ca': 'B_Tipus ca', 'B_Carrer': 'B_Carrer', 'Primer_num': 'Número', 'Zona': 'Zona', 'Descri_1': 'Notas zona', 'Num_plazas': 'Nº. de plazas', });
lyr_Hotels_19.set('fieldAliases', {'register_i': 'register_i', 'name': 'Nombre', 'created': 'created', 'modified': 'modified', 'addresse_3': 'Dirección', 'addresse_4': 'Número', 'addresse_7': 'addresse_7', 'secondar_1': 'secondar_1', 'rtc': 'RTC', 'U_Núm. Ex': 'Nº. Expediente', 'U_Descripc': 'Descripción', 'U_Zona': 'Zona', 'U_Descri_1': 'Notas zona', 'numeroplaz': 'Nº. de plazas', });
lyr_Perfil22_2.set('fieldImages', {'id': 'TextEdit', 'Seccion': 'TextEdit', });
lyr_Sensedades_3.set('fieldImages', {'fid': 'TextEdit', 'NIVELL': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETRE': 'TextEdit', 'DISTRICTE': 'TextEdit', 'BARRI': 'TextEdit', 'Z_MIN_VOL': 'TextEdit', 'Z_MAX_VOL': 'TextEdit', 'beginn': 'TextEdit', 'end': 'TextEdit', 'localI': 'TextEdit', 'value': 'TextEdit', 'value_m': 'TextEdit', 'U_currentU': 'TextEdit', 'U_numberOf': 'TextEdit', 'U_number_1': 'TextEdit', 'U_number_2': 'TextEdit', 'U_value': 'TextEdit', 'U_value_uo': 'TextEdit', });
lyr_Edificis4_3_publicServices_4.set('fieldImages', {'fid': 'TextEdit', 'NIVELL': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETRE': 'TextEdit', 'DISTRICTE': 'TextEdit', 'BARRI': 'TextEdit', 'Z_MIN_VOL': 'TextEdit', 'Z_MAX_VOL': 'TextEdit', 'beginn': 'TextEdit', 'end': 'TextEdit', 'localI': 'TextEdit', 'value': 'TextEdit', 'value_m': 'TextEdit', 'U_currentU': 'TextEdit', 'U_numberOf': 'TextEdit', 'U_number_1': 'TextEdit', 'U_number_2': 'TextEdit', 'U_value': 'TextEdit', 'U_value_uo': 'TextEdit', });
lyr_Edificis4_2_retail_5.set('fieldImages', {'fid': 'TextEdit', 'NIVELL': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETRE': 'TextEdit', 'DISTRICTE': 'TextEdit', 'BARRI': 'TextEdit', 'Z_MIN_VOL': 'TextEdit', 'Z_MAX_VOL': 'TextEdit', 'beginn': 'TextEdit', 'end': 'TextEdit', 'localI': 'TextEdit', 'value': 'TextEdit', 'value_m': 'TextEdit', 'U_currentU': 'TextEdit', 'U_numberOf': 'TextEdit', 'U_number_1': 'TextEdit', 'U_number_2': 'TextEdit', 'U_value': 'TextEdit', 'U_value_uo': 'TextEdit', });
lyr_Edificis4_1_office_6.set('fieldImages', {'fid': 'TextEdit', 'NIVELL': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETRE': 'TextEdit', 'DISTRICTE': 'TextEdit', 'BARRI': 'TextEdit', 'Z_MIN_VOL': 'TextEdit', 'Z_MAX_VOL': 'TextEdit', 'beginn': 'TextEdit', 'end': 'TextEdit', 'localI': 'TextEdit', 'value': 'TextEdit', 'value_m': 'TextEdit', 'U_currentU': 'TextEdit', 'U_numberOf': 'TextEdit', 'U_number_1': 'TextEdit', 'U_number_2': 'TextEdit', 'U_value': 'TextEdit', 'U_value_uo': 'TextEdit', });
lyr_Edificis3_industrial_7.set('fieldImages', {'fid': 'TextEdit', 'NIVELL': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETRE': 'TextEdit', 'DISTRICTE': 'TextEdit', 'BARRI': 'TextEdit', 'Z_MIN_VOL': 'TextEdit', 'Z_MAX_VOL': 'TextEdit', 'beginn': 'TextEdit', 'end': 'TextEdit', 'localI': 'TextEdit', 'value': 'TextEdit', 'value_m': 'TextEdit', 'U_currentU': 'TextEdit', 'U_numberOf': 'TextEdit', 'U_number_1': 'TextEdit', 'U_number_2': 'TextEdit', 'U_value': 'TextEdit', 'U_value_uo': 'TextEdit', });
lyr_Edificis1_residencial_8.set('fieldImages', {'fid': 'TextEdit', 'NIVELL': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETRE': 'TextEdit', 'DISTRICTE': 'TextEdit', 'BARRI': 'TextEdit', 'Z_MIN_VOL': 'TextEdit', 'Z_MAX_VOL': 'TextEdit', 'beginn': 'TextEdit', 'end': 'TextEdit', 'localI': 'TextEdit', 'value': 'TextEdit', 'value_m': 'TextEdit', 'U_currentU': 'TextEdit', 'U_numberOf': 'TextEdit', 'U_number_1': 'TextEdit', 'U_number_2': 'TextEdit', 'U_value': 'TextEdit', 'U_value_uo': 'TextEdit', });
lyr_ZonesPEUAT_9.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ZE': 'TextEdit', 'AREA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Descripcio': 'TextEdit', 'tipo': 'Range', });
lyr_Pensions_10.set('fieldImages', {'register_i': 'Hidden', 'name': 'TextEdit', 'created': 'Hidden', 'modified': 'Hidden', 'addresse_3': 'TextEdit', 'addresse_4': 'TextEdit', 'addresse_7': 'Hidden', 'secondar_1': 'Hidden', 'rtc': 'TextEdit', 'Num_Exp': 'TextEdit', 'Num_plazas': 'TextEdit', });
lyr_Apartaments_11.set('fieldImages', {'register_i': 'TextEdit', 'name': 'TextEdit', 'created': 'TextEdit', 'modified': 'TextEdit', 'addresse_2': 'TextEdit', 'addresse_3': 'TextEdit', 'addresse_4': 'TextEdit', 'addresse_5': 'TextEdit', 'addresse_6': 'TextEdit', 'secondar_1': 'TextEdit', });
lyr_Collegismajors_12.set('fieldImages', {'register_i': 'TextEdit', 'name': 'TextEdit', 'created': 'TextEdit', 'modified': 'TextEdit', 'addresse_2': 'TextEdit', 'addresse_3': 'TextEdit', 'addresse_4': 'TextEdit', 'addresse_5': 'TextEdit', 'addresse_6': 'TextEdit', 'secondar_1': 'TextEdit', });
lyr_Albergsjuvenils_13.set('fieldImages', {'register_i': 'TextEdit', 'name': 'TextEdit', 'created': 'TextEdit', 'modified': 'TextEdit', 'addresse_3': 'TextEdit', 'addresse_4': 'TextEdit', 'secondar_1': 'TextEdit', });
lyr_OpenDataBCN_14.set('fieldImages', {'register_i': 'TextEdit', 'name': 'TextEdit', 'created': 'TextEdit', 'modified': 'TextEdit', 'addresse_2': 'TextEdit', 'addresse_3': 'TextEdit', 'addresse_4': 'TextEdit', 'addresse_5': 'TextEdit', 'addresse_6': 'TextEdit', 'secondar_1': 'TextEdit', });
lyr_Ensldequipament_15.set('fieldImages', {'Expedient': 'TextEdit', 'RTC': 'Hidden', 'categoria': 'Hidden', 'Emplaçament': 'TextEdit', 'Tipus_carrer': 'Hidden', 'Carrer': 'Hidden', 'Primer_numero': 'Hidden', 'Primera_lletra': 'Hidden', 'Segon_numero': 'Hidden', 'Segona_lletra': 'Hidden', 'Bloc': 'Hidden', 'Portal': 'Hidden', 'Escala': 'Hidden', 'Pis': 'Hidden', 'Porta': 'Hidden', 'Barri': 'Hidden', 'Districte': 'Hidden', 'Zona': 'TextEdit', 'zona_1': 'TextEdit', 'Num_places': 'Range', 'Superficie': 'Range', 'X': 'Hidden', 'Y': 'Hidden', 'X1': 'Hidden', 'Y1': 'Hidden', });
lyr_Ensldezona_16.set('fieldImages', {'Núm. Expedient': 'TextEdit', 'RTC': 'Hidden', 'Descripció categoria': 'Hidden', 'Emplaçament': 'TextEdit', 'Tipus carrer': 'Hidden', 'Carrer': 'Hidden', 'Primer número': 'Hidden', 'Primera lletra': 'Hidden', 'Segon número': 'Hidden', 'Segona lletra': 'Hidden', 'Bloc': 'Hidden', 'Portal': 'Hidden', 'Escala': 'Hidden', 'Pis': 'Hidden', 'Porta': 'Hidden', 'Barri': 'Hidden', 'Districte': 'Hidden', 'Zona': 'TextEdit', 'Descripció zona': 'TextEdit', 'Núm. places allotjament turístic': 'Range', 'Superfície de sòl': 'TextEdit', 'X': 'Hidden', 'Y': 'Hidden', });
lyr_Pisosturstics_17.set('fieldImages', {'N_EXPEDIEN': 'TextEdit', 'NOM_BARRI': 'Hidden', 'TIPUS_CARR': 'Hidden', 'CARRER': 'TextEdit', 'TIPUS_NUM': 'Hidden', 'NUM1': 'TextEdit', 'LLETRA1': 'TextEdit', 'NUM2': 'TextEdit', 'LLETRA2': 'TextEdit', 'BLOC': 'TextEdit', 'PORTAL': 'TextEdit', 'ESCALA': 'TextEdit', 'PIS': 'TextEdit', 'PORTA': 'TextEdit', 'NUMERO_REG': 'TextEdit', 'NUMERO_PLA': 'TextEdit', });
lyr_Hotelapartament_18.set('fieldImages', {'register_i': 'Hidden', 'name': 'TextEdit', 'created': 'JsonEdit', 'modified': 'Hidden', 'B_Núm. Ex': 'TextEdit', 'B_RTC': 'TextEdit', 'B_Descripc': 'TextEdit', 'B_Emplaça': 'TextEdit', 'B_Tipus ca': 'Hidden', 'B_Carrer': 'Hidden', 'Primer_num': 'TextEdit', 'Zona': 'TextEdit', 'Descri_1': 'TextEdit', 'Num_plazas': 'TextEdit', });
lyr_Hotels_19.set('fieldImages', {'register_i': 'Hidden', 'name': 'TextEdit', 'created': 'Hidden', 'modified': 'Hidden', 'addresse_3': 'TextEdit', 'addresse_4': 'TextEdit', 'addresse_7': 'Hidden', 'secondar_1': 'Hidden', 'rtc': 'TextEdit', 'U_Núm. Ex': 'TextEdit', 'U_Descripc': 'TextEdit', 'U_Zona': 'TextEdit', 'U_Descri_1': 'TextEdit', 'numeroplaz': 'TextEdit', });
lyr_Perfil22_2.set('fieldLabels', {'id': 'no label', 'Seccion': 'no label', });
lyr_Sensedades_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'NIVELL': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'PERIMETRE': 'inline label - visible with data', 'DISTRICTE': 'inline label - visible with data', 'BARRI': 'inline label - visible with data', 'Z_MIN_VOL': 'inline label - visible with data', 'Z_MAX_VOL': 'inline label - visible with data', 'beginn': 'inline label - visible with data', 'end': 'inline label - visible with data', 'localI': 'inline label - visible with data', 'value': 'inline label - visible with data', 'value_m': 'inline label - visible with data', 'U_currentU': 'inline label - visible with data', 'U_numberOf': 'inline label - visible with data', 'U_number_1': 'inline label - visible with data', 'U_number_2': 'inline label - visible with data', 'U_value': 'inline label - visible with data', 'U_value_uo': 'inline label - visible with data', });
lyr_Edificis4_3_publicServices_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'NIVELL': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'PERIMETRE': 'inline label - visible with data', 'DISTRICTE': 'inline label - visible with data', 'BARRI': 'inline label - visible with data', 'Z_MIN_VOL': 'inline label - visible with data', 'Z_MAX_VOL': 'inline label - visible with data', 'beginn': 'inline label - visible with data', 'end': 'inline label - visible with data', 'localI': 'inline label - visible with data', 'value': 'inline label - visible with data', 'value_m': 'inline label - always visible', 'U_currentU': 'inline label - visible with data', 'U_numberOf': 'inline label - visible with data', 'U_number_1': 'inline label - visible with data', 'U_number_2': 'header label - always visible', 'U_value': 'inline label - visible with data', 'U_value_uo': 'inline label - visible with data', });
lyr_Edificis4_2_retail_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'NIVELL': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'PERIMETRE': 'inline label - visible with data', 'DISTRICTE': 'inline label - visible with data', 'BARRI': 'inline label - visible with data', 'Z_MIN_VOL': 'inline label - visible with data', 'Z_MAX_VOL': 'inline label - visible with data', 'beginn': 'inline label - visible with data', 'end': 'inline label - visible with data', 'localI': 'inline label - visible with data', 'value': 'inline label - visible with data', 'value_m': 'inline label - visible with data', 'U_currentU': 'inline label - visible with data', 'U_numberOf': 'inline label - visible with data', 'U_number_1': 'inline label - visible with data', 'U_number_2': 'inline label - visible with data', 'U_value': 'inline label - visible with data', 'U_value_uo': 'inline label - visible with data', });
lyr_Edificis4_1_office_6.set('fieldLabels', {'fid': 'inline label - visible with data', 'NIVELL': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'PERIMETRE': 'inline label - visible with data', 'DISTRICTE': 'inline label - visible with data', 'BARRI': 'inline label - visible with data', 'Z_MIN_VOL': 'inline label - visible with data', 'Z_MAX_VOL': 'inline label - visible with data', 'beginn': 'inline label - visible with data', 'end': 'inline label - visible with data', 'localI': 'inline label - visible with data', 'value': 'inline label - visible with data', 'value_m': 'inline label - visible with data', 'U_currentU': 'inline label - visible with data', 'U_numberOf': 'inline label - visible with data', 'U_number_1': 'inline label - visible with data', 'U_number_2': 'inline label - visible with data', 'U_value': 'inline label - visible with data', 'U_value_uo': 'inline label - visible with data', });
lyr_Edificis3_industrial_7.set('fieldLabels', {'fid': 'inline label - visible with data', 'NIVELL': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'PERIMETRE': 'inline label - visible with data', 'DISTRICTE': 'inline label - visible with data', 'BARRI': 'inline label - visible with data', 'Z_MIN_VOL': 'inline label - visible with data', 'Z_MAX_VOL': 'inline label - visible with data', 'beginn': 'inline label - visible with data', 'end': 'inline label - visible with data', 'localI': 'inline label - visible with data', 'value': 'inline label - visible with data', 'value_m': 'inline label - visible with data', 'U_currentU': 'inline label - visible with data', 'U_numberOf': 'inline label - visible with data', 'U_number_1': 'inline label - visible with data', 'U_number_2': 'inline label - visible with data', 'U_value': 'inline label - visible with data', 'U_value_uo': 'inline label - visible with data', });
lyr_Edificis1_residencial_8.set('fieldLabels', {'fid': 'inline label - visible with data', 'NIVELL': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'PERIMETRE': 'inline label - visible with data', 'DISTRICTE': 'inline label - visible with data', 'BARRI': 'inline label - visible with data', 'Z_MIN_VOL': 'inline label - visible with data', 'Z_MAX_VOL': 'inline label - visible with data', 'beginn': 'inline label - visible with data', 'end': 'inline label - visible with data', 'localI': 'inline label - visible with data', 'value': 'inline label - visible with data', 'value_m': 'inline label - visible with data', 'U_currentU': 'inline label - visible with data', 'U_numberOf': 'inline label - visible with data', 'U_number_1': 'inline label - visible with data', 'U_number_2': 'inline label - visible with data', 'U_value': 'inline label - visible with data', 'U_value_uo': 'inline label - visible with data', });
lyr_ZonesPEUAT_9.set('fieldLabels', {'fid': 'inline label - visible with data', 'OBJECTID': 'inline label - visible with data', 'ZE': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', 'Descripcio': 'inline label - visible with data', 'tipo': 'inline label - visible with data', });
lyr_Pensions_10.set('fieldLabels', {'name': 'inline label - visible with data', 'addresse_3': 'inline label - visible with data', 'addresse_4': 'inline label - visible with data', 'rtc': 'inline label - visible with data', 'Num_Exp': 'inline label - visible with data', 'Num_plazas': 'inline label - visible with data', });
lyr_Apartaments_11.set('fieldLabels', {'register_i': 'inline label - visible with data', 'name': 'inline label - visible with data', 'created': 'inline label - visible with data', 'modified': 'inline label - visible with data', 'addresse_2': 'inline label - visible with data', 'addresse_3': 'inline label - visible with data', 'addresse_4': 'inline label - visible with data', 'addresse_5': 'inline label - visible with data', 'addresse_6': 'inline label - visible with data', 'secondar_1': 'inline label - visible with data', });
lyr_Collegismajors_12.set('fieldLabels', {'register_i': 'inline label - visible with data', 'name': 'inline label - visible with data', 'created': 'inline label - visible with data', 'modified': 'inline label - visible with data', 'addresse_2': 'inline label - visible with data', 'addresse_3': 'inline label - visible with data', 'addresse_4': 'inline label - visible with data', 'addresse_5': 'inline label - visible with data', 'addresse_6': 'inline label - visible with data', 'secondar_1': 'inline label - visible with data', });
lyr_Albergsjuvenils_13.set('fieldLabels', {'register_i': 'inline label - visible with data', 'name': 'inline label - visible with data', 'created': 'inline label - visible with data', 'modified': 'inline label - visible with data', 'addresse_3': 'inline label - visible with data', 'addresse_4': 'inline label - visible with data', 'secondar_1': 'inline label - visible with data', });
lyr_OpenDataBCN_14.set('fieldLabels', {'register_i': 'inline label - visible with data', 'name': 'inline label - visible with data', 'created': 'inline label - visible with data', 'modified': 'inline label - visible with data', 'addresse_2': 'inline label - visible with data', 'addresse_3': 'inline label - visible with data', 'addresse_4': 'inline label - visible with data', 'addresse_5': 'inline label - visible with data', 'addresse_6': 'inline label - visible with data', 'secondar_1': 'inline label - visible with data', });
lyr_Ensldequipament_15.set('fieldLabels', {'Expedient': 'inline label - visible with data', 'Emplaçament': 'inline label - visible with data', 'Zona': 'inline label - visible with data', 'zona_1': 'inline label - visible with data', 'Num_places': 'inline label - visible with data', 'Superficie': 'inline label - always visible', });
lyr_Ensldezona_16.set('fieldLabels', {'Núm. Expedient': 'inline label - visible with data', 'Emplaçament': 'inline label - visible with data', 'Zona': 'inline label - visible with data', 'Descripció zona': 'inline label - visible with data', 'Núm. places allotjament turístic': 'inline label - visible with data', 'Superfície de sòl': 'inline label - visible with data', });
lyr_Pisosturstics_17.set('fieldLabels', {'N_EXPEDIEN': 'inline label - visible with data', 'CARRER': 'inline label - visible with data', 'NUM1': 'inline label - visible with data', 'LLETRA1': 'inline label - visible with data', 'NUM2': 'inline label - visible with data', 'LLETRA2': 'inline label - visible with data', 'BLOC': 'inline label - visible with data', 'PORTAL': 'inline label - visible with data', 'ESCALA': 'inline label - visible with data', 'PIS': 'inline label - visible with data', 'PORTA': 'inline label - visible with data', 'NUMERO_REG': 'inline label - visible with data', 'NUMERO_PLA': 'inline label - visible with data', });
lyr_Hotelapartament_18.set('fieldLabels', {'name': 'inline label - visible with data', 'created': 'inline label - visible with data', 'B_Núm. Ex': 'inline label - visible with data', 'B_RTC': 'inline label - visible with data', 'B_Descripc': 'inline label - visible with data', 'B_Emplaça': 'inline label - visible with data', 'Primer_num': 'inline label - visible with data', 'Zona': 'inline label - visible with data', 'Descri_1': 'inline label - visible with data', 'Num_plazas': 'inline label - visible with data', });
lyr_Hotels_19.set('fieldLabels', {'name': 'inline label - visible with data', 'addresse_3': 'inline label - visible with data', 'addresse_4': 'inline label - visible with data', 'rtc': 'inline label - visible with data', 'U_Núm. Ex': 'inline label - visible with data', 'U_Descripc': 'inline label - visible with data', 'U_Zona': 'inline label - visible with data', 'U_Descri_1': 'inline label - visible with data', 'numeroplaz': 'inline label - visible with data', });
lyr_Hotels_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});