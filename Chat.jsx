import React from 'react'
import { useState } from 'react';
import ChatBlock from './ChatBlock';
import Comment from './Comment';
import {useLocalStorage} from '../../hook/useLocalStorage';

export default function Chat() {
    const [chatData, setChatData] = useLocalStorage("CHAT", []);
    const [inputValue,setInputValue] = useState("");
    const [showD, setShowD] = useState(false);

    console.log(chatData);

    const [user] = useLocalStorage("USER");

    const sendChat = () => {
        if (user) {
        setChatData([...chatData,` ${user}: ${inputValue}`]);
        setInputValue("");
        } else {
            setShowD(true);
        }
    };
  return (
    <>
        <ChatBlock/>
        <Comment inputValue={inputValue}
        setInputValue ={setInputValue}
        sendChat={sendChat}
        setShowD ={setShowD}
        />
    </>
  )
}
