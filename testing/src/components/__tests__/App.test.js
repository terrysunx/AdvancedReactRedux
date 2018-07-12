import React from 'react';
import App from 'components/App';
import {shallow} from 'enzyme';
import CommentList from 'components/Comment-List';
import CommentBox from 'components/Comment-Box';

let component;
beforeEach(()=>{
    component = shallow(<App/>);
});

it('shows a comment box', () => {
    expect(component.find(CommentBox)/*this return an arry*/.length).toEqual(1);
});

it('shows a comment list', ()=>{
    expect(component.find(CommentList).length).toEqual(1);
});