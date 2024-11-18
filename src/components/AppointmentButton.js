import { useState } from 'react';
import './AppointmentButton.scss';
import FormAlert from './FormAlert';
import FormComponent from './FormComponent';

const AppointmentButton = ({label = "Open Form"}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return(
        <div>
            <button className="alert-button border-0 m-0" onClick={handleOpenModal}>{label}</button>
            <FormAlert isOpen={isModalOpen} onClose={handleCloseModal}>
                <FormComponent />
            </FormAlert>
        </div>
    );
};

export default AppointmentButton;