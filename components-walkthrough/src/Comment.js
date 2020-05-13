import React from 'react';

const Comment = (props) => {
    return (
            <div className='comment'>
                <a href='/' className='author'>
                    {props.owner}
                </a>
                <div className='metadata'>
                    {props.time}
                </div>
                <div className='text'>
                    {props.text}
                </div>
            </div>
    )
}

export default Comment;