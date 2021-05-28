import React from 'react'

const Band = props => {
    console.log('BandInfo',props)
    return (
        <li>{props.band}</li>
    )
}

export default Band