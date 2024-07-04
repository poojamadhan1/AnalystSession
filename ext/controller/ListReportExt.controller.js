sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onClickEditProductButton: function(oEvent) {
            MessageToast.show("Edit Button Clicked");
        }
    };
});