import LandingPage from "@/components/shared/LandingPage";
import { currentUser } from "@clerk/nextjs/server";
import "../globals.css"

export default async function Home() {

  const user = await currentUser()
  if(!user){
    return (
      <>
        <LandingPage />
      </>
    )
  }

  return (
    <>
      hello
    </>
  )

}
