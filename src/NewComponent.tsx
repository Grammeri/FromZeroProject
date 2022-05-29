import React, {useRef} from 'react';

type propsType={
    title:string
}

export const NewComponent:React.FC<propsType>=({title,children})=>{
    let myRef=useRef<HTMLInputElement>(null)

    const onClickHandler=()=>{
        if(myRef.current){
            console.log(myRef.current.value)
        }

    }

    return(
        <div>
            <h1>{title}</h1>
            <input ref={myRef}/>
            <button onClick={onClickHandler}>+</button>

            {children}
            <button>Ok</button>
            <button>No</button>
        </div>
    )
}