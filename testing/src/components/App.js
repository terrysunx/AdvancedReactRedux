import React, {Component} from 'react';
import CommentBox from './Comment-Box';
import CommentList from './Comment-List';

export default () => {
    return (
        <div>
            <CommentBox/>
            <CommentList/>
        </div>
    );
}