import React from 'react'; 
import { useDispatch } from 'react-redux';
import { resetSingleRepositoryDetails } from '../../store/ducks/singleRepositoryDetails/actions'; 
import {
    ModalCloseButton,
    ModalContainer,
    ModalContent
} from './style';
import { type SingleRepositoryDetails } from '../../store/ducks/singleRepositoryDetails/types';

interface ModalProps {
    data: SingleRepositoryDetails
}

const Modal: React.FC<ModalProps> = ({ data }) => { 
    console.log('data', data)
    const dispatch = useDispatch(); 
    const handleClose = () => {
        dispatch(resetSingleRepositoryDetails());
    };
    return (
        <ModalContainer>
            <ModalContent>
                <ModalCloseButton onClick={handleClose}>X</ModalCloseButton> 
                {data && <h1>Nome do Repo: {String(data.name)}</h1>} 
                <p>Watchers {data.watchers.totalCount}</p>
                <p>Issues {data.issues.totalCount}</p>
                <p>Estrelas {data.stargazerCount}</p>
                <p>Forks {data.forks.totalCount}</p>
                <p>Descrição {data.description}</p>
                <p>Pull Request {data.pullRequests.totalCount}</p>
                <p>Linguagens utilizadas: {data.languages.nodes.map((e) => e.name)}</p>
                <p>Proprietário: {data.owner.login} </p>





            </ModalContent>
        </ModalContainer>
    );
};

export default Modal;