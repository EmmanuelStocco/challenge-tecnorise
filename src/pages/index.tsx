import React, { ReactNode, useEffect } from 'react';
import { Container } from './style';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import { Repository } from '../store/ducks/repositories/types';
import { SingleRepositoryDetails } from '../store/ducks/singleRepositoryDetails/types'
import { bindActionCreators, Dispatch } from 'redux';
import * as RepositoriesActions from '../store/ducks/repositories/actions';
import { SearchBar } from '../components/SearchBar'; 
import TextIntro from '../components/TextTitle'; 

interface HomePageProps {
  children: ReactNode;
}

interface StateProps {
  repositories: Repository[]
  singleRepositoryDetails: SingleRepositoryDetails
}

interface DispatchProps {
  loadRequest(searchTerm: string): void;
}

interface OwnProps {
  children: ReactNode;
}

type Props = StateProps & DispatchProps & OwnProps;

const HomePage: React.FC<Props> = (props) => {
  const { loadRequest, repositories, singleRepositoryDetails } = props;

  const handleSearch = (searchTerm: string) => { 
    loadRequest(searchTerm);
  };

  useEffect(() => {
    console.log('repositories XXX', repositories);
    console.log('singleRepositoryDetails', singleRepositoryDetails)
  }, [repositories]);

  return (
    <Container>
      <TextIntro title='Pesquise o repositório'/>
      <SearchBar handleSearch={handleSearch} />   
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
  singleRepositoryDetails: state.singleRepositoryDetails.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
