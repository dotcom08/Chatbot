import Header from './Components/Header'
import Chatbox from './Components/Chatbox'
import SendInput from './Components/SendInput'
import ToggleChatbot from './Components/ToggleChatbot'
import './App.css'

function App() {


  return (

    <>
      <div className='absolute bottom-20 right-20 w-8/12 h-4/5 bg-slate-200 rounded-xl md:w-2/5 shadow-2xl overflow-hidden flex flex-col'>
        <Header/>
        <Chatbox/>
        <SendInput/>
        
      </div>
      <ToggleChatbot/>
    </>
    
  )
}

export default App
