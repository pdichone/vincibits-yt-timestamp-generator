
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="flex flex-col items-center justify-center text-3xl text-fuchsia-500">YT-TimeStamp Generator</div>

      <button className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded my-11 "> Get Stated - Login </button> 

      <div className="flex flex-col items-center justify-center text-3xl">Features</div> 
      <blockquote className="flex flex-col items-center justify-center text-3xl"> 
       <text className="text-2xl my-12">- Create Timestamps for your Youtube Videos</text>
       <text className="text-2xl text-amber-200">12,890 Timestamps generated so far!</text>
      </blockquote>
      
    </main>
  )
}
