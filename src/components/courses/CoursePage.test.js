import React from 'react';
import ReactDOM from 'react-dom';
import {CoursePage} from './CoursePage';
import {MemoryRouter} from 'react-router';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    course: {},
    courses: []
  }

  ReactDOM.render(
    <MemoryRouter>
    <CoursePage {...props}/>
  </ MemoryRouter>, div);
});