import React, {Component} from 'react';
import CommentBox from 'components/Comment-Box';
import CommentList from 'components/Comment-List';

export default () => {
    return (
        <div>
            <CommentBox/>
            <CommentList/>
        </div>
    );
}