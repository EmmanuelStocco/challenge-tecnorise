import React from 'react'; 
import { useDispatch } from 'react-redux';
import { resetSingleRepositoryDetails } from '../../store/ducks/singleRepositoryDetails/actions'; 
import {
    ModalCloseButton,
    ModalContainer,
    ModalContent,
    ModalDescription
} from './style';
import { type SingleRepositoryDetails } from '../../store/ducks/singleRepositoryDetails/types';
import { FaEye, FaStar, FaCodeBranch, FaCode, FaUser, FaExclamationTriangle, FaBook, FaGit } from 'react-icons/fa';

interface ModalProps {
    data: SingleRepositoryDetails
}

const Modal: React.FC<ModalProps> = ({ data }) => {
    const dispatch = useDispatch(); 
    const handleClose = () => {
        dispatch(resetSingleRepositoryDetails());
    };

    const dateFormatter = (data: string) => {
        const regex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})Z$/;
        const match = data.match(regex);
        
        if (match) {
          const [, ano, mes, dia] = match;
          return `${dia}/${mes}/${ano}`;
        }
      
        return data;
    }; 

      

    return (
        <ModalContainer> 
            <ModalContent> 
                <ModalCloseButton onClick={handleClose}>X</ModalCloseButton> 
                
                <h1> {data.name}</h1> 
                <ModalDescription>{data.description}</ModalDescription>

                <div>
                    <p><FaEye size={24} style={{ color: 'blueviolet' }}/> Seguidores: {data.watchers.totalCount}</p>
                    <p><FaExclamationTriangle size={24} style={{ color: 'darkorange' }}/>Issues: {data.issues.totalCount}</p>
                    <p><FaStar size={24} style={{ color: 'yellow' }}/> Estrelas: {data.stargazerCount}</p>
                    <p><FaCodeBranch size={24} style={{ color: 'orange' }} />Forks: {data.forks.totalCount}</p>
                    <p><FaCode size={24} style={{ color: 'black' }}/> Pull Request: {data.pullRequests.totalCount}</p>
                    <p><FaUser size={24} style={{ color: 'maroon' }}/> Proprietário: {data.owner.login} </p>  
                    <p><FaGit size={24} style={{ color: 'black' }}/> Commits totais: {data.defaultBranchRef.target.history.totalCount} </p>  
                    <p>
                    <FaBook size={24} /> Última Att: {dateFormatter(data.updatedAt)}
                    </p> 
                </div>
                    
                    
            </ModalContent>
        </ModalContainer>
    );
};

export default Modal;