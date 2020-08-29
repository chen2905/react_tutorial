import React,{useState,useRef}from 'react'
import IdlerTimer from 'react-idle-timer'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Modal from 'react-modal'
function IdleTimerContainer() {
    const idleRef= useRef(null)
    const sessionTimeoutRef= useRef(null)
    const toastMessage=(msg='time out!')=>{

        //toast.warn(msg, { position: 'top-right',fontSize:'large' })
        //console.log('time out')
        if(IsLoggin){
        toggleModal()
            sessionTimeoutRef.current = setTimeout(logout, 5000)
        }
    }

    const [ModalIsOpen, setModalIsOpen] = useState(false)
    const [IsLoggin, setLogin] = useState(true)
    const keepLogin =()=>{
        setLogin(true)
        toggleModal()
        toast.success('You are still in :)', { position: 'top-right',fontSize:'large' })
    
        clearTimeout(sessionTimeoutRef.current)
    }

    const logout =()=>{
        setLogin(false)
        toggleModal()
    
        toast.warn('You are logged out! see you next time :(', { position: 'top-right',fontSize:'large' })
        clearTimeout(sessionTimeoutRef.current)
    }
 
    const toggleModal = () => {
        setModalIsOpen(!ModalIsOpen)
    }


    return (
        <div>
            {IsLoggin?<h2>Welcome Chen Gao</h2>:<h2>Welcome Guest</h2>}

            <IdlerTimer ref={idleRef} timeout={5*1000000} onIdle={toastMessage}/>


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
                <h2>You've been idle for 5 sec</h2>
                <p>You will be logged out soon</p>
                <p><button onClick={keepLogin}>Keep me in</button>
                <button onClick={logout}>Log me out</button></p>

               
            </Modal>
        </div>
    )
}

export default IdleTimerContainer
