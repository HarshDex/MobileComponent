import React, { useState,useEffect } from 'react'
import './Mobile.css'
const Mobile = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const formattedDateTime = currentDateTime.toLocaleString();
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return (
    <div className="mobile-container">
        <div className="mobile-notch"></div>
        <div className="mobile-date-time">
          <h1>{formattedTime}</h1>
          <p>{formattedDateTime}</p>
        </div>
        <div className="mobile-apps">
          <div className="setting apps"><img src="https://cdn0.iconfinder.com/data/icons/e-commerce-207/1024/settings-1024.png" alt="" /></div>
          <div className="chat apps">
            <img src="https://static.vecteezy.com/system/resources/previews/005/337/802/non_2x/icon-symbol-chat-outline-illustration-free-vector.jpg" alt="" />
          </div>
          <div className="email apps">
            <img src="https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-email-icon-png-image_1757854.jpg" alt="" />
          </div>
          <div className="gallery apps">
            <img src="https://previews.123rf.com/images/alfianiqbal/alfianiqbal2004/alfianiqbal200400232/145054184-picture-gallery-icon-logo-vector-illustrattion-photo-gallery-icon-design-vector-template-trendy.jpg" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Mobile