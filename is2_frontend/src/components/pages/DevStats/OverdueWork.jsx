import React, { useEffect} from 'react'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function OverdueWork(props) {
    const percentageProgress= props.percentageProgress;  //valor porcentual para trabajos sin finalizar

    return <>
    <div className='container '>
        <div className='row'>
            <div className='col-4'>
            <CircularProgressbar value={percentageProgress} text={`${percentageProgress}%`} styles={{path: {stroke: `rgba(255, 0, 0, ${percentageProgress / 100})`} , text:{fill:'black'}}} />
            </div>
            <div className='col-6'>
                <p><small>This is some smaller text.</small></p>
            </div>
        </div>
        <div className='row'>

        </div>
    </div>
    </>
}

export default OverdueWork
