import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="flex isolate pt-60 justify-center">
        <SignIn />
    </div>
  )
}
