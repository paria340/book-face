import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import firebase from '../firebase'


function AccountPage() {
    const { name } = useParams()
    const [thought, setThought] = useState('')
    const [topic, setTopic] = useState('')
    const [comments, setComment] = useState([])


    useEffect(() => {
        const dbRef = firebase.database().ref(`${name}`)
        dbRef.on('value', response => {
            const data = response.val()
            let newArray = []
            for (let key in data) {
                newArray.push(data[key])
            }
            console.log(newArray)
            setComment(newArray)
        })
    }, [])

    function handleFormSubmit(event) {
        event.preventDefault()
        const dbRef = firebase.database().ref(`${name}`)
        dbRef.push(
            {
                'topic' : `${topic}`,
                'thought' : `${thought}`
            }
        )
        setTopic('')
        setThought('')
    }

    function handleTextAreaChange(event) {
        setThought(event.target.value)
    }

    function handleInputChange(event){
        setTopic(event.target.value)
    }


    return (
        <>
            <h1>Welcome {(name)}</h1>
            <form>
                        <label htmlFor="topic" className="visuallyHidden">What's the topic?</label>
                        <input
                            type="text"
                            id="topic"
                            className="topic"
                            value={topic}
                            size={15}
                            onChange={handleInputChange}
                            placeholder="The topic"
                            required
                        />
                        <label htmlFor="thought" className="visuallyHidden">What's on your mind</label>
                        <textarea
                            value={thought}
                            onChange={handleTextAreaChange}
                            id="thought"
                            className="thought"
                            placeholder="Write what's going on in your head!"
                            required
                        />
                        <button onClick={handleFormSubmit}> Submit </button>
            </form>

            <ul className="conversations">
                {
                    comments.map((comment) => {
                        return(
                            <ul>
                                <li>{comment.topic}</li>
                                <p>{comment.thought}</p>
                            </ul>
                        )
                    })
                }
            </ul>
        </>
    )
}
export default AccountPage    