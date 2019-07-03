import React, { Component } from 'react';

const getBeautyDate = (date) => {
    let bDate = Date.parse(date);
    let dateString =  new Date(bDate);
    return dateString.toLocaleString();
}

export class TransactionList extends Component {

    render() {
        if (this.props.transactions == null || this.props.transactions.length === 0) {
            return <h5 className="p-2">No hay transacciones</h5>
        }

        return this.props.transactions.map( transaction => 
            <div className="card m-1 p-1 bg-light" key={transaction.idTransaction}>
                <div>
                    {getBeautyDate(transaction.transactionDate)}
                </div>
                <div>
                    {transaction.clientName + ": " + transaction.clientDocumentType + " " + transaction.clientDocumentNumber}
                </div>
                <div>
                    {transaction.mountInt.substring(0,8) + "  ==>>  " + transaction.mountOut.substring(0,8)}
                </div>
                <span></span>
            </div>
        );
    }
}
