import React from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

function ToolTip() {

    const clsGold = { color: 'gold' }
    const PrayerTooltip = () => {
        return (
            <span style={{ color: 'gold' }}>Hello, God! please bless and protect my families! Thank you so much!</span>
        )

    }
    return (
        <div>
            <h2>tippy demo</h2>
            <div style={{ paddingBottom: '20px' }}>
                <Tippy content='Hello, God! please bless and protect my families! Thank you so much!'>
                    <button>Pray to me</button>
                </Tippy>
            </div>

            <div style={{ paddingBottom: '20px' }}>

                <Tippy content={PrayerTooltip()}>
                    <button>Pray to me</button>
                </Tippy>
            </div>

            <div style={{ paddingBottom: '20px' }} >

    <Tippy content={<PrayerTooltip/>} delay={100} placement='right'>
                    <button>Pray to me</button>
                </Tippy>
            </div>
        </div>
    )
}

export default ToolTip
