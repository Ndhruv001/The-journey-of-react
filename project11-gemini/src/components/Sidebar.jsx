//assets
import menu from '../assets/menu.svg'
import plus from '../assets/plus.svg'
import message from '../assets/message.svg'
import question from '../assets/question.svg'
import activity from '../assets/activity.svg'
import setting from '../assets/setting.svg'
import { useContext, useState } from 'react';
import { Context } from '../context/contextApi'


function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const {history} = useContext(Context);
    function toggleSlideBar(){
        setIsOpen(prev => !prev)
    }
  return (
    <>
    <div 
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out h-screen flex flex-col gap-3 bg-gray-300 border w-1/6 m-0 p-4`}
    >
        <img src={menu} alt="menuIcon" width={25} onClick={toggleSlideBar}/>
    
        <button
            className='border w-21 h-8 flex flex-row rounded-xl p-1 justify-around mt-3'
        >
            <img src={plus} alt="plusIcon" width={20}/>
            <span>New Chat</span>
        </button>
        <p className='mt-6 font-medium'>Recent</p>
        <img src={message} alt="messageIcon" width={20}/>
        {
            history && history.map((item, index) => {
                return (
                    <p key={index}>{item}</p>
                )
            })
        }

        {/* Empty div to push the content below */}
        <div className="flex-grow"></div>

        {/* bottom */}
        <div className="mt-auto ">
            <img src={question} alt="question mark" width={20}/>
            <span className='font-medium'>Help</span>
            <img src={activity} alt="activityIcon" width={20} className='mt-1'/>
            <span className='font-medium'>Activity</span>
            <img src={setting} alt="settingIcon" width={20} className='mt-1'/>
            <span className='font-medium'>Setting</span>
        </div>
    </div>
    <img src={menu} alt="menuIcon" width={25} onClick={toggleSlideBar} className={`m-5 ${isOpen ? 'hiden' : 'block'}`}/>
    </>
  )
}

export default Sidebar
