sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("fiori.fundamentos.controller.View1", {
        onInit() {
        },

        aoPressionarFuncionario(oEvent){

            //resgata o funcionario pressionado
            let oFuncionario = oEvent.getParameters().listItem.getBindingContext("dados");

            //busca o roteador da aplicação
            let oRouter = this.getOwnerComponent().getRouter();

            //efetua a navegação para a rota da View2, passando dois parametros - o nome da rota e um objeto com o id 
            oRouter.navTo("RouteView2", {
                path: oFuncionario.getPath().substring(11)
            });

        }
    });
});