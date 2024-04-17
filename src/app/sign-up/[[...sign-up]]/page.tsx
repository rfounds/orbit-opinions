import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
        <div className="flex isolate justify-center pt-60">
            <SignUp />
        </div>
    )
}
