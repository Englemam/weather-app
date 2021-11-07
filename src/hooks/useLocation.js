import { useContext } from 'react'

import LocationContext from '../context/LocationContext';

export default function useLocation () {
    const { location, grantedAccessToLocation } = useContext(LocationContext);


    return {  location, grantedAccessToLocation }
}


