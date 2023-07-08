sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, JSONModel, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("MasterDSearch.controller.View1", {
		onInit: function() {

			var oEmpData = {
				"emp": [{
					"empid": "1",
					"empname": "Hazem Fadil",
					"exp": "3",
					"age": "22",
					"city": "cairo",
					"country": "Egypt",
					"designation": "SAP ABAP Developer",
					"projects": [{
						"projectid": "IGI",
						"projectname": "IGI Construction"
					}, {
						"projectid": "Ginza",
						"projectname": "Ginza for Real state"
					}]
				}, {
					"empid": "2",
					"empname": "Mohamed Khaled",
					"exp": "3",
					"age": "24",
					"city": "Gaza",
					"country": "Palastine",
					"designation": "Software Engineer",
					"projects": [{
						"projectid": "MC1",
						"projectname": "Milling Company"
					}, {
						"projectid": "Lamar",
						"projectname": "Lamar"
					}]
				}, {
					"empid": "3",
					"empname": "Ahmed Fawzy",
					"exp": "5",
					"age": "34",
					"city": "Giza",
					"country": "Egypt",
					"cadre": "Band 3",
					"designation": "Sr. Software Engineer",
					"projects": [{
						"projectid": "ABC",
						"projectname": "ABC Implementation"
					}, {
						"projectid": "SCM",
						"projectname": "Sharja "
					}]
				}]
			};
			var oModel = new JSONModel(oEmpData);
			this.getView().setModel(oModel);
			
		//	oModel.setData(oEmpData) ;
		},
		onItemPress: function(oEvent) {
			var oItem = oEvent.getSource();
			var oBD = oItem.getBindingContext();
			var Path = oBD.getPath();
			this.getView().byId("projectlistid").bindElement(Path);
		},

		onSearch: function(oEvent) {

			var filter = [];
			var query = oEvent.getParameter("query");
			var oFilter = new Filter("empname", FilterOperator.Contains, query);
			filter.push(oFilter);
			var obinding = this.getView().byId("emplist").getBinding("items");
			obinding.filter(filter);
		}
	});
});