import React from 'react';
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
import Modal from '../components/Modal';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

interface StateProps {
  repositories: Repository[]
  singleRepositoryDetails: {repository: SingleRepositoryDetails}
};

interface DispatchProps {
  loadRequest(searchTerm: string): void;
  loadSingleRepository(repoName: string, repoUser: string): void;
};

interface OwnProps { 
  darkThemeCurrent: boolean;
  toggleTheme: () => void;
};

type Props = StateProps & DispatchProps & OwnProps;

const HomePage: React.FC<Props> = (props) => {
  const { 
    repositories,
    singleRepositoryDetails,
    loadRequest
  } = props;

  const handleSearch = (searchTerm: string) => { 
    loadRequest(searchTerm);
  }; 

  return (
    <Container>
      <DarkModeSwitch
      style={{  marginTop: '1rem' }}
      checked={props.darkThemeCurrent}
      onChange={props.toggleTheme}
      size={100}
    />
      <TextIntro title='Pesquise o repositório'/>
      <SearchBar handleSearch={handleSearch} />   
       
      {
        repositories.length > 0 && <RepositoryTable  repositories={repositories} />
      } 

      {
        !!singleRepositoryDetails && 
        <Modal data={singleRepositoryDetails.repository} />
      }
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
