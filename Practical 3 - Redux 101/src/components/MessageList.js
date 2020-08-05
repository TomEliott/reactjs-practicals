import React from "react";
import { Timeline, Button } from "antd";
import {useDispatch} from "react-redux";

const fixDate = date => {
    return new Date(date).toLocaleString()
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const MessageList = ({ messages }) => {
    let randomColor = getRandomColor();
    const dispatch = useDispatch();
    return (
        <Timeline>{
            messages.map((msg) => (
                <Timeline.Item key={msg.id}>
                    <strong style={{color: randomColor}}> 👤 student </strong><strong style={{color: 'grey'}}>[{fixDate(msg.date)}]</strong> : {"\n"}
                    <i style={{color: 'black'}}>{msg.text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
                    <Button shape="circle" onClick={() => dispatch({type: "DELETE_MESSAGE", id: msg.id})} >×</Button>
                </Timeline.Item>
            ))
        }</Timeline>
    );
}

export default MessageList;