ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32749").setExtent([687082.382943, 9189585.884162, 698383.094827, 9199957.033750]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_UP_VI_Tunjungan_1 = new ol.format.GeoJSON();
var features_UP_VI_Tunjungan_1 = format_UP_VI_Tunjungan_1.readFeatures(json_UP_VI_Tunjungan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_UP_VI_Tunjungan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UP_VI_Tunjungan_1.addFeatures(features_UP_VI_Tunjungan_1);
var lyr_UP_VI_Tunjungan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UP_VI_Tunjungan_1, 
                style: style_UP_VI_Tunjungan_1,
                interactive: true,
    title: 'UP_VI_Tunjungan<br />\
    <img src="styles/legend/UP_VI_Tunjungan_1_0.png" /> Industri<br />\
    <img src="styles/legend/UP_VI_Tunjungan_1_1.png" /> Jalan<br />\
    <img src="styles/legend/UP_VI_Tunjungan_1_2.png" /> Perdagangan dan Jasa<br />\
    <img src="styles/legend/UP_VI_Tunjungan_1_3.png" /> Perkantoran<br />\
    <img src="styles/legend/UP_VI_Tunjungan_1_4.png" /> Perlindungan Setempat<br />\
    <img src="styles/legend/UP_VI_Tunjungan_1_5.png" /> Perumahan<br />\
    <img src="styles/legend/UP_VI_Tunjungan_1_6.png" /> Peruntukan Khusus<br />\
    <img src="styles/legend/UP_VI_Tunjungan_1_7.png" /> Ruang Terbuka Hijau<br />\
    <img src="styles/legend/UP_VI_Tunjungan_1_8.png" /> Saluran<br />\
    <img src="styles/legend/UP_VI_Tunjungan_1_9.png" /> Sarana Pelayanan Umum<br />\
    <img src="styles/legend/UP_VI_Tunjungan_1_10.png" /> Sungai<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_UP_VI_Tunjungan_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_UP_VI_Tunjungan_1];
lyr_UP_VI_Tunjungan_1.set('fieldAliases', {'Kode': 'Kode', 'Keterangan': 'Keterangan', 'Zona': 'Zona', 'Sub_Zona': 'Sub_Zona', 'Kawasan': 'Kawasan', 'Sub_UP': 'Sub_UP', 'UP': 'UP', 'Blok': 'Blok', 'Luas': 'Luas', });
lyr_UP_VI_Tunjungan_1.set('fieldImages', {'Kode': 'TextEdit', 'Keterangan': 'TextEdit', 'Zona': 'TextEdit', 'Sub_Zona': 'TextEdit', 'Kawasan': 'TextEdit', 'Sub_UP': 'TextEdit', 'UP': 'TextEdit', 'Blok': 'TextEdit', 'Luas': 'TextEdit', });
lyr_UP_VI_Tunjungan_1.set('fieldLabels', {'Kode': 'no label', 'Keterangan': 'header label', 'Zona': 'header label', 'Sub_Zona': 'header label', 'Kawasan': 'header label', 'Sub_UP': 'header label', 'UP': 'header label', 'Blok': 'header label', 'Luas': 'header label', });
lyr_UP_VI_Tunjungan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});