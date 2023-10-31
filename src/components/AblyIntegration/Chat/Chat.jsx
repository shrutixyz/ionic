import styles from "./Chat.module.css";
import messageicon from "../../../images/message.svg";
import send from "../../../images/send.svg";
import { useChannel } from "ably/react";
import { useState } from "react";

const Chat = (props) => {
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
    channel.publish({ name: channelname, data: messageText });
    setMessageText("");
  };

  const TextIcon = (props) => {
    return (
      <>
        <p className={styles.sendername}>{props.sender}</p>
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
                    
                   return  <TextIcon text={el.data} sender={el.connectionId} key={index}/>
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
          />
          <div
            className={styles.send}
            onClick={() => {
              sendChatMessage(messageText)
            }}
          >
            <img src={send} alt="" />
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