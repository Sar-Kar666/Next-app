import Link from "next/link";

export default function Home() {

 

  return (
    <div className="text-xl h-screen w-full flex items-center justify-center">
      <div>
          <div >  <span className="bg-violet-800 rounded-4xl  text-shadow-fuchsia-200 p-2 w-48 text-center block">HELLO HOME</span> </div>
      <br/>
     <Link href="/signin">
        <span className="border border-amber-400 p-2 w-48 text-center block">
          Signin to App
        </span>
      </Link>
         <br/>
        <Link href="/signup">
          <span className="border border-amber-400 p-2 w-48 text-center block">
            Signup to App
          </span>
        </Link>
      </div>
    
     
    </div>
  );
}
