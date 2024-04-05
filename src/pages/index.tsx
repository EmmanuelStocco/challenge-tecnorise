import React, { ReactNode } from 'react';
import { Container } from './style';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import { Repository } from '../store/ducks/repositories/types';
import { bindActionCreators, Dispatch } from 'redux';
import * as RepositoriesActions from '../store/ducks/repositories/actions';

interface HomePageProps {
  children: ReactNode;
}

interface StateProps {
  repositories: Repository[]
}

interface DispatchProps {
  loadRequest() : void
}

interface OwnProps {
  children: ReactNode;
}

type Props = StateProps & DispatchProps & OwnProps

const HomePage: React.FC<Props> = ({ children, repositories }) => {
  console.log('repositories TESTE AGRESSIVO', repositories)
  return (
    <Container>
      {children}
    </Container>
  );
}; 

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(HomePage);