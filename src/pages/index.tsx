import React, { ReactNode, useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import { Repository } from '../store/ducks/repositories/types';
import { SingleRepositoryDetails } from '../store/ducks/singleRepositoryDetails/types';
import { loadSingleRepositoryRequest } from '../store/ducks/singleRepositoryDetails/actions';
import * as RepositoriesActions from '../store/ducks/repositories/actions';
import { Container } from './style';
import { SearchBar } from '../components/SearchBar'; 
import TextIntro from '../components/TextTitle'; 
import { RepositoryTable } from '../components/RepositoryTable';

interface StateProps {
  repositories: Repository[]
  singleRepositoryDetails: SingleRepositoryDetails
};

interface DispatchProps {
  loadRequest(searchTerm: string): void;
  loadSingleRepository(repoName: string, repoUser: string): void;
};

interface OwnProps {
  children: ReactNode;
};

type Props = StateProps & DispatchProps & OwnProps;

const HomePage: React.FC<Props> = (props) => {
  const { 
    repositories,
    singleRepositoryDetails,
    loadRequest,
    loadSingleRepository 
  } = props;

  const handleSearch = (searchTerm: string) => { 
    loadRequest(searchTerm);
  };

  // const handleLoadSingleRepository = () => {
  //   loadSingleRepository('react', 'facebook');
  // };

  // useEffect(() => {
  //   // console.log('repositories XXX', repositories);
  //   // console.log('singleRepositoryDetails', singleRepositoryDetails)
  // }, [repositories, singleRepositoryDetails]);

  return (
    <Container>
      <TextIntro title='Pesquise o repositório'/>
      <SearchBar handleSearch={handleSearch} />   
      {/* <button onClick={handleLoadSingleRepository}>Load Single Repository</button>    */}
      <RepositoryTable  repositories={repositories} />
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
  singleRepositoryDetails: state.singleRepositoryDetails.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ ...RepositoriesActions, loadSingleRepository: loadSingleRepositoryRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
