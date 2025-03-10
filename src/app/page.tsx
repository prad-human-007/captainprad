import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full items-center gap-10">

      <div className="w-full max-w-3xl">
        <div className="w-40 h-40 border border-gray-500 mt-10 lg:mt-20"></div>
      </div>
      
      <div className="flex flex-col max-w-3xl w-full border-t-2 border-l-2 rounded-lg p-4 gap-2 "> 
        <h1>Hello! My name is Pradhumn.</h1> 
        <h1>These are my projects</h1>
        <div></div>
        <h2><a href="https://www.visaprepai.com/" className="italic" target="_blank">Visa Prep AI</a> - A platform for users to prepare for their Visa Interview with a real-time voice Assistant.</h2>
        <h2><a href="https://www.youtube.com/watch?v=AqXK7qdlMtk" className="italic" target="_blank">AI Virtual Health Assistant</a></h2> 
        <h2><a href="https://www.youtube.com/watch?v=rJBS1uN-xDQ" className="italic" target="_blank">Demo for Offline RAG</a></h2>
        <h2><a href="https://www.youtube.com/watch?v=Sct_W2ikNeE" className="italic" target="_blank">WebRTC Local Server</a></h2>

      </div>
      
    </div>
  );
}
