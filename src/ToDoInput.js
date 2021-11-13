import React from 'react';
import { Input, Button } from 'antd';
import { getDefaultNormalizer } from '@testing-library/react';

function ToDoInput(props) {
    const [inputValue, setInputValue] = React.useState('')
    const {addTodo} = props;
    const lola = () => {
        addTodo(inputValue)
        setInputValue("")
    }
    const handleKeypress = e => {
        //it triggers by pressing the enter ke
      if (e.key === "Enter") {
          lola()
      }
    }
    return (
        <div>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={handleKeypress}></Input>
            <Button className='button' type='primary' onClick={() => lola()}>Add</Button>
        </div>
        
    )
}

export default ToDoInput;