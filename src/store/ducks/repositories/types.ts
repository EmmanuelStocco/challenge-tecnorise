export  enum RepositoriesTypes {
    LOAD_REQUEST = '@repositories/LOAD_REQUEST',
    LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
    LOAD_FAILURE = '@repositories/LOAD_FAILURE',
    RESET_REPOSITORY = '@repositories/RESET_REPOSITORIES',
};

export interface Repository {
    id: string;
    name: string;
    description: string;
    owner: {
        login: string;
    };
}

export interface RepositoriesState {
    readonly data: Repository[]
    readonly loading: boolean
    readonly error: boolean
}