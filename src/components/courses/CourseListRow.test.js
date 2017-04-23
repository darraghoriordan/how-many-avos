import React from 'react';
import ReactDOM from 'react-dom';
import CourseListRow from './CourseListRow';
import {MemoryRouter} from 'react-router';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const course = {};
  ReactDOM.render(
    <MemoryRouter>
    <table>
      <tbody>
        <CourseListRow course={course}/>
      </tbody>
    </table>
  </ MemoryRouter>, div);
});