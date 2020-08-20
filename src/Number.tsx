import React from 'react'

interface IProps {
    count: number
}

const Number: React.FunctionComponent<IProps> = ({count}) => {
    return (
        <div>
            {count}
        </div>
    )
}

export default Number
