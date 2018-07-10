import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';
import CommentList from '../Comment-List';
import CommentBox from '../Comment-Box';

it('shows a comment box', () => {
    const component = shallow(<App/>);
    expect(component.find(CommentBox)/*this return an arry*/.length).toEqual(1);
    expect(component.find(CommentList).length).toEqual(1);
});