export default function Signin(){
    return<div className="h-screen w-full flex justify-center items-center">
            <div className="border bg-gray-700 h-100 w-100 flex justify-center items-center">
                <div >
                    <div className="text-xl flex justify-center items-center">Signin</div>
                    <div className="py-4 ">
                         <input className="border-amber-300 border p-2 h-10 rounded-xl w-80" type="text" placeholder="username"></input>
                    </div>
                    <div className="py-4 ">
                        <input className="border-amber-300 border p-2 h-10 rounded-xl w-80"  type="password" placeholder="Password"></input>
                    </div>
                    <div className="py-4 ">
                        <button className="border-amber-300 border p-1 h-10 rounded-xl w-full cursor-pointer">Sign in</button>
                    </div>
                </div>
            </div>
        </div>  
}