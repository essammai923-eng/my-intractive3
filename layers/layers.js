var wms_layers = [];

var format___0 = new ol.format.GeoJSON();
var features___0 = format___0.readFeatures(json___0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___0.addFeatures(features___0);
var lyr___0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___0, 
                style: style___0,
                popuplayertitle: 'مراكز_المنيا',
                interactive: true,
                title: '<img src="styles/legend/__0.png" /> مراكز_المنيا'
            });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'نهر  النيل',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> نهر  النيل'
            });

lyr___0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr___0,lyr__1];
lyr___0.set('fieldAliases', {'Gov_A_Name': 'Gov_A_Name', 'Section_A_': 'Section_A_', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'المسا': 'المسا', 'يعمل': 'يعمل', 'لا يع�': 'لا-يعمل', 'الكثا': 'الكثا', 'السكا': 'السكا', 'امي': 'امي', 'يقرأ �': 'يقرأ �', 'متوسط': 'متوسط', 'عالي': 'عالي', 'ذكور': 'ذكور', 'إناث': 'إناث', 'أعزب': 'أعزب', 'متزوج': 'متزوج', 'مطلق': 'مطلق', 'أرمل': 'أرمل', });
lyr__1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GOV_NAME_A': 'GOV_NAME_A', 'GOV_NAME_E': 'GOV_NAME_E', 'GOV_CODE': 'GOV_CODE', 'SEC_NAME_A': 'SEC_NAME_A', 'SEC_NAME_E': 'SEC_NAME_E', 'SEC_CODE': 'SEC_CODE', 'SSEC_NAME_': 'SSEC_NAME_', 'SSEC_NAME1': 'SSEC_NAME1', 'SSEC_CODE': 'SSEC_CODE', 'التعد': 'التعد', 'cut': 'cut', 'النوع': 'النوع', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr___0.set('fieldImages', {'Gov_A_Name': 'TextEdit', 'Section_A_': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'المسا': 'TextEdit', 'يعمل': 'TextEdit', 'لا يع�': 'TextEdit', 'الكثا': 'TextEdit', 'السكا': 'TextEdit', 'امي': 'Range', 'يقرأ �': 'Range', 'متوسط': 'Range', 'عالي': 'Range', 'ذكور': 'TextEdit', 'إناث': 'Range', 'أعزب': 'TextEdit', 'متزوج': 'TextEdit', 'مطلق': 'TextEdit', 'أرمل': 'TextEdit', });
lyr__1.set('fieldImages', {'OBJECTID': 'TextEdit', 'GOV_NAME_A': 'TextEdit', 'GOV_NAME_E': 'TextEdit', 'GOV_CODE': 'TextEdit', 'SEC_NAME_A': 'TextEdit', 'SEC_NAME_E': 'TextEdit', 'SEC_CODE': 'TextEdit', 'SSEC_NAME_': 'TextEdit', 'SSEC_NAME1': 'TextEdit', 'SSEC_CODE': 'TextEdit', 'التعد': 'Range', 'cut': 'Range', 'النوع': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr___0.set('fieldLabels', {'Gov_A_Name': 'inline label - visible with data', 'Section_A_': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', 'المسا': 'inline label - visible with data', 'يعمل': 'inline label - visible with data', 'لا يع�': 'inline label - visible with data', 'الكثا': 'inline label - visible with data', 'السكا': 'inline label - visible with data', 'امي': 'inline label - visible with data', 'يقرأ �': 'inline label - visible with data', 'متوسط': 'inline label - visible with data', 'عالي': 'inline label - visible with data', 'ذكور': 'inline label - visible with data', 'إناث': 'inline label - visible with data', 'أعزب': 'inline label - visible with data', 'متزوج': 'inline label - visible with data', 'مطلق': 'inline label - visible with data', 'أرمل': 'inline label - visible with data', });
lyr__1.set('fieldLabels', {'OBJECTID': 'no label', 'GOV_NAME_A': 'no label', 'GOV_NAME_E': 'no label', 'GOV_CODE': 'no label', 'SEC_NAME_A': 'no label', 'SEC_NAME_E': 'no label', 'SEC_CODE': 'no label', 'SSEC_NAME_': 'no label', 'SSEC_NAME1': 'no label', 'SSEC_CODE': 'no label', 'التعد': 'no label', 'cut': 'no label', 'النوع': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});