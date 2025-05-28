export const stringGrabber = (e, stringSetter)=>{
    e.preventDefault()

    const data = e.target.value     
    console.log(data);
       
    stringSetter(data)
    
}

export const integerGrabber = (e, integerSetter)=>{
    e.preventDefault()

    const data = parseInt(e.target.value)
    integerSetter(data)
    
}