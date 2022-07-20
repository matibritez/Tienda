
export function TextComponent ({stock}){
    return(
        <>
        
        <h3 className={stock===0 ?"alert alert-danger": "alert alert-success"}>
        Stock
        </h3>
        </>
    )
}