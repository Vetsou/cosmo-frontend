import { createBrowserRouter } from 'react-router';

import App from './App'

import HomePage from './pages/home'
import ProjectsPage from './pages/projects'
import TeamsPage from './pages/teams'
import NotFoundPage from './pages/errors/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: HomePage },
      { path: 'projects', Component: ProjectsPage },
      { path: 'teams', Component: TeamsPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
])

export default router