// Function that concatenates the values in the fields to a WMS GetMap query
function compileRequest() {
	// Local variables, only reachable in this function. getElementById is a DOM command; http://www.quirksmode.org/dom/w3c_core.html
    var WMSQuery;
	var WMSURL = document.getElementById('WMSURL');
    var WMSLayers = document.getElementById('WMSLayers');
    var WMSStyles = document.getElementById('WMSStyles');
    var WMSCRS = document.getElementById('WMSCRS');
    var WMSXmin = document.getElementById('WMSXmin');
    var WMSYmin = document.getElementById('WMSYmin');
    var WMSXmax = document.getElementById('WMSXmax');
    var WMSYmax = document.getElementById('WMSYmax');
    var WMSFormat = document.getElementById('WMSFormat');
    var WMSWidth = document.getElementById('WMSWidth');
    var WMSHeight = document.getElementById('WMSHeight');
   
    // Add code
    
	// Create a string by adding pieces together (string concatenation)
	WMSQuery = WMSURL.value + "VERSION=1.3&REQUEST=GetMap";
    WMSQuery += "&LAYERS=" + WMSLayers.value;
    WMSQuery += "&STYLES=" + WMSStyles.value;
	WMSQuery += "&CRS=" + WMSCRS.value;
	WMSQuery += "&BBOX=" + WMSXmin.value + ',' + WMSYmin.value + ',' + WMSXmax.value + ',' + WMSYmax.value;
	WMSQuery += "&FORMAT=" + WMSFormat.value;
    WMSQuery += "&WIDTH=" + WMSWidth.value;
    WMSQuery += "&HEIGHT=" + WMSHeight.value;

    
    

    // Uncomment the row below to see what your string looks like
    //console.log(WMSQuery);
	//alert(WMSQuery);
	document.getElementById("compiledQuery").value = WMSQuery;
}
// Function that send the WMS GetMap query
function sendRequest(){
	
	window.open(compiledQuery.value)
	}

	