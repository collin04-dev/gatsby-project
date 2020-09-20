  
import React from "react"
import "./layout.scss";

export default function Comment({comment}) {
    const timestamp = new Date(comment.Created.toDate())
    const tsMonth = timestamp.getMonth() + 1
    const tsDay = timestamp.getDate()
    const tsYear = timestamp.getFullYear()
    return (
        <>
            <div class="card">
                <div class="row no-gutters">
                    <div class="col-md-1">
                        <img class="round-img" src={"https://api.adorable.io/avatars/50/"+ comment.Name + ".png"} alt={comment.Name} />
                    </div>
                    <div class="col-md-11 text-left">
                        <strong>  {comment.Name} says:</strong>
                        <em> {comment.Message}</em> 
                        <p class="card-subtitle text-muted">
                        <small>{tsMonth}/{tsDay}/{tsYear}</small>
                        </p>
                    </div>
                </div>
                <br/>
            </div>
        </>
    )
}