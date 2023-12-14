var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_batasadministrasi_1 = new ol.format.GeoJSON();
var features_batasadministrasi_1 = format_batasadministrasi_1.readFeatures(json_batasadministrasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasadministrasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasadministrasi_1.addFeatures(features_batasadministrasi_1);
var lyr_batasadministrasi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_batasadministrasi_1, 
                style: style_batasadministrasi_1,
                interactive: true,
    title: 'batasadministrasi<br />\
    <img src="styles/legend/batasadministrasi_1_0.png" /> JABON<br />\
    <img src="styles/legend/batasadministrasi_1_1.png" /> KREMBUNG<br />\
    <img src="styles/legend/batasadministrasi_1_2.png" /> PORONG<br />\
    <img src="styles/legend/batasadministrasi_1_3.png" /> <br />'
        });
var format_jalan1_2 = new ol.format.GeoJSON();
var features_jalan1_2 = format_jalan1_2.readFeatures(json_jalan1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan1_2.addFeatures(features_jalan1_2);
var lyr_jalan1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan1_2, 
                style: style_jalan1_2,
                interactive: true,
                title: '<img src="styles/legend/jalan1_2.png" /> jalan1'
            });
var format_titik_3 = new ol.format.GeoJSON();
var features_titik_3 = format_titik_3.readFeatures(json_titik_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titik_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titik_3.addFeatures(features_titik_3);
var lyr_titik_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_titik_3, 
                style: style_titik_3,
                interactive: true,
                title: '<img src="styles/legend/titik_3.png" /> titik'
            });
var lyr_ikon_lokasi_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "ikon_lokasi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ikon_lokasi_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -48.000000, 48.000000, 0.000000]
                            })
                        });

lyr_GoogleSatellite_0.setVisible(true);lyr_batasadministrasi_1.setVisible(true);lyr_jalan1_2.setVisible(true);lyr_titik_3.setVisible(true);lyr_ikon_lokasi_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_batasadministrasi_1,lyr_jalan1_2,lyr_titik_3,lyr_ikon_lokasi_4];
lyr_batasadministrasi_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_jalan1_2.set('fieldAliases', {'id': 'id', 'JALAN': 'JALAN', });
lyr_titik_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'pdfmaps_ph': 'pdfmaps_ph', 'Photo Name': 'Photo Name', 'Photo Date': 'Photo Date', 'Photo Time': 'Photo Time', 'Photo Loca': 'Photo Loca', 'Photo Orie': 'Photo Orie', 'Device Typ': 'Device Typ', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LUASWH': 'LUASWH', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Titik': 'Titik', 'Foto': 'Foto', 'Luas_Ha': 'Luas_Ha', 'layer': 'layer', 'path': 'path', });
lyr_batasadministrasi_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_jalan1_2.set('fieldImages', {'id': 'Range', 'JALAN': 'TextEdit', });
lyr_titik_3.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'pdfmaps_ph': '', 'Photo Name': '', 'Photo Date': '', 'Photo Time': '', 'Photo Loca': '', 'Photo Orie': '', 'Device Typ': '', 'NAMOBJ': '', 'REMARK': '', 'LUASWH': '', 'LCODE': '', 'METADATA': '', 'WADMKD': '', 'WADMKC': '', 'WADMKK': '', 'WADMPR': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'Titik': '', 'Foto': '', 'Luas_Ha': '', 'layer': '', 'path': '', });
lyr_batasadministrasi_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_jalan1_2.set('fieldLabels', {'id': 'no label', 'JALAN': 'no label', });
lyr_titik_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'pdfmaps_ph': 'no label', 'Photo Name': 'no label', 'Photo Date': 'no label', 'Photo Time': 'no label', 'Photo Loca': 'no label', 'Photo Orie': 'no label', 'Device Typ': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'LUASWH': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Titik': 'no label', 'Foto': 'no label', 'Luas_Ha': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_titik_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});