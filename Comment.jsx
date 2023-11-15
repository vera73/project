const Comment = (props) => {
    return {
        <div className='wrapper'>
        <label>Напишите коментарий</label>
        <input value={props.inputValue}
        onChange={(e) => props.setInputValue(e.target.value)}></input>
        <button onClick = {props.sendChat}>Отправить</button>
        <button onClick={() => props.setChatData([])}>Удалить</button>

        {props.showD && {
            <div>
            Вы не зарегестрировались перейдите по <Link to ='/'>ссылке</Link>
            </div>
        }}

    }
}