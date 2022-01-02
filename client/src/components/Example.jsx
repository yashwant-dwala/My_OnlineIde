import * as React from 'react';
import {useState} from 'react'

const Example = ({state}) => {
    const [photo, setphoto] = useState(state.pic)
    const [No, setNo] = useState(state.title)
    return (
        <div className="Example">
            <h3 className='Ename'>{No}</h3>
            <img className='Eimg' src={photo} />
        </div>
    );
}

export default Example;
