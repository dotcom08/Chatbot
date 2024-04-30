function ToggleChatbot(){
    return(
        <div className="absolute bottom-4 right-10 w-12 h-12 rounded-full hover:border-2 hover:shadow-2xl shadow-2xl flex items-center justify-center scale-110 hover:scale-100 transition duration-350 ease-in-out cursor-pointer">
            <span><i className="fa-solid fa-comment text-purple-600 text-4xl hover:scale-95"></i></span>
        </div>
   )
}

export default ToggleChatbot