/*
This variable is a javaScript object. 
It contains the initial values for the bounding box that is needed for zooming to the original extent.
The values should not be changed but you can access them with INITIAL_BBOX.x1 etc
see https://www.w3schools.com/js/js_objects.asp
*/
var INITIAL_BBOX = {
    x1: 43.569025918631,
    y1:39.00737731082451,
    x2:46.657255581369,
    y2:41.32195478917549
};

/*
This variable is a javaScript object. 
It stores the updated values for the bounding box. The initial values are the same as the INITIAL_BBOX values
but they get updated by the zoom and pan functions
You can access the values with UPDATED_BBOX.x1 etc, and set new values with UPDATED_BBOX.x1 = newValue
see https://www.w3schools.com/js/js_objects.asp
*/
var UPDATED_BBOX = {
    x1: 43.569025918631,
    y1:39.00737731082451,
    x2:46.657255581369,
    y2:41.32195478917549
};



/*
This variable is a javaScript object. 
It stores the initial names for the layers.
They should not be changed but you can access the values with MAPLAYERS.layer1 etc
see https://www.w3schools.com/js/js_objects.asp
*/
var MAPLAYERS = {
    layer1: 'armenia:hospitals',
    layer2: 'armenia:village',
    layer3: 'armenia:streams'
};


/*
This variable is a javaScript object. 
It stores the updated query string for the layers.
The initial value includes all layers from the MAPLAYERS object
but it gets updated by the updateMapLayers() function
see https://www.w3schools.com/js/js_objects.asp
*/
var UPDATED_LAYERS = {
    layers: '&LAYERS='+MAPLAYERS.layer1+','+MAPLAYERS.layer2+','+MAPLAYERS.layer3
}

/*
This variable is a javaScript function.
It calls updateMapBbox() function with the values of INITIAL_BBOX
*/
var zoomToExtent= function(){
    updateMapBbox(INITIAL_BBOX.x1, INITIAL_BBOX.y1, INITIAL_BBOX.x2, INITIAL_BBOX.y2)
}


/*
This variable is a javaScript function.
It calculates new values for the bounding box based on the old values and
calls updateMapBbox() function with these values
*/
var zoomIn=function(){
    newx1=UPDATED_BBOX.x1+((UPDATED_BBOX.x2-UPDATED_BBOX.x1)/4);
    newy1=UPDATED_BBOX.y1+((UPDATED_BBOX.y2-UPDATED_BBOX.y1)/4);
    newx2=UPDATED_BBOX.x2-((UPDATED_BBOX.x2-UPDATED_BBOX.x1)/4);
    newy2=UPDATED_BBOX.y2-((UPDATED_BBOX.y2-UPDATED_BBOX.y1)/4);
    updateMapBbox(newx1,newy1, newx2, newy2)
}


/*
This variable is a javaScript function.
You should implement this function. 
It should zoom out the map when the button is clicked
Look at the zoomIn() function to get a hint
*/
var zoomOut=function(){

}


/*
This variable is a javaScript function.
It calculates new values for the bounding box based on the old values and
calls updateMapBbox() function with these values
*/
var panLeft = function(){
    newx1=UPDATED_BBOX.x1+((UPDATED_BBOX.x2-UPDATED_BBOX.x1)/4);
    newy1 = UPDATED_BBOX.y1;
    newx2=UPDATED_BBOX.x2+((UPDATED_BBOX.x2-UPDATED_BBOX.x1)/4);
    newy2 = UPDATED_BBOX.y2;
    updateMapBbox(newx1,newy1, newx2, newy2)
}


/*
This variable is a javaScript function.
You should implement this function. 
The function should pan the map to the right when the button is clicked.
Look at the panLeft() function to get a hint on how it could be done
*/
var panRight=function(){

}


/*
This variable is a javaScript function.
You should implement this function. 
The function should pan the map upwards when the button is clicked.
Look at the panLeft() function to get a hint on how it could be done
*/
var panUp = function(){

}


/*
This variable is a javaScript function.
You should implement this function. 
The function should pan the map downwards when the button is clicked.
Look at the panLeft() function to get a hint on how it could be done
*/
var panDown = function(){

}



/*
This variable is a javaScript function.
It updates the values of UPDATED_BBOX with the parameters sent in to it, 
and then calls updateMap() function
*/
var updateMapBbox = function(x1,y1,x2,y2){
    UPDATED_BBOX.x1 = x1;
    UPDATED_BBOX.y1 = y1;
    UPDATED_BBOX.x2=x2;
    UPDATED_BBOX.y2 = y2;
    updateMap()
}


/*
This variable is a javaScript function.
It checks if each checkbox is checked or not and builds a new query string from this.
If a checkbox is checked, the layer name and an additional separator ',' gets appended to the query string.
When the query string is ready, it gets stored in the UPDATED_LAYERS variable and updateMap() is called to update the map.

*/
var updateMapLayers = function(){
    var layer1Checked = document.getElementById('layer1CheckBox').checked;
    var layer2Checked = document.getElementById('layer2CheckBox').checked;
    var layer3Checked = document.getElementById('layer3CheckBox').checked;
    var layers = '&LAYERS='
    if(layer1Checked){
        layers = layers+MAPLAYERS.layer1+','
    }
    if(layer2Checked){
        layers = layers+MAPLAYERS.layer2+','
    }
    if(layer3Checked){
        layers = layers+MAPLAYERS.layer3+','
    }
    if (layers.length > 1){
        layers = layers.substring(0,layers.length-1);
    }
    
    UPDATED_LAYERS.layers = layers;
    updateMap();
}


/*
This variable is a javaScript function.
It builds the GetMap url based on the values from UPDATED_BBOX and UPDATED_LAYERS objects.
Lastly, it gets the tag with id 'imgMap' (which is the img tag for the map) and updates the src attribute to the new url.


*/
var updateMap = function(){
    var baseUrl= 'http://stark.nateko.lu.se:8080/geoserver/wms?service=WMS&version=1.1.1&request=GetMap&styles=&width=460&height=460&srs=EPSG:4326&format=image/png';
    var bbox = '&BBOX='+ UPDATED_BBOX.x1 +','+UPDATED_BBOX.y1+','+UPDATED_BBOX.x2+','+UPDATED_BBOX.y2;
    var newUrl = baseUrl+UPDATED_LAYERS.layers+bbox;
    var imgMap = document.getElementById('imgMap').src = newUrl;
}

