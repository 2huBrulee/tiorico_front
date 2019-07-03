import { ActionTypes } from './Types';

export const TransactionReducer = ( storeData, action) => {
    switch(action.type) {
        case ActionTypes.TRANSACTION_LOAD:
            return {
                ...storeData,
                [action.payload.dataType]: action.payload.data
            }
        default:
            return storeData || {};
    }
}
