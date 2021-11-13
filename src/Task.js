import React from 'react';
import {Card, Checkbox} from 'antd';

function Task(props) {
    const {yuh} = props
    return (
        <div>
        <Card>
            {yuh}
            <Checkbox></Checkbox>
        </Card>
        </div>
    ) 
}

export default Task;