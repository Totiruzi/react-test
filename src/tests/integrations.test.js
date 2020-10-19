import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  const url = 'http://jsonplaceholder.typicode.com/comments';
  moxios.install();
  moxios.stubRequest(url, {
    status: 200,
    response: [
      {
        body: 'Comment one',
      },
      {
        body: 'Comment two',
      },
    ],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  // Attemp to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // Find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments').simulate('click');
  // Expect to find a list of comments!
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);
    done();
    wrapped.unmount();
  });
});
