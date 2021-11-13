import React from 'react';
import { Input, Button } from 'antd';
import Task from './Task.js'
function TaskList(props) {
    const {tasks} = props
    const taskList = tasks.map((task) => {
        return <Task yuh={task}></Task>
    })
    return (
        <div>
            {taskList}
        </div>
    )

}

export default TaskList;