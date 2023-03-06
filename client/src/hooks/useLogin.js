import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (customerEmail, customerPassword) => {
        setIsLoading(true)
        setError(null)
       
        console.log(customerEmail, "email")
        const response = await fetch(`http://localhost:4000/api/customers/email/${customerEmail}`)
        console.log("hi")
        const jsonRes  = await response.json()
        console.log(jsonRes, "this is it")

        if(!response.ok){
            console.log("incorrect email")
            setIsLoading(false)
            setError(jsonRes.error)
        }
        if(response.ok){
            if(customerPassword === jsonRes[0].customerPassword){
                console.log("you are verified")
            }
            else{
                console.log("your password is wrong")
            }
            //updating the auth context
            dispatch({type: 'LOGIN', payload: jsonRes})
            setIsLoading(false)
        }
    }

    return {login, isLoading, error}
}