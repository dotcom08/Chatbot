function Chatbox(){
    return (
        <>
            <div className="flex flex-col space-y-2 flex-1 px-4 py-4 overscroll-y-auto">
                <div id="incoimg" className="self-start flex flex-row-reverse items-center gap-1">
                    <div id="text" className="py-2 px-3  bg-blue-700  text-white rounded-tl-xl rounded-e-lg">
                        Helloo ,i m Gpt
                    </div> 
                    <span className=""><i className="fa-solid fa-robot text-blue-400 text-2xl"></i></span>
                </div>
                <div id="outgoing" className="self-end  bg-slate-400 py-2 px-3 text-black font-bold rounded-s-xl rounded-br-lg">Hi, gpt <br />nice to see you</div>

                
            </div>
        </>
    )
}

export default Chatbox;