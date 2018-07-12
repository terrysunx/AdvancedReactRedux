import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/Comment-Box';

let component;

beforeEach(() => {
    component = mount(<CommentBox/>);
});

afterEach(() => {
    //who defined unmount?
    //as unmount is a method of componment, so we do not need to import it
    component.unmount();
});

it('has a textarea and a button', () => {
    //enzym can also find plan html element.
    expect(component.find('textarea').length).toEqual(1);
    expect(component.find('button').length).toEqual(1);
});

