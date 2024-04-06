import React from 'react'; 
import { useDispatch } from 'react-redux';
import { resetSingleRepositoryDetails } from '../../store/ducks/singleRepositoryDetails/actions'; 
import {
    ModalCloseButton,
    ModalContainer,
    ModalContent,
    ModalDescription
} from './style';
import { SingleRepositoryDetails } from '../../store/ducks/singleRepositoryDetails/types';
import { FaEye, FaStar, FaCodeBranch, FaCode, FaUser, FaExclamationTriangle, FaBook, FaGit } from 'react-icons/fa';

interface ModalProps {
    data: SingleRepositoryDetails
}

const Modal: React.FC<ModalProps> = ({ data }) => {
    const dispatch = useDispatch(); 
    const handleClose = () => {
        dispatch(resetSingleRepositoryDetails());
    };

    const dateFormatter = (date: string) => {
        const regex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})Z$/;
        const match = date.match(regex);
        
        if (match) {
          const [, ano, mes, dia] = match;
          return `${dia}/${mes}/${ano}`;
        }
      
        return date;
    };  

    const renderInfo = (label: string, value: string | number, icon: JSX.Element, color: string) => (
        <p key={label}>
            {icon && React.cloneElement(icon, { size: 24, style: { color } })}
            {label}: {value}
        </p>
    );

    return (
        <ModalContainer> 
            <ModalContent> 
                <ModalCloseButton onClick={handleClose}>X</ModalCloseButton> 
                
                <h1>{data.name}</h1> 
                <ModalDescription>{data.description}</ModalDescription>

                <div>
                    {renderInfo('Seguidores', data.watchers.totalCount, <FaEye />, 'blueviolet')}
                    {renderInfo('Issues', data.issues.totalCount, <FaExclamationTriangle />, 'darkorange')}
                    {renderInfo('Estrelas', data.stargazerCount, <FaStar />, 'yellow')}
                    {renderInfo('Forks', data.forks.totalCount, <FaCodeBranch />, 'orange')}
                    {renderInfo('Pull Request', data.pullRequests.totalCount, <FaCode />, 'black')}
                    {renderInfo('Proprietário', data.owner.login, <FaUser />, 'maroon')}
                    {renderInfo('Commits totais', data.defaultBranchRef.target.history.totalCount, <FaGit />, 'black')}
                    {renderInfo('Última Att', dateFormatter(data.updatedAt), <FaBook />, 'black')}
                </div>
            </ModalContent>
        </ModalContainer>
    );
};

export default Modal;
