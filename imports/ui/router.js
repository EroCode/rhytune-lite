import { mount } from 'react-mounter';
import React from 'react';
import App from './App.js';
import SongsList from './SongsList.js';
import SongsSingle from './SongsSingle.js';
import SongsNew from './SongsNew.js';

FlowRouter.route('/', {
  name: 'Index',
  action: () => {
    const IndexTemp = () => (<p>Index Temp</p>);
    mount(IndexTemp);
  },
});

FlowRouter.route('/songs/', {
  name: 'SongsList',
  action: (params, queryParams) => {
    mount(App, {
      main: <SongsList />,
      page: queryParams.page,
    });
  },
});

FlowRouter.route('/songs/new', {
  name: 'SongsNew',
  action: (params, queryParams) => {
    mount(App, {
      main: <SongsNew />,
    });
  },
});

FlowRouter.route('/songs/:id', {
  name: 'SongsSingle',
  action: (params, queryParams) => {
    mount(App, {
      main: <SongsSingle id={params.id} />,
    });
  },
});

FlowRouter.notFound = {
  name: 'NotFound',
  action: () => {
    const NotFoundTemp = () => (<p>NotFound Temp</p>);
    mount(NotFoundTemp);
  },
};
