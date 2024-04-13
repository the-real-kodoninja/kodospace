import timeAgo from "../../addons/timeAgo.tsx";

const MessageContent = ({ selectedMessage }) => {
  return (
        <div className="message-content">
        {selectedMessage ? (
            <div className="msgContent_View">
                <div className="msgContent_VwHdr">
                    
                    <div className="dI" style={{ width: '100%' }}>
                    <img src={'img/'+selectedMessage.usrImgThumb} alt={selectedMessage.uname} />
                        <div className="dI">
                            <span>{selectedMessage.uname}</span>
                        </div>
                        <div className="fR">
                            <small>{timeAgo(new Date(selectedMessage.date))}</small>
                        </div>
                        <h2>{selectedMessage.subject}</h2>
                    </div>
                </div>
                <div className="msgContent_VwBdy">
                    <div className="msgCnt_Usr1">{selectedMessage.body}</div>
                    <div className="msgCnt_Usr1">This is me meow a test post</div>
                    <div className="msgCnt_Usr2">Hold on kitty your not a cumcumber</div>
                    <div className="msgCnt_Usr1">This is me meow a test post</div>
                    <div className="msgCnt_Usr2">Hold on kitty your not a cumcumber</div>
                </div>
            </div>
        ) : (
            <p>Select a message from the list.</p>
        )}
        </div>
  );
};

export default MessageContent;
