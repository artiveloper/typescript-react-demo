import React, {useCallback, useState} from 'react'
import Number from "./Number";
import {Form, Input} from "./Input";

function App() {

    const [counter, setCounter] = useState<number>(0)
    const [name, setName] = useState<string>('')

    const add = useCallback(() => {
        setCounter(counter + 1)
    }, [counter])

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    return (
        <div>
            <Form>
                <Input value={name} onChange={onChange} />
            </Form>

            <Number count={counter}/>
            <button onClick={add}>ADD</button>
        </div>
    )
}

export default App
