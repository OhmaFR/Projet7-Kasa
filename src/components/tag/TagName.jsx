import React from "react";
import "./tagnamestyle.css"


const TagName = ({ tag }) => {
    return (
        <div className="tag_thing">
            <p>{tag}</p>
        </div>
    );
};

export default TagName;