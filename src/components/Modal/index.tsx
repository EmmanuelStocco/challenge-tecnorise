import React from 'react'; 
import { useDispatch } from 'react-redux';
import { resetSingleRepositoryDetails } from '../../store/ducks/singleRepositoryDetails/actions'; 
import {
    ModalCloseButton,
    ModalContainer,
    ModalContent
} from './style';
import { type SingleRepositoryDetails } from '../../store/ducks/singleRepositoryDetails/types';
import { FaEye, FaStar, FaCodeBranch, FaCode, FaUser, FaExclamationTriangle, FaBook, FaGit } from 'react-icons/fa';

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
                
                <h1> {data.name}</h1> 
                <p>{data.description}</p>

                <div>
                    <p><FaEye style={{ color: 'blueviolet' }}/> Seguidores: {data.watchers.totalCount}</p>
                    <p><FaExclamationTriangle style={{ color: 'darkorange' }}/>Issues: {data.issues.totalCount}</p>
                    <p><FaStar style={{ color: 'yellow' }}/><FaStar style={{ color: 'yellow' }}/><FaStar /> Estrelas: {data.stargazerCount}</p>
                    <p><FaCodeBranch style={{ color: 'orange' }} />Forks: {data.forks.totalCount}</p>
                    <p><FaCode style={{ color: 'black' }}/> Pull Request: {data.pullRequests.totalCount}</p>
                    <p><FaUser style={{ color: 'maroon' }}/> Proprietário: {data.owner.login} </p>  
                    <p><FaGit style={{ color: 'black' }}/> Commits totais: {data.defaultBranchRef.target.history.totalCount} </p>  
                    <p>
                    <FaBook /> Linguagens utilizadas: {data.languages.nodes.map((e) => e.name).join(', ')}
                    </p> 
                </div>
                    
                    
            </ModalContent>
        </ModalContainer>
    );
};

export default Modal;