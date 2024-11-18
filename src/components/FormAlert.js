import './FormAlert.scss';

const FormAlert=({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return(
        <div className='alert-modal-overlay d-flex align-items-center justify-content-center'>
            <div className='alert-modal position-relative'>
                <button className='close-btn position-absolute' onClick={onClose}>
                    &times;
                </button>
                <div className='alert-modal-content'>{children}</div>
            </div>
        </div>
    );
};

export default FormAlert;