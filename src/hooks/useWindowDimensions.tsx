import {useState, useEffect} from 'react';

interface Dim {
    height: number,
    width: number
}

function getWindowDimensions(){
    const height = window.innerHeight;
    const width = window.innerWidth;
    return {
        height,
        width
    }
}

export default function useWindowDimensions (){
    
    const [wDimentions, setWDimensions] = useState<Dim>({height: 0, width: 0});

    useEffect(() => {     
        setWDimensions(getWindowDimensions())
    },[wDimentions])

    return wDimentions
}