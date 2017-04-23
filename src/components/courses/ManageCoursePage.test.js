import React from 'react';
import ReactDOM from 'react-dom';
import {ManageCoursePage} from './ManageCoursePage';
import {MemoryRouter} from 'react-router';

it('renders without crashing', () => {
  const div = document.createElement('div');
    const props = {
      authors: [],
      actions: { saveCourse: () => { return Promise.resolve(); }},
      course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
    };
  ReactDOM.render(
      <MemoryRouter>
    <ManageCoursePage {...props}/>
  </ MemoryRouter>, div);
});