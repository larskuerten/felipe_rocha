import { useState, useRef } from "react"
import { TriangleAlert, CheckCheck } from 'lucide-react'
import Input from "./Input"


export function AddTask({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const titleRef = useRef(null)

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input
                type="text"
                autoFocus
                placeholder="Task title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <Input
                type="text"
                placeholder="Task description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />

            <button className="btn btn-primary" onClick={() => {
                if (((title.trim()) !== "") & (description.trim()) !== "") {
                    onAddTaskSubmit(title, description)
                    setSuccess(true)
                    setTimeout(() => {
                        setSuccess(false)
                    }, 2000)
                } else {
                    setError(true)
                    setTimeout(() => {
                        setError(false)
                    }, 2000)
                }
                setTitle("")
                setDescription("")

            }}>Add Task</button>
            {error && (<div role="alert" className="alert alert-error transition-all duration-300 ">
                <TriangleAlert />
                <span>Please fill all fields</span>
            </div>)}

            {success && (<div role="alert" className="alert alert-success transition-all duration-300 ">
                <CheckCheck />
                <span>Task successfully added</span>
            </div>)}
        </div>
    )
}