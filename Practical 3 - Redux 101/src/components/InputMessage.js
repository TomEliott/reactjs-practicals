import React from "react";
import { Input } from "antd";

const Search = Input.Search;

let defaultText = "  Start your discussion now";

const InputMessage = ({onSubmit = () => {}}) => (
    <Search
        placeholder={defaultText}
        onSearch={v => {
                if (v !== "") {
                    onSubmit(v);
                }
            }
        }
        size="large"
        prefix="👤"
        enterButton="Send 📨"
    />
);

export default InputMessage;