import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {MemoryRouter} from 'react-router';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const props = {
    loading: false,
    authors: [],
    actions: {
      saveCourse: () => {
        return Promise.resolve();
      }
    },
    courses: [],
    course: {
      id: '',
      watchHref: '',
      title: '',
      authorId: '',
      length: '',
      category: ''
    }
  };
  ReactDOM.render(
    <MemoryRouter>
    <App {...props}/>
  </MemoryRouter>, div);
});
