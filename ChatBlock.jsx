import React from 'react'
import './Chat.css'

export default function ChatBlock(props) {
  return (
    <>
    <div clasName ='chat'>
        <h2>Чат</h2>
        {props.chatData.map((el,i) =>{
            return(
                <div key ={i}>
                    {i+1}.{el}
                    </div>
            )
        }
        )}
    </div>
    </>
  )
}
