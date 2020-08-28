import React from 'react'
//ICON
import { AiFillTwitterCircle } from 'react-icons/ai'
import { MdFavorite } from 'react-icons/md'
import { IconContext } from 'react-icons'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
function Icon() {
    const clickHeartHandler = () => {
        toast('I love you, God!', { position: 'top-center' })
        toast.success('I love you, God!', { position: 'top-left', autoClose: 1000 })
        toast.warn(<CustomToast />, { position: 'top-right', autoClose: false })
        toast.error('I love you, God!', { position: 'bottom-center', autoClose: 8000 })
    }
    const CustomToast = ({ closeToast }) => {
        return (
            <div>oh Mighty God! please bless my families!
                <button onClick={closeToast}>close</button>
            </div>
        )
    }
    return (
        <div>
            <h2>React Icons with Toast popup demo</h2>
            <IconContext.Provider value={{ color: 'red', size: '5rem' }}>
                <div>
                    <AiFillTwitterCircle color='blue' />
                    <MdFavorite onClick={clickHeartHandler} />
                </div>
            </IconContext.Provider>
        </div>
    )
}

export default Icon
