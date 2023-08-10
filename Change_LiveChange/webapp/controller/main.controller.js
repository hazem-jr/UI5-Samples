sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Change_LiveChange.controller.main", {
        onChange:function(){
        	
        	// Fire after press enter 
        	var inp1Value = this.getView().byId("id_change").getValue() ;                         
        	if(inp1Value == "Fire"){
        		alert("Fire!") ;
        	}
        	
        },
        onLiveChange:function(){
        	//Fire live after write the value 
        	var inp1Value = this.getView().byId("id_liveChange").getValue() ;                         
        	if(inp1Value == "Fire"){
        		alert("Fire!") ;
        	}        	 
        }
	});
});