

function Header(){
    const handleCloseChat = (event) =>{
        event.target.parent.classList.add('hiddden');
    }

    return(
        <>
            <div id="header" className=" w-full  bg-purple-800 text-left  flex space-x-3 items-center px-4 justify-between">
                <div className="relative w-100 py-5 ps-10">
                    <span className="absolute top-2 left-6"><i className="fa-solid fa-headset text-white text-lg"></i></span>
                    <h2 className="text-white font-bold uppercase text-2xl ps-2">Chatbot</h2>
                </div>
                <span className="cursor-pointer" onClick={() => handleCloseChat()}><i className="fa-solid fa-x text-white text-lg hover:text-zinc-300"></i></span>
                
            </div>
        </>
    )
}

export default Header