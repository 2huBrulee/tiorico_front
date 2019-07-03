import { ActionTypes } from './Types';
import { RestDataSource } from './RestDataSource';

const dataSource = new RestDataSource();

export const loadTransactions = (dataType) => ({
    type: ActionTypes.TRANSACTION_LOAD,
    payload: dataSource.GetData(dataType)
        .then(response =>({ dataType, data: response.data.data}))
});