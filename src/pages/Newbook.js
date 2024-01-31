import { useParams } from "react-router-dom"

export function Newbook(){
    const {newid}=useParams();
    return <h1>New Book {newid}</h1>
}