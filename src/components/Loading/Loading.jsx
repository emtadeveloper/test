import React from 'react'
import { Vortex } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Vortex
                visible={true}
                height="150"
                width="150"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
        </div>
    )
}

export default Loading
