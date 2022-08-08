const Button=(props)=>{
    const {label,handleClick,   className,}=props;
    return(
        // <div className={className}>
        <button className={className} onClick={()=>handleClick()}>{label}</button>
        
    );
}
export default Button;