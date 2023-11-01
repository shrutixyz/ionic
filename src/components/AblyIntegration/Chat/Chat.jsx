import styles from "./Chat.module.css";
import messageicon from "../../../images/message.svg";
import send from "../../../images/send.svg";
import { useChannel } from "ably/react";
import { useState } from "react";

const Chat = ({self}) => {
    const urlParams = new URLSearchParams(window.location.search);
  const channelname = urlParams.get("space");
  console.log("chat is ", channelname)

  const [messageText, setMessageText] = useState("");
  const [receivedMessages, setMessages] = useState([]);
  const messageTextIsEmpty = messageText.trim().length === 0;

  const { channel, ably } = useChannel(channelname, (message) => {
    const history = receivedMessages.slice(-199);
    setMessages([...history, message]);
  });

  const sendChatMessage = (messageText) => {
    console.log(self.profileData.name)
    channel.publish({ name: channelname, data: {data: messageText, userName: self.profileData.name}});
    setMessageText("");
  };

  const pressEnter = (e) => {
    if(e.key == "Enter"){
      sendChatMessage(messageText);
    }
  }

  console.log(receivedMessages);

  const TextIcon = (props) => {

    return (
      <>
        <p style={{
          margin: '0.5em',
          marginBottom: '-0.75rem'
        }} className={styles.senderName}>{props.sender == self.profileData.name ? "You" : props.sender}</p>
        <div className={styles.messagebox}>
          <p className={styles.content}>{props.text}</p>
        </div>
      </>
    );
  };
  function changeVisibility() {
    let chatdiv = document.getElementById("chats");
    chatdiv.style.display =
      chatdiv.style.display === "block" ? "none" : "block";
  }
  return (
    <>
      <div
        className={styles.chatbox}
        onClick={() => {
          changeVisibility();
        }}
      >
        <img src={messageicon} alt="" />
      </div>
      <div className={styles.chats} id="chats" style={{ display: "none" }}>
        <div className={styles.chatmessages}>
            {
                receivedMessages.map((el, index)=>{
                    
                   return  <TextIcon text={el.data.data} sender={el.data.userName} key={index}/>
                })

            }
        </div>
        <div className={styles.inputtxt}>
          <input
            type="text"
            placeholder="type your message..."
            className={styles.sendinput}
            onChange={(evt)=>setMessageText(evt.target.value)}
            value={messageText}
            onKeyDown={(e)=>pressEnter(e)}
          />
          <div
            className={styles.send}
            onClick={() => {
              sendChatMessage(messageText)
            }}
          >
            <img className={styles.sendBtn} src={send} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;


// const Chat = ()=>{
//     return (
//         <>
        
//         </>
//     )
// }

// export default Chat