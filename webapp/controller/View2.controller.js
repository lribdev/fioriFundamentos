sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "fiori/fundamentos/model/formatter"
], (Controller, Fragment, Formatter) => {
    "use strict";

    return Controller.extend("fiori.fundamentos.controller.View2", {
        formatter: Formatter,
        onInit() {

            //variável para o fragmento
            this.oFragmento;

            //busca a classe roteadora
            let oRouter = this.getOwnerComponent().getRouter();


            //associa o evento pattern matched para a rota da view 2
            oRouter.getRoute("RouteView2").attachPatternMatched(this._rotaView2, this);

        },

        _rotaView2(oEvent){

            //resgata o id do funcionario
            let caminhoFuncionario = oEvent.getParameters().arguments.path;

            //resgata a página e vincula os dados do modelo 
            this.byId("page2").bindElement({
                path: "/employees/" + caminhoFuncionario, //concatenação de strings
                model: "dados"
            });

            //instancia o fragmento
            if(!this.oFragmento){
                let oPromessaDoFragment = Fragment.load({
                    id: this.getView().getId(), //podemos usar o ID da view
                    name: "fiori.fundamentos.view.fragment.detalhes",
                    controller: this 
                });


                //a Promise caso resolvida com sucesso, vai chamaar uma função que está associada ao método Then da promise
                oPromessaDoFragment.then(oFragment => {
                    //adiciona o fragmento como dependente da View
                    this.getView().addDependent(oFragment);

                    //exibe o fragmento na pagina
                    this.getView().byId("page2").addContent(oFragment);

                    //guardando como referência futura
                    this.oFragmento = oFragment;
                });
            }

        }

    });
});