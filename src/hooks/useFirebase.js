/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.initialize";
import { useHistory } from "react-router-dom";

initializeAuthentication();
const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const [admin,setAdmin]=useState(false)
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const history = useHistory();
  ///////// GOOGLE SIGN IN POPUP //////////
  const signInUsingGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        saveUser(
          result.user.email,
          result.user.displayName,
          "POST",
          result.user.uid
        );
        const destination = location?.state?.from || "/dashboard/showproduct";
        history.replace(destination);
        ////////// SET ERROR //////////
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  // sign up by email and password
  const signUpUsingEmailAndPassword = (
    name,
    email,
    password,
    location,
    history
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        saveUser(result.user.email, name, "POST", result.user.uid);
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {});

        const destination = location?.state?.from || "/dashboard/showproduct";
        history.replace(destination);
      })
      .catch((e) => console.log(e.message));
  };
  // sign in email and password
  const signInEmailAndPassword = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      setUser(result.user);

      const destination = location?.state?.from || "/dashboard/showproduct";
      history.replace(destination);
    });
  };
  ////////// USER LOG OUT //////////
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
      setIsLoading(false);
      history.replace("/");
      window.location.reload();
    });
  };
  /////// OBSERVE WHEATHER AUTH STATE CHANGED OR NOT ///////

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setIsLoading(false);
    });
    return unsubscribed;
  }, []);

  // useEffect(()=>{

  //     fetch(`https://serene-fortress-92200.herokuapp.com/users/${user.email}`)
  //     .then(res=>res.json())
  //     .then(data=>setAdmin(data.admin))
  //     },[user.email])

  const saveUser = (email, displayName, method, user_id) => {
    const user = { email, displayName, user_id };
    fetch("https://serene-fortress-92200.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  return {
    signInUsingGoogle,
    user,
    error,
    logOut,
    isLoading,
    signUpUsingEmailAndPassword,
    signInEmailAndPassword,
  };
};

export default useFirebase;
