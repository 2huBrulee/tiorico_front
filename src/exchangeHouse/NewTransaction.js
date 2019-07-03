import React, { Component } from 'react';
import { TransactionForm } from './TransactionForm';

export class NewTransaction extends Component {

    constructor(...props) {
        super(...props);
        this.defaultAttrs = { type: "text", required: true};
        this.formModel = [
            {label: "Nombre"},
            {label: "Direccion"},
            {label: "DNI"},
            {label: "tipo"},
            {label: "cantidad"}
        ]
    }

    handleSubmit = (formData) => {
        let newTransactionData = {
            idUser: "12",
            idCoinIn: "1",
            idCoinOut: "2",
            clientName: formData.Nombre,
            clientAddress: formData.Direccion,
            clientDocumentType:"DNI",
            clientDocumentNumber: formData.DNI,
            transactionType: formData.tipo,
            quantity: formData.cantidad
        };
        this.props.createTransaction(newTransactionData);
        this.props.history.push("/exhouse/transactions");
    }

    handleCancel = () => {
        this.props.history.push("/exhouse/transactions");
    }

    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col bg-dark text-white">
                    <div className="navbar-brand">NUEVA TRANSACCION</div>
                </div>
            </div>
            <div className="row">
                <div className="col m-2">
                    <TransactionForm formModel={this.formModel}
                        defaultAttrs={this.defaultAttrs}
                        submitCallback={this.handleSubmit}
                        cancelCallback={this.cancelCallback} />
                </div>
            </div>
        </div>
    }
}