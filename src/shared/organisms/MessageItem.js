import React from 'react';
import MessageSent from './MessageSent';
import MessageRecieved from './MessageRecieved';

const MessageItem  = (props) => (props.message.sender === 'aaa'
    ? (<MessageSent {...props} />)
    : (<MessageRecieved {...props} />)
);

export default MessageItem;
