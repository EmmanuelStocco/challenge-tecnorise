import {action} from 'typesafe-actions'
import { RepositoriesTypes, Repository } from './types'

export const loadRequest = (searchTerm: string) =>
     action(RepositoriesTypes.LOAD_REQUEST, { searchTerm });

export const loadSuccess = (data: Repository[]) =>
     action(RepositoriesTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => 
    action(RepositoriesTypes.LOAD_FAILURE);

export const resetRepository = () =>
    action(RepositoriesTypes.RESET_REPOSITORY);