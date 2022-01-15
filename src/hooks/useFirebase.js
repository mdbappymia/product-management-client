/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { getAuth, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.initialize";
import { useHistory } from "react-router-dom";

initializeAuthentication();
const useFirebase = () => {
    //const[isLoading,setIsLoading]=useState(true)
    // const [admin,setAdmin]=useState(false)
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const history = useHistory();

    ///////// GOOGLE SIGN IN POPUP //////////
    const signInUsingGoogle = (location, history) => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
                const destination = location?.state?.from || '/dashboard/showproduct';
                history.replace(destination);
                ////////// SET ERROR //////////
            }).catch(error => {
                setError(error.message)
            })
    }


    ////////// USER LOG OUT //////////
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                history.replace('/');
                window.location.reload();
            })
    }
    /////// OBSERVE WHEATHER AUTH STATE CHANGED OR NOT ///////

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state changed', user);
                setUser(user);
            }
        })
    }, [])

    // useEffect(()=>{

    //     fetch(`https://serene-fortress-92200.herokuapp.com/users/${user.email}`)
    //     .then(res=>res.json())
    //     .then(data=>setAdmin(data.admin))
    //     },[user.email])

    // const saveUser=(email,displayName,method)=>{

    //     const user={email,displayName}
    //     fetch('https://serene-fortress-92200.herokuapp.com/users',{
    //       method:method,
    //       headers:{
    //         'content-type':'application/json'
    //       },
    //       body:JSON.stringify(user)
    //     })
    //     .then()
    //   }

    return {
        signInUsingGoogle, user, error, logOut
    }
}

export default useFirebase;