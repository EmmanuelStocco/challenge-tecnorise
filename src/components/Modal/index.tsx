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
    const dispatch = useDispatch(); 
    const handleClose = () => {
        dispatch(resetSingleRepositoryDetails());
    };
    return (
        <ModalContainer>
            <ModalContent>
                <ModalCloseButton onClick={handleClose}>X</ModalCloseButton> 
                {data && <h1>{String(data.name)}</h1>}
                {data && <h1>{String(data.watchers)}</h1>}

            </ModalContent>
        </ModalContainer>
    );
};

export default Modal;