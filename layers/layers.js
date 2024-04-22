ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([31.870952, -5.897550, 46.244587, 6.714610]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ken_admbnda_adm2_iebc_20191031_1 = new ol.format.GeoJSON();
var features_ken_admbnda_adm2_iebc_20191031_1 = format_ken_admbnda_adm2_iebc_20191031_1.readFeatures(json_ken_admbnda_adm2_iebc_20191031_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ken_admbnda_adm2_iebc_20191031_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ken_admbnda_adm2_iebc_20191031_1.addFeatures(features_ken_admbnda_adm2_iebc_20191031_1);
var lyr_ken_admbnda_adm2_iebc_20191031_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ken_admbnda_adm2_iebc_20191031_1, 
                style: style_ken_admbnda_adm2_iebc_20191031_1,
                popuplayertitle: "ken_admbnda_adm2_iebc_20191031",
                interactive: true,
                title: '<img src="styles/legend/ken_admbnda_adm2_iebc_20191031_1.png" /> ken_admbnda_adm2_iebc_20191031'
            });
var format_ken_admbndp_admALL_iebc_itos_20191031_2 = new ol.format.GeoJSON();
var features_ken_admbndp_admALL_iebc_itos_20191031_2 = format_ken_admbndp_admALL_iebc_itos_20191031_2.readFeatures(json_ken_admbndp_admALL_iebc_itos_20191031_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ken_admbndp_admALL_iebc_itos_20191031_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ken_admbndp_admALL_iebc_itos_20191031_2.addFeatures(features_ken_admbndp_admALL_iebc_itos_20191031_2);
var lyr_ken_admbndp_admALL_iebc_itos_20191031_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ken_admbndp_admALL_iebc_itos_20191031_2, 
                style: style_ken_admbndp_admALL_iebc_itos_20191031_2,
                popuplayertitle: "ken_admbndp_admALL_iebc_itos_20191031",
                interactive: true,
    title: 'ken_admbndp_admALL_iebc_itos_20191031<br />\
    <img src="styles/legend/ken_admbndp_admALL_iebc_itos_20191031_2_0.png" /> 34 - 34.93<br />\
    <img src="styles/legend/ken_admbndp_admALL_iebc_itos_20191031_2_1.png" /> 34.93 - 36.52<br />\
    <img src="styles/legend/ken_admbndp_admALL_iebc_itos_20191031_2_2.png" /> 36.52 - 37.58<br />\
    <img src="styles/legend/ken_admbndp_admALL_iebc_itos_20191031_2_3.png" /> 37.58 - 41.54<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_ken_admbnda_adm2_iebc_20191031_1.setVisible(true);lyr_ken_admbndp_admALL_iebc_itos_20191031_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ken_admbnda_adm2_iebc_20191031_1,lyr_ken_admbndp_admALL_iebc_itos_20191031_2];
lyr_ken_admbnda_adm2_iebc_20191031_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'ValidTo': 'ValidTo', });
lyr_ken_admbndp_admALL_iebc_itos_20191031_2.set('fieldAliases', {'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', });
lyr_ken_admbnda_adm2_iebc_20191031_1.set('fieldImages', {'Shape_Leng': '', 'Shape_Area': '', 'ADM2_EN': '', 'ADM2_PCODE': '', 'ADM2_REF': '', 'ADM2ALT1EN': '', 'ADM2ALT2EN': '', 'ADM1_EN': '', 'ADM1_PCODE': '', 'ADM0_EN': '', 'ADM0_PCODE': '', 'date': '', 'validOn': '', 'ValidTo': '', });
lyr_ken_admbndp_admALL_iebc_itos_20191031_2.set('fieldImages', {'ADM0_EN': '', 'ADM0_PCODE': '', 'ADM1_EN': '', 'ADM1_PCODE': '', 'ADM2_EN': '', 'ADM2_PCODE': '', 'ADM2_REF': '', 'ADM2ALT1EN': '', 'ADM2ALT2EN': '', 'POINT_X': '', 'POINT_Y': '', });
lyr_ken_admbnda_adm2_iebc_20191031_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'ValidTo': 'no label', });
lyr_ken_admbndp_admALL_iebc_itos_20191031_2.set('fieldLabels', {'ADM0_EN': 'inline label - always visible', 'ADM0_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM2_EN': 'inline label - always visible', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'POINT_X': 'inline label - always visible', 'POINT_Y': 'inline label - always visible', });
lyr_ken_admbndp_admALL_iebc_itos_20191031_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});