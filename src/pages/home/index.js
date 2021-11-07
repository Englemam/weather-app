import React from 'react'

import useLocation from '../../hooks/useLocation';


export default function Index() {
    const { location, grantedAccessToLocation } = useLocation();


    return (
        <div>
            <h1>home page goes here</h1>
        </div>
    )
}
