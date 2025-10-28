import { SignInButton, SignUpButton } from "@clerk/nextjs"
import Image from "next/image"


function LandingPage() {
  return (
    <>
        <div className="flex flex-col
         lg:flex-row p-5 gap-5">
            <div className="flex justify-center">
                <Image src="/assets/logo.svg" alt="logo" width={400} height={400} className="w-1/2 lg:w-full" />
            </div>
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="font-extrabold text-light-1 text-4xl mb-5 lg:mb-7 text-center lg:text-left">Happening</h1>
                <p className="text-light-1 text-xl lg:text-3xl mb-5 lg:mb-10 text-center lg:text-left">Join today</p>
                <SignInButton>
                    <button className="text-black mx-5 my-2 lg:mx-0 lg:my-2 px-6 py-2 rounded-lg bg-white hover:bg-slate-300  lg:w-full cursor-pointer">Login</button>
                </SignInButton>
                <SignUpButton>
                    <button className="text-black mx-5 my-2 lg:mx-0 lg:my-2 px-6 py-2 rounded-lg bg-emerald-100 hover:bg-grren-300  lg:w-full cursor-pointer ">Register</button>
                </SignUpButton>
            </div>
         </div>
    </>
  )
}

export default LandingPage