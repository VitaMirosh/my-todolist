export function Reting(props:any){
    console.log("rating rendering")
    if (props.value ===1){
        return(
            <div>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={true}/>
            </div>
        )
    }
    if (props.value ===2){
        return(
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        )
    }
    return(
        <div>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}
function Star (props:any) {
    console.log("Star rendering")
    if (props.selected === true) {
        return <span><b>Star</b>  </span>
    } else {
        return <span>Star  </span>
    }
}