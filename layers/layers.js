var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_PartaiUmmat_1 = new ol.format.GeoJSON();
var features_PartaiUmmat_1 = format_PartaiUmmat_1.readFeatures(json_PartaiUmmat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiUmmat_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiUmmat_1.addFeatures(features_PartaiUmmat_1);
var lyr_PartaiUmmat_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiUmmat_1, 
                style: style_PartaiUmmat_1,
                popuplayertitle: 'Partai Ummat',
                interactive: true,
    title: 'Partai Ummat<br />\
    <img src="styles/legend/PartaiUmmat_1_0.png" /> 80 - 195<br />\
    <img src="styles/legend/PartaiUmmat_1_1.png" /> 195 - 309<br />\
    <img src="styles/legend/PartaiUmmat_1_2.png" /> 309 - 424<br />\
    <img src="styles/legend/PartaiUmmat_1_3.png" /> 424 - 538<br />\
    <img src="styles/legend/PartaiUmmat_1_4.png" /> 538 - 653<br />'
        });
var format_PartaiPersatuanPembangunan_2 = new ol.format.GeoJSON();
var features_PartaiPersatuanPembangunan_2 = format_PartaiPersatuanPembangunan_2.readFeatures(json_PartaiPersatuanPembangunan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiPersatuanPembangunan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiPersatuanPembangunan_2.addFeatures(features_PartaiPersatuanPembangunan_2);
var lyr_PartaiPersatuanPembangunan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiPersatuanPembangunan_2, 
                style: style_PartaiPersatuanPembangunan_2,
                popuplayertitle: 'Partai Persatuan Pembangunan',
                interactive: true,
    title: 'Partai Persatuan Pembangunan<br />\
    <img src="styles/legend/PartaiPersatuanPembangunan_2_0.png" /> 138 - 432<br />\
    <img src="styles/legend/PartaiPersatuanPembangunan_2_1.png" /> 432 - 727<br />\
    <img src="styles/legend/PartaiPersatuanPembangunan_2_2.png" /> 727 - 1021<br />\
    <img src="styles/legend/PartaiPersatuanPembangunan_2_3.png" /> 1021 - 1316<br />\
    <img src="styles/legend/PartaiPersatuanPembangunan_2_4.png" /> 1316 - 1610<br />'
        });
var format_PartaiPerindo_3 = new ol.format.GeoJSON();
var features_PartaiPerindo_3 = format_PartaiPerindo_3.readFeatures(json_PartaiPerindo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiPerindo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiPerindo_3.addFeatures(features_PartaiPerindo_3);
var lyr_PartaiPerindo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiPerindo_3, 
                style: style_PartaiPerindo_3,
                popuplayertitle: 'Partai Perindo',
                interactive: true,
    title: 'Partai Perindo<br />\
    <img src="styles/legend/PartaiPerindo_3_0.png" /> 254 - 849<br />\
    <img src="styles/legend/PartaiPerindo_3_1.png" /> 849 - 1443<br />\
    <img src="styles/legend/PartaiPerindo_3_2.png" /> 1443 - 2038<br />\
    <img src="styles/legend/PartaiPerindo_3_3.png" /> 2038 - 2632<br />\
    <img src="styles/legend/PartaiPerindo_3_4.png" /> 2632 - 3227<br />'
        });
var format_PartaiSolidaritasIndonesia_4 = new ol.format.GeoJSON();
var features_PartaiSolidaritasIndonesia_4 = format_PartaiSolidaritasIndonesia_4.readFeatures(json_PartaiSolidaritasIndonesia_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiSolidaritasIndonesia_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiSolidaritasIndonesia_4.addFeatures(features_PartaiSolidaritasIndonesia_4);
var lyr_PartaiSolidaritasIndonesia_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiSolidaritasIndonesia_4, 
                style: style_PartaiSolidaritasIndonesia_4,
                popuplayertitle: 'Partai Solidaritas Indonesia',
                interactive: true,
    title: 'Partai Solidaritas Indonesia<br />\
    <img src="styles/legend/PartaiSolidaritasIndonesia_4_0.png" /> 1483 - 5825<br />\
    <img src="styles/legend/PartaiSolidaritasIndonesia_4_1.png" /> 5825 - 10167<br />\
    <img src="styles/legend/PartaiSolidaritasIndonesia_4_2.png" /> 10167 - 14508<br />\
    <img src="styles/legend/PartaiSolidaritasIndonesia_4_3.png" /> 14508 - 18850<br />\
    <img src="styles/legend/PartaiSolidaritasIndonesia_4_4.png" /> 18850 - 23192<br />'
        });
var format_PartaiDemokrat_5 = new ol.format.GeoJSON();
var features_PartaiDemokrat_5 = format_PartaiDemokrat_5.readFeatures(json_PartaiDemokrat_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiDemokrat_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiDemokrat_5.addFeatures(features_PartaiDemokrat_5);
var lyr_PartaiDemokrat_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiDemokrat_5, 
                style: style_PartaiDemokrat_5,
                popuplayertitle: 'Partai Demokrat',
                interactive: true,
    title: 'Partai Demokrat<br />\
    <img src="styles/legend/PartaiDemokrat_5_0.png" /> 3538 - 11760<br />\
    <img src="styles/legend/PartaiDemokrat_5_1.png" /> 11760 - 19983<br />\
    <img src="styles/legend/PartaiDemokrat_5_2.png" /> 19983 - 28205<br />\
    <img src="styles/legend/PartaiDemokrat_5_3.png" /> 28205 - 36428<br />\
    <img src="styles/legend/PartaiDemokrat_5_4.png" /> 36428 - 44650<br />'
        });
var format_PartaiBulanBintang_6 = new ol.format.GeoJSON();
var features_PartaiBulanBintang_6 = format_PartaiBulanBintang_6.readFeatures(json_PartaiBulanBintang_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiBulanBintang_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiBulanBintang_6.addFeatures(features_PartaiBulanBintang_6);
var lyr_PartaiBulanBintang_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiBulanBintang_6, 
                style: style_PartaiBulanBintang_6,
                popuplayertitle: 'Partai Bulan Bintang',
                interactive: true,
    title: 'Partai Bulan Bintang<br />\
    <img src="styles/legend/PartaiBulanBintang_6_0.png" /> 63 - 127<br />\
    <img src="styles/legend/PartaiBulanBintang_6_1.png" /> 127 - 191<br />\
    <img src="styles/legend/PartaiBulanBintang_6_2.png" /> 191 - 254<br />\
    <img src="styles/legend/PartaiBulanBintang_6_3.png" /> 254 - 318<br />\
    <img src="styles/legend/PartaiBulanBintang_6_4.png" /> 318 - 382<br />'
        });
var format_PartaiAmanatNasional_7 = new ol.format.GeoJSON();
var features_PartaiAmanatNasional_7 = format_PartaiAmanatNasional_7.readFeatures(json_PartaiAmanatNasional_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiAmanatNasional_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiAmanatNasional_7.addFeatures(features_PartaiAmanatNasional_7);
var lyr_PartaiAmanatNasional_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiAmanatNasional_7, 
                style: style_PartaiAmanatNasional_7,
                popuplayertitle: 'Partai Amanat Nasional',
                interactive: true,
    title: 'Partai Amanat Nasional<br />\
    <img src="styles/legend/PartaiAmanatNasional_7_0.png" /> 239 - 576<br />\
    <img src="styles/legend/PartaiAmanatNasional_7_1.png" /> 576 - 912<br />\
    <img src="styles/legend/PartaiAmanatNasional_7_2.png" /> 912 - 1249<br />\
    <img src="styles/legend/PartaiAmanatNasional_7_3.png" /> 1249 - 1585<br />\
    <img src="styles/legend/PartaiAmanatNasional_7_4.png" /> 1585 - 1922<br />'
        });
var format_PartaiGardaPerubahanIndonesia_8 = new ol.format.GeoJSON();
var features_PartaiGardaPerubahanIndonesia_8 = format_PartaiGardaPerubahanIndonesia_8.readFeatures(json_PartaiGardaPerubahanIndonesia_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiGardaPerubahanIndonesia_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiGardaPerubahanIndonesia_8.addFeatures(features_PartaiGardaPerubahanIndonesia_8);
var lyr_PartaiGardaPerubahanIndonesia_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiGardaPerubahanIndonesia_8, 
                style: style_PartaiGardaPerubahanIndonesia_8,
                popuplayertitle: 'Partai Garda Perubahan Indonesia',
                interactive: true,
    title: 'Partai Garda Perubahan Indonesia<br />\
    <img src="styles/legend/PartaiGardaPerubahanIndonesia_8_0.png" /> 284 - 412<br />\
    <img src="styles/legend/PartaiGardaPerubahanIndonesia_8_1.png" /> 412 - 540<br />\
    <img src="styles/legend/PartaiGardaPerubahanIndonesia_8_2.png" /> 540 - 668<br />\
    <img src="styles/legend/PartaiGardaPerubahanIndonesia_8_3.png" /> 668 - 796<br />\
    <img src="styles/legend/PartaiGardaPerubahanIndonesia_8_4.png" /> 796 - 924<br />'
        });
var format_PartaiHatiNuraniRakyat_9 = new ol.format.GeoJSON();
var features_PartaiHatiNuraniRakyat_9 = format_PartaiHatiNuraniRakyat_9.readFeatures(json_PartaiHatiNuraniRakyat_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiHatiNuraniRakyat_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiHatiNuraniRakyat_9.addFeatures(features_PartaiHatiNuraniRakyat_9);
var lyr_PartaiHatiNuraniRakyat_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiHatiNuraniRakyat_9, 
                style: style_PartaiHatiNuraniRakyat_9,
                popuplayertitle: 'Partai Hati Nurani Rakyat',
                interactive: true,
    title: 'Partai Hati Nurani Rakyat<br />\
    <img src="styles/legend/PartaiHatiNuraniRakyat_9_0.png" /> 279 - 900<br />\
    <img src="styles/legend/PartaiHatiNuraniRakyat_9_1.png" /> 900 - 1521<br />\
    <img src="styles/legend/PartaiHatiNuraniRakyat_9_2.png" /> 1521 - 2143<br />\
    <img src="styles/legend/PartaiHatiNuraniRakyat_9_3.png" /> 2143 - 2764<br />\
    <img src="styles/legend/PartaiHatiNuraniRakyat_9_4.png" /> 2764 - 3385<br />'
        });
var format_PartaiKebangkitanNusantara_10 = new ol.format.GeoJSON();
var features_PartaiKebangkitanNusantara_10 = format_PartaiKebangkitanNusantara_10.readFeatures(json_PartaiKebangkitanNusantara_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiKebangkitanNusantara_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiKebangkitanNusantara_10.addFeatures(features_PartaiKebangkitanNusantara_10);
var lyr_PartaiKebangkitanNusantara_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiKebangkitanNusantara_10, 
                style: style_PartaiKebangkitanNusantara_10,
                popuplayertitle: 'Partai Kebangkitan Nusantara',
                interactive: true,
    title: 'Partai Kebangkitan Nusantara<br />\
    <img src="styles/legend/PartaiKebangkitanNusantara_10_0.png" /> 1182 - 1870<br />\
    <img src="styles/legend/PartaiKebangkitanNusantara_10_1.png" /> 1870 - 2558<br />\
    <img src="styles/legend/PartaiKebangkitanNusantara_10_2.png" /> 2558 - 3245<br />\
    <img src="styles/legend/PartaiKebangkitanNusantara_10_3.png" /> 3245 - 3933<br />\
    <img src="styles/legend/PartaiKebangkitanNusantara_10_4.png" /> 3933 - 4621<br />'
        });
var format_PartaiKeadilanSejahtera_11 = new ol.format.GeoJSON();
var features_PartaiKeadilanSejahtera_11 = format_PartaiKeadilanSejahtera_11.readFeatures(json_PartaiKeadilanSejahtera_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiKeadilanSejahtera_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiKeadilanSejahtera_11.addFeatures(features_PartaiKeadilanSejahtera_11);
var lyr_PartaiKeadilanSejahtera_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiKeadilanSejahtera_11, 
                style: style_PartaiKeadilanSejahtera_11,
                popuplayertitle: 'Partai Keadilan Sejahtera',
                interactive: true,
    title: 'Partai Keadilan Sejahtera<br />\
    <img src="styles/legend/PartaiKeadilanSejahtera_11_0.png" /> 294 - 1775<br />\
    <img src="styles/legend/PartaiKeadilanSejahtera_11_1.png" /> 1775 - 3256<br />\
    <img src="styles/legend/PartaiKeadilanSejahtera_11_2.png" /> 3256 - 4737<br />\
    <img src="styles/legend/PartaiKeadilanSejahtera_11_3.png" /> 4737 - 6218<br />\
    <img src="styles/legend/PartaiKeadilanSejahtera_11_4.png" /> 6218 - 7699<br />'
        });
var format_PartaiGelombangRakyatIndonesia_12 = new ol.format.GeoJSON();
var features_PartaiGelombangRakyatIndonesia_12 = format_PartaiGelombangRakyatIndonesia_12.readFeatures(json_PartaiGelombangRakyatIndonesia_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiGelombangRakyatIndonesia_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiGelombangRakyatIndonesia_12.addFeatures(features_PartaiGelombangRakyatIndonesia_12);
var lyr_PartaiGelombangRakyatIndonesia_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiGelombangRakyatIndonesia_12, 
                style: style_PartaiGelombangRakyatIndonesia_12,
                popuplayertitle: 'Partai Gelombang Rakyat Indonesia',
                interactive: true,
    title: 'Partai Gelombang Rakyat Indonesia<br />\
    <img src="styles/legend/PartaiGelombangRakyatIndonesia_12_0.png" /> 807 - 2508<br />\
    <img src="styles/legend/PartaiGelombangRakyatIndonesia_12_1.png" /> 2508 - 4210<br />\
    <img src="styles/legend/PartaiGelombangRakyatIndonesia_12_2.png" /> 4210 - 5911<br />\
    <img src="styles/legend/PartaiGelombangRakyatIndonesia_12_3.png" /> 5911 - 7613<br />\
    <img src="styles/legend/PartaiGelombangRakyatIndonesia_12_4.png" /> 7613 - 9314<br />'
        });
var format_PartaiBuruh_13 = new ol.format.GeoJSON();
var features_PartaiBuruh_13 = format_PartaiBuruh_13.readFeatures(json_PartaiBuruh_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiBuruh_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiBuruh_13.addFeatures(features_PartaiBuruh_13);
var lyr_PartaiBuruh_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiBuruh_13, 
                style: style_PartaiBuruh_13,
                popuplayertitle: 'Partai Buruh',
                interactive: true,
    title: 'Partai Buruh<br />\
    <img src="styles/legend/PartaiBuruh_13_0.png" /> 638 - 850<br />\
    <img src="styles/legend/PartaiBuruh_13_1.png" /> 850 - 1063<br />\
    <img src="styles/legend/PartaiBuruh_13_2.png" /> 1063 - 1275<br />\
    <img src="styles/legend/PartaiBuruh_13_3.png" /> 1275 - 1488<br />\
    <img src="styles/legend/PartaiBuruh_13_4.png" /> 1488 - 1700<br />'
        });
var format_PartaiNasdem_14 = new ol.format.GeoJSON();
var features_PartaiNasdem_14 = format_PartaiNasdem_14.readFeatures(json_PartaiNasdem_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiNasdem_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiNasdem_14.addFeatures(features_PartaiNasdem_14);
var lyr_PartaiNasdem_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiNasdem_14, 
                style: style_PartaiNasdem_14,
                popuplayertitle: 'Partai Nasdem',
                interactive: true,
    title: 'Partai Nasdem<br />\
    <img src="styles/legend/PartaiNasdem_14_0.png" /> 4244 - 13713<br />\
    <img src="styles/legend/PartaiNasdem_14_1.png" /> 13713 - 23182<br />\
    <img src="styles/legend/PartaiNasdem_14_2.png" /> 23182 - 32652<br />\
    <img src="styles/legend/PartaiNasdem_14_3.png" /> 32652 - 42121<br />\
    <img src="styles/legend/PartaiNasdem_14_4.png" /> 42121 - 51590<br />'
        });
var format_PartaiGolkar_15 = new ol.format.GeoJSON();
var features_PartaiGolkar_15 = format_PartaiGolkar_15.readFeatures(json_PartaiGolkar_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiGolkar_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiGolkar_15.addFeatures(features_PartaiGolkar_15);
var lyr_PartaiGolkar_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiGolkar_15, 
                style: style_PartaiGolkar_15,
                popuplayertitle: 'Partai Golkar',
                interactive: true,
    title: 'Partai Golkar<br />\
    <img src="styles/legend/PartaiGolkar_15_0.png" /> 12408 - 26081<br />\
    <img src="styles/legend/PartaiGolkar_15_1.png" /> 26081 - 39754<br />\
    <img src="styles/legend/PartaiGolkar_15_2.png" /> 39754 - 53426<br />\
    <img src="styles/legend/PartaiGolkar_15_3.png" /> 53426 - 67099<br />\
    <img src="styles/legend/PartaiGolkar_15_4.png" /> 67099 - 80772<br />'
        });
var format_PartaiDemokrasiIndonesiaPerjuangan_16 = new ol.format.GeoJSON();
var features_PartaiDemokrasiIndonesiaPerjuangan_16 = format_PartaiDemokrasiIndonesiaPerjuangan_16.readFeatures(json_PartaiDemokrasiIndonesiaPerjuangan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiDemokrasiIndonesiaPerjuangan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiDemokrasiIndonesiaPerjuangan_16.addFeatures(features_PartaiDemokrasiIndonesiaPerjuangan_16);
var lyr_PartaiDemokrasiIndonesiaPerjuangan_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiDemokrasiIndonesiaPerjuangan_16, 
                style: style_PartaiDemokrasiIndonesiaPerjuangan_16,
                popuplayertitle: 'Partai Demokrasi Indonesia Perjuangan',
                interactive: true,
    title: 'Partai Demokrasi Indonesia Perjuangan<br />\
    <img src="styles/legend/PartaiDemokrasiIndonesiaPerjuangan_16_0.png" /> 53559 - 92409<br />\
    <img src="styles/legend/PartaiDemokrasiIndonesiaPerjuangan_16_1.png" /> 92409 - 131260<br />\
    <img src="styles/legend/PartaiDemokrasiIndonesiaPerjuangan_16_2.png" /> 131260 - 170110<br />\
    <img src="styles/legend/PartaiDemokrasiIndonesiaPerjuangan_16_3.png" /> 170110 - 208961<br />\
    <img src="styles/legend/PartaiDemokrasiIndonesiaPerjuangan_16_4.png" /> 208961 - 247811<br />'
        });
var format_PartaiGerakanIndonesiaRaya_17 = new ol.format.GeoJSON();
var features_PartaiGerakanIndonesiaRaya_17 = format_PartaiGerakanIndonesiaRaya_17.readFeatures(json_PartaiGerakanIndonesiaRaya_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiGerakanIndonesiaRaya_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiGerakanIndonesiaRaya_17.addFeatures(features_PartaiGerakanIndonesiaRaya_17);
var lyr_PartaiGerakanIndonesiaRaya_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiGerakanIndonesiaRaya_17, 
                style: style_PartaiGerakanIndonesiaRaya_17,
                popuplayertitle: 'Partai Gerakan Indonesia Raya',
                interactive: true,
    title: 'Partai Gerakan Indonesia Raya<br />\
    <img src="styles/legend/PartaiGerakanIndonesiaRaya_17_0.png" /> 11772 - 22230<br />\
    <img src="styles/legend/PartaiGerakanIndonesiaRaya_17_1.png" /> 22230 - 32687<br />\
    <img src="styles/legend/PartaiGerakanIndonesiaRaya_17_2.png" /> 32687 - 43145<br />\
    <img src="styles/legend/PartaiGerakanIndonesiaRaya_17_3.png" /> 43145 - 53602<br />\
    <img src="styles/legend/PartaiGerakanIndonesiaRaya_17_4.png" /> 53602 - 64060<br />'
        });
var format_PartaiKebangkitanBangsa_18 = new ol.format.GeoJSON();
var features_PartaiKebangkitanBangsa_18 = format_PartaiKebangkitanBangsa_18.readFeatures(json_PartaiKebangkitanBangsa_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiKebangkitanBangsa_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiKebangkitanBangsa_18.addFeatures(features_PartaiKebangkitanBangsa_18);
var lyr_PartaiKebangkitanBangsa_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiKebangkitanBangsa_18, 
                style: style_PartaiKebangkitanBangsa_18,
                popuplayertitle: 'Partai Kebangkitan Bangsa',
                interactive: true,
    title: 'Partai Kebangkitan Bangsa<br />\
    <img src="styles/legend/PartaiKebangkitanBangsa_18_0.png" /> 1315 - 3373<br />\
    <img src="styles/legend/PartaiKebangkitanBangsa_18_1.png" /> 3373 - 5430<br />\
    <img src="styles/legend/PartaiKebangkitanBangsa_18_2.png" /> 5430 - 7488<br />\
    <img src="styles/legend/PartaiKebangkitanBangsa_18_3.png" /> 7488 - 9545<br />\
    <img src="styles/legend/PartaiKebangkitanBangsa_18_4.png" /> 9545 - 11603<br />'
        });

lyr_ESRISatellite_0.setVisible(true);lyr_PartaiUmmat_1.setVisible(false);lyr_PartaiPersatuanPembangunan_2.setVisible(false);lyr_PartaiPerindo_3.setVisible(false);lyr_PartaiSolidaritasIndonesia_4.setVisible(false);lyr_PartaiDemokrat_5.setVisible(false);lyr_PartaiBulanBintang_6.setVisible(false);lyr_PartaiAmanatNasional_7.setVisible(false);lyr_PartaiGardaPerubahanIndonesia_8.setVisible(false);lyr_PartaiHatiNuraniRakyat_9.setVisible(false);lyr_PartaiKebangkitanNusantara_10.setVisible(false);lyr_PartaiKeadilanSejahtera_11.setVisible(false);lyr_PartaiGelombangRakyatIndonesia_12.setVisible(false);lyr_PartaiBuruh_13.setVisible(false);lyr_PartaiNasdem_14.setVisible(false);lyr_PartaiGolkar_15.setVisible(false);lyr_PartaiDemokrasiIndonesiaPerjuangan_16.setVisible(false);lyr_PartaiGerakanIndonesiaRaya_17.setVisible(false);lyr_PartaiKebangkitanBangsa_18.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_PartaiUmmat_1,lyr_PartaiPersatuanPembangunan_2,lyr_PartaiPerindo_3,lyr_PartaiSolidaritasIndonesia_4,lyr_PartaiDemokrat_5,lyr_PartaiBulanBintang_6,lyr_PartaiAmanatNasional_7,lyr_PartaiGardaPerubahanIndonesia_8,lyr_PartaiHatiNuraniRakyat_9,lyr_PartaiKebangkitanNusantara_10,lyr_PartaiKeadilanSejahtera_11,lyr_PartaiGelombangRakyatIndonesia_12,lyr_PartaiBuruh_13,lyr_PartaiNasdem_14,lyr_PartaiGolkar_15,lyr_PartaiDemokrasiIndonesiaPerjuangan_16,lyr_PartaiGerakanIndonesiaRaya_17,lyr_PartaiKebangkitanBangsa_18];
lyr_PartaiUmmat_1.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Kab_Kot': 'Kab_Kot', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiPersatuanPembangunan_2.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Kab_Kot': 'Kab_Kot', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiPerindo_3.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Kab_Kot': 'Kab_Kot', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiSolidaritasIndonesia_4.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Kab_Kot': 'Kab_Kot', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiDemokrat_5.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Kab_Kot': 'Kab_Kot', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiBulanBintang_6.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Kab_Kot': 'Kab_Kot', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiAmanatNasional_7.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Kab_Kot': 'Kab_Kot', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiGardaPerubahanIndonesia_8.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Kab_Kot': 'Kab_Kot', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiHatiNuraniRakyat_9.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Kab_Kot': 'Kab_Kot', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiKebangkitanNusantara_10.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Kab_Kot': 'Kab_Kot', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiKeadilanSejahtera_11.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Kab_Kot': 'Kab_Kot', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiGelombangRakyatIndonesia_12.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Kab_Kot': 'Kab_Kot', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiBuruh_13.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Kab_Kot': 'Kab_Kot', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiNasdem_14.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Kab_Kot': 'Kab_Kot', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiGolkar_15.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Kab_Kot': 'Kab_Kot', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiDemokrasiIndonesiaPerjuangan_16.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Kab_Kot': 'Kab_Kot', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiGerakanIndonesiaRaya_17.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Kab_Kot': 'Kab_Kot', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiKebangkitanBangsa_18.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Kab_Kot': 'Kab_Kot', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiUmmat_1.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Kab_Kot': 'TextEdit', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiPersatuanPembangunan_2.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Kab_Kot': 'TextEdit', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiPerindo_3.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Kab_Kot': 'TextEdit', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiSolidaritasIndonesia_4.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Kab_Kot': 'TextEdit', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiDemokrat_5.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Kab_Kot': 'TextEdit', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiBulanBintang_6.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Kab_Kot': 'TextEdit', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiAmanatNasional_7.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Kab_Kot': 'TextEdit', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiGardaPerubahanIndonesia_8.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Kab_Kot': 'TextEdit', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiHatiNuraniRakyat_9.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Kab_Kot': 'TextEdit', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiKebangkitanNusantara_10.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Kab_Kot': 'TextEdit', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiKeadilanSejahtera_11.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Kab_Kot': 'TextEdit', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiGelombangRakyatIndonesia_12.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Kab_Kot': 'TextEdit', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiBuruh_13.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Kab_Kot': 'TextEdit', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiNasdem_14.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Kab_Kot': 'TextEdit', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiGolkar_15.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Kab_Kot': 'TextEdit', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiDemokrasiIndonesiaPerjuangan_16.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Kab_Kot': 'TextEdit', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiGerakanIndonesiaRaya_17.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Kab_Kot': 'TextEdit', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiKebangkitanBangsa_18.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Kab_Kot': 'TextEdit', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiUmmat_1.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Kab_Kot': 'inline label - always visible', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'inline label - always visible', });
lyr_PartaiPersatuanPembangunan_2.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Kab_Kot': 'inline label - always visible', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'inline label - always visible', 'UMMAT': 'hidden field', });
lyr_PartaiPerindo_3.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Kab_Kot': 'inline label - always visible', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'inline label - always visible', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiSolidaritasIndonesia_4.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Kab_Kot': 'inline label - always visible', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'inline label - always visible', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiDemokrat_5.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Kab_Kot': 'inline label - always visible', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'inline label - always visible', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiBulanBintang_6.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Kab_Kot': 'inline label - always visible', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'inline label - always visible', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiAmanatNasional_7.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Kab_Kot': 'inline label - always visible', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'inline label - always visible', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiGardaPerubahanIndonesia_8.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Kab_Kot': 'inline label - always visible', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'inline label - always visible', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiHatiNuraniRakyat_9.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Kab_Kot': 'inline label - always visible', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'inline label - always visible', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiKebangkitanNusantara_10.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Kab_Kot': 'inline label - always visible', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'inline label - always visible', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiKeadilanSejahtera_11.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Kab_Kot': 'inline label - always visible', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'inline label - always visible', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiGelombangRakyatIndonesia_12.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Kab_Kot': 'inline label - always visible', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'inline label - always visible', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiBuruh_13.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Kab_Kot': 'inline label - always visible', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'inline label - always visible', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiNasdem_14.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Kab_Kot': 'inline label - always visible', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'inline label - always visible', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiGolkar_15.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Kab_Kot': 'inline label - always visible', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'inline label - always visible', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiDemokrasiIndonesiaPerjuangan_16.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Kab_Kot': 'inline label - always visible', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'inline label - always visible', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiGerakanIndonesiaRaya_17.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Kab_Kot': 'inline label - visible with data', 'PKB': 'hidden field', 'GERINDRA': 'inline label - visible with data', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiKebangkitanBangsa_18.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Kab_Kot': 'inline label - always visible', 'PKB': 'inline label - always visible', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiKebangkitanBangsa_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});