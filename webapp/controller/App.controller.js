sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";

	return Controller.extend("sap.ui.bootcampWebapp.controller.App", {
		
		onInit: function() {
			//set data model on view
			var oData = {
				field : {
					username : "Username"
				}
			};
				
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
			
			// set i18n model on view
			var i18nModel = new ResourceModel({
				bundleName: "sap.ui.bootcampWebapp.i18n.i18n"
			});
			this.getView().setModel(i18nModel, "i18n");
		},
			
		onLoginPress: function(){
			// var oUsername = this.getView().byId("idUser").getValue();
			// var oPassword = this.getView().byId("idPW").getValue();
			
			// if (oUsername !== "" && oPassword !== ""){
			// 	if ((oUsername.length >= 6 && oUsername.length <=8) && (oPassword.length >= 7 && oPassword.length <= 10)){
			// 		if (oUsername === "Janine" && oPassword === "Testpass"){
			// 			MessageToast.show("Hello " + oUsername);
			// 		}else{
			// 			MessageToast.show("Incorrect username and password");
			// 		}
			// 	}else{
			// 		MessageToast.show("Username must be 6 to 8 characters ONLY and Password must be 7 to 10 characters ONLY");
			// 	}
			// }else{
			// 	MessageToast.show("Please enter username and password");
			// }
			
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/field/username");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			
			// show message
			MessageToast.show(sMsg);
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.ui.bootcampWebapp.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.ui.bootcampWebapp.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.ui.bootcampWebapp.view.App
		 */
		//	onExit: function() {
		//
		//	}

	});

});