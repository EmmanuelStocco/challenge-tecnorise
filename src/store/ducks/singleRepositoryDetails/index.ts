import { Reducer } from "redux";
import { SingleRepositoryDetailsState, SingleRepositoryDetailsTypes } from "./types";

const INITIAL_STATE: SingleRepositoryDetailsState  = {
    data: [{test: 'emmanuel'}],
    error: false,
    loading: false
}

const reducer: Reducer<SingleRepositoryDetailsState> = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case SingleRepositoryDetailsTypes.LOAD_REQUEST:
            return { ...state, loading: true};
        case SingleRepositoryDetailsTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data};
        case SingleRepositoryDetailsTypes.LOAD_FAILURE: 
            return { ...state, loading: false, error: true, data: null };
        default: 
            return state;
    }
};

export default reducer;