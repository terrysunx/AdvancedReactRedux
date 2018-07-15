import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/Comment-Box';

let component;

beforeEach(() => {
    component = mount(<CommentBox />);
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

it('has a text area that users can type in', () => {
    //when trigger event, we use html event name: "change"
    component.find('textarea').simulate('change', {
        target: { value: "test" }
    });
    //force the component to update? set state render component async
    //so we have to force it to make sure it is rerendered.
    component.update();/*defined by enzyme*/
    //asertion
    expect(component.find('textarea').prop('value')).toEqual('test');
})