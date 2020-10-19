import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';

import CommentList from 'components/CommentList';

const initialState = { comments: ['First comment', 'Second comment'] };
let wrapper;
beforeEach(() => {
  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('creates one LI per comment', () => {
  expect(wrapper.find('li').length).toEqual(2)
});

it('shows the text for each comment', () => {
  expect(wrapper.render().text()).toContain('First comment')
  expect(wrapper.render().text()).toContain('Second comment')

})
