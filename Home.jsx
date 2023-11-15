import React, { useState } from 'react'
import React, { useLocalStorage } from 'react'

export default function Home() {
    const [user,setUser] = useLocalStorage("USER", "");
    const [inputValue,seInputValue] = useState("");
  return (
    <>
    {user && {
       <div>
        <div>Приветствую, {user}</div>
        <button onClick={() => setUser("")}></button>
       </div>
    }}
    {!user && {
        <div>
        <label>Введите ваше имя</label>
        <input
        value = {inputValue}
        onChange={(e) => seInputValie(e.target.value)}
        />
        <button onClick={() => setUser{inputValue}}>Сохранить</button>
    }}
    </>
  )
}
