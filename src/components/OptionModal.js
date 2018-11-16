import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
        <Modal
            className = "modal"
            isOpen = {!!props.selectedOption}
            contentLabel = "Selected Option"
            closeTimeoutMS = {200}
            onRequestClose = {props.handleDeleteSelectedOption}
        >
            <h2 className = "modal__title">Selected Option</h2>
            {props.selectedOption && <p className = "modal__body"><b>{props.selectedOption}</b></p>}
            <button 
                className = "button "
                onClick = {props.handleDeleteSelectedOption} >
                OKAY
            </button>
        </Modal>
    )

export default OptionModal;