sap.ui.controller("gitdemo_01292018.Sample", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf gitdemo_01292018.Sample
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf gitdemo_01292018.Sample
*/
//	onBeforeRendering: function() {
//
//	},
	
	onCreate: function(){
		alert("Create button pressed")
	},
	
	onDelete: function(){
		alert("Delete button pressed")
	},
	
	onEdit: function(){
		alert("Edit button pressed")
	},
	
	onCancel: function(){
		alert("Cancel button pressed")
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf gitdemo_01292018.Sample
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf gitdemo_01292018.Sample
*/
//	onExit: function() {
//
//	}

});