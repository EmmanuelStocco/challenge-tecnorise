import {action} from 'typesafe-actions';
import { SingleRepositoryDetailsTypes, SingleRepositoryDetails } from './types';


export const loadSingleRepositoryRequest = (repoName: string, repoUser: string) =>
  action(SingleRepositoryDetailsTypes.LOAD_REQUEST, { repoName, repoUser });

export const loadSingleRepositorySuccess = (data: SingleRepositoryDetails) =>
  action(SingleRepositoryDetailsTypes.LOAD_SUCCESS, { data });

export const loadSingleRepositoryFailure = () =>
  action(SingleRepositoryDetailsTypes.LOAD_FAILURE);

export const resetSingleRepositoryDetails = () =>
  action(SingleRepositoryDetailsTypes.RESET_SINGLE_REPOSITORY_DETAILS);