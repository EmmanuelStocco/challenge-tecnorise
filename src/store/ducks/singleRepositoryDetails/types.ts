export  enum SingleRepositoryDetailsTypes {
    LOAD_REQUEST = '@singleRepositoryInfos/LOAD_REQUEST',
    LOAD_SUCCESS = '@singleRepositoryInfos/LOAD_SUCCESS',
    LOAD_FAILURE = '@singleRepositoryInfos/LOAD_FAILURE',
    RESET_SINGLE_REPOSITORY_DETAILS = '@singleRepositoryInfos/RESET_SINGLE_REPOSITORY_DETAILS',
};

export interface SingleRepositoryDetails {
    name: string;
    description: string;
    owner: {
        login: string;
    };
    createdAt: string;
    updatedAt: string;
    stargazerCount: number;
    watchers: {
        totalCount: number;
    };
    forks: {
        totalCount: number;
    };
    languages: {
        nodes: {
            name: string;
        }[];
    };
    issues: {
        totalCount: number;
    };
    pullRequests: {
        totalCount: number;
    };
    defaultBranchRef: {
        target: {
            history: {
                totalCount: number;
            };
        };
    };
}


export interface SingleRepositoryDetailsState {
    readonly data: SingleRepositoryDetails | null | any
    readonly loading: boolean
    readonly error: boolean
}