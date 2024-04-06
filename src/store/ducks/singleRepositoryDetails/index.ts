import { Reducer } from "redux";
import { SingleRepositoryDetailsState, SingleRepositoryDetailsTypes } from "./types";

const INITIAL_STATE: SingleRepositoryDetailsState = {
    data: {
      name: "",
      description: "",
      owner: {
        login: ""
      },
      createdAt: "",
      updatedAt: "",
      stargazerCount: 0,
      watchers: {
        totalCount: 0
      },
      forks: {
        totalCount: 0
      },
      languages: {
        nodes: [{
          name: ""
        }]
      },
      issues: {
        totalCount: 0
      },
      pullRequests: {
        totalCount: 0
      },
      defaultBranchRef: {
        target: {
          history: {
            totalCount: 0
          }
        }
      }
    },
    error: false,
    loading: false
  };
  

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