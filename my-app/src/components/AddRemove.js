const AddRemove=(props)=>{
    let add=0;
    const addListener=()=>
    {
        add+=1;
props.onIncrease(add);
    }
    
return(<div><button onClick={addListener}>AddCart</button> </div>)
}
export default AddRemove;