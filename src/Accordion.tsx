import {rename} from "fs";

export function  Accordion(props:any) {
    console.log("Hello friend")
    return <div>
       <AccordionTitle name={props.name}/>
        <AccordionBody/>.
    </div>
}
export function  AccordionTitle(props:any) {
    console.log(" ")
    return (
        <h3>{props.name}</h3>
    )
}
export function  AccordionBody() {
    console.log("Accordion rendering")
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

    )

}