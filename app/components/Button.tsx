



export default function Button(props: any){



    return(
        <button
        type={props.type || "button"}
        onClick={props.onClick}
        className={`${props.className || ""}`}
        >
            {props.text}
        </button>
    )
}