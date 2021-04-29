import fetchStoreData from "../../../utils/fetchStoreData";
import  request  from "../../../utils/request/request";
import { startLoadingAuth, handlerSuccessLoadingAuth, handlerErrorLoadingAuth } from "../common";

export function authRegistation (payload){
    return (dispatch) => fetchStoreData({
            dispatch,
            startLoading: startLoadingAuth,
            handlerSuccess: handlerSuccessLoadingAuth,
            handlerError: handlerErrorLoadingAuth,

            fetch: async () => { await request('/api/auth/registration', 'POST', {...payload})}
        }
    )
}
