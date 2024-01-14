import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from '../config/firebase';
import { FcGoogle } from "react-icons/fc";
import React from "react"

export const Auth = () => {
  console.log(auth?.currentUser?.email);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  }

//   const logOut = async () => {
//     try {
//       await signOut(auth);
//     } catch (err) {
//       console.error(err);
//     }
//   }

  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        onClick={signInWithGoogle}
        className="flex items-center justify-center bg-blue-500 w-[20rem] h-[3.4rem] text-white font-bold px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300 hover:bg-blue-600"
      >
        <FcGoogle className="mr-2 font-bold text-[2rem] text-white" />
        Continue with Google
      </button>
    </div>
  )
}

// signOut
