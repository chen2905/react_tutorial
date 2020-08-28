import React, {useState} from 'react';
import Modal from 'react-modal'


Modal.setAppElement('#root')
function ModalReact() {
    const [ModalIsOpen, setModalIsOpen] = useState(false)
    const toggleModal = () => {
        setModalIsOpen(!ModalIsOpen)
    }
    return (
        <div>
            <h2>React Modal demo</h2>
            <button onClick={toggleModal}>Open Modal to pray to the God!</button>
            <Modal isOpen={ModalIsOpen} onRequestClose={toggleModal}
                style={
                    {
                        overlay: {
                            backgroundColor: 'grey'
                        },
                        content: {
                            color: 'gold'
                        }
                    }
                }
            >
                <h2>Holy God!</h2>
                <p>Please bless my families!</p>
                <p>Thank you so much!</p>

                <button onClick={toggleModal}>Finish the pray</button>
            </Modal>
        </div>
    )
}

export default ModalReact
