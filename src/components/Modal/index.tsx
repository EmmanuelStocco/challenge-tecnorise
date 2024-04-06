import React from 'react'; 
import { useDispatch } from 'react-redux';
import { resetSingleRepositoryDetails } from '../../store/ducks/singleRepositoryDetails/actions'; 
import {
    ModalCloseButton,
    ModalContainer,
    ModalContent
} from './style';

interface ModalProps {
}

const Modal: React.FC<ModalProps> = () => {
    const dispatch = useDispatch(); 
    const handleClose = () => {
        dispatch(resetSingleRepositoryDetails());
    };
    return (
        <ModalContainer>
            <ModalContent>
                <ModalCloseButton onClick={handleClose}>X</ModalCloseButton> 
            </ModalContent>
        </ModalContainer>
    );
};

export default Modal;