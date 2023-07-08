sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("UsersCrud.controller.Main", {
		onInit: function() {

			//var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZUSERS_SRV");
			//sap.ui.getCore().setModel(oModel, "myModel");

		},
		onCreate: function() {
			// create the body object 
			debugger;
			var obj = {};
			obj.id = this.getView().byId("ID").getValue();
			obj.name = this.getView().byId("name").getValue();
			obj.email = this.getView().byId("email").getValue();
			obj.phone = this.getView().byId("phone").getValue();

			var oModel = this.getOwnerComponent().getModel();

			oModel.create('/UsersInfoSet', obj, {
				success: function(oData, Response) {
					alert("Record Created Successfully..!");
				},
				error: function(err, oResponse) {
					alert('Error while creating record - '
						.concat(err.response.statusText));
				}
			});
		},
		onRead: function() {
			debugger ;
			var oModel = this.getOwnerComponent().getModel();
			oModel.read('/UsersInfoSet',{
				 
				success: function(oData) {
					debugger ;
					alert(oData.results);
				},
				error: function(err, oResponse) {
					alert('Error while creating record - '
						.concat(err.response.statusText));

				}
			});

		},
		onUpdate: function() {

		},
		onDelete: function() {

			}
			// oDataCall:function(){
			// perform functions based on which button had been pressed 
			//	debugger ;
			// 	var myModel = sap.ui.getCore().getModel("myName") ;
			// 	myModel.setHeaders({
			// 		"X-Requested-With" : "X"
			// 	});

		// pooost
		// 	if("Create" == oEvent.oSource.mProperties.text){

		//	}
		//}

	});
});