import { useState } from 'react'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const signup = async (userName, userAddress, email, phone, password, DL) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/customers', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({userName, userAddress, email, phone, password, DL})
        })
        const json  = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            setIsLoading(false)
        }
    }

    return {signup, isLoading, error}
}