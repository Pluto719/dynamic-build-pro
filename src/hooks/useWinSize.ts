
import { useEffect, useState,useCallback } from 'react'

interface WindowSize {
  width: number
  height: number
}

function useWinSize(){
    const [ size , setSize] = useState<WindowSize>({
        width:window.innerWidth,
        height:window.innerHeight
    })

    const onResize = useCallback(()=>{
        setSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    },[])

    useEffect(()=>{
        window.addEventListener('resize',onResize)
        return ()=>{
            window.removeEventListener('resize',onResize)
        }
    },[])
    
    return size;
}

export default useWinSize
