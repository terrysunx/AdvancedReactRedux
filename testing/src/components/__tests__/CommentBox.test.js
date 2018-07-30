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
describe('the textarea,', ()=>{
    beforeEach(()=>{
        //when trigger event, we use html event name: "change"
        component.find('textarea').simulate('change', {
            target: { value: "test" }
        });
        //force the component to update? set state render component async
        //so we have to force it to make sure it is rerendered.
        component.update();/*defined by enzyme*/
    });
    it('has a text area that users can type in', () => {

        //asertion
        expect(component.find('textarea').prop('value')).toEqual('test');
    });
    
    it('text area is empty after submit', () => {    
        /*The second argument is optional and has a default value of {}.
        This object will be merged with the actual event object, and then passed to the event handlers.
    
        So, the event handlers will receive something like:
        event = { ...originalEventObject, ...objectFromSecondArgument }
    
        When there is no second argument provided:
        event = { ...originalEventObject, ...{} }, which has the same values of the original event object.
    
        And since there is a method named 'preventDefault' inside the original event object, event.preventDefault() can be called.*/
        component.find('form').simulate('submit');
    
        //get the value of textarea and assertion
        expect(component.find('textarea').prop('value')).toEqual('');
    });
});
