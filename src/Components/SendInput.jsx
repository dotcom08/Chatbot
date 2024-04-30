
function SendInput(){
    return (
        <>
            <div className="absolute bottom-0 left-0 bg-slate-100 h-20 w-full flex items-center " >
                <textarea placeholder="Enter a message" className="resize-none flex-1 h-100 overscroll-auto outline-none border-none text-black font-light py-4 px-3 rounded-xl ms-2"></textarea>
                <span className="mx-4"><i className="fa-solid fa-paper-plane text-purple-600 text-2xl"></i></span>
            </div>
        </>
    )
}

export default SendInput