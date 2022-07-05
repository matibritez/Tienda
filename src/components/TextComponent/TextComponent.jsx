
export function TextComponent ({stock}){
    

    return(
        <>
        <h3 className={ (stock>0)? "alert alert-sucess": "alert alert-danger"}>
        Stock:
        </h3>
        </>
    )
}