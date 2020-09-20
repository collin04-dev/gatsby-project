import React, { useState } from "react"
import { firestore } from "../../firebase.js"

export default function CommentForm({page}) {

    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    const handleCommentSubmission = async e => {
        e.preventDefault()

        let comment = {
            Name: name,
            Message: message,
            Page: page,
            Created: new Date()
        }

        setName("")
        setMessage("")

        firestore.collection(`comments`).add(comment).catch(err => {
            console.error('Error adding comment: ', err)
        })
    }

    return (
        <>
            <h4>Leave your comment</h4>

            <form onSubmit={ e => handleCommentSubmission(e) }>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" htmlFor="name">Your Name</label>
                    </div>
                    <input type="text" name="name" class="form-control" value={name} required onChange={e => setName(e.target.value)} />
                </div>
                <br/>
                <div class="form-group">  
                    <label htmlFor="message">Your Comments</label>
                    <textarea name="message" class="form-control" value={message} required onChange={e => setMessage(e.target.value)}></textarea>
                    <br/>
                    <button className="btn btn-outline-primary">Submit</button>
                </div>
            </form>
        </>
    )
}