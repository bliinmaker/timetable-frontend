import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { Auth } from '../pages/Auth'
import { PageNotFound } from '../pages/PageNotFound'
import { Home } from '../pages/Home'
import Profile from '../pages/Profile'
import { Register } from '../pages/Register'
import Timetable from '../pages/Timetable'

export const appRoutes = [
    {
        path: 'auth',
        element: <Auth />,
    },
    {
        path: 'register',
        element: <Register />,
    },
	{
        
		path: '/',
		element: (
			<Layout>
				<Outlet />
			</Layout>
		),
		children: [
			{
				path: '*',
				element: <PageNotFound />,
			},
			{
				path: '/',
				element: <Timetable />
			},
			// {
			// 	path: 'auth',
			// 	element: <Auth />,
			// },
            // {
			// 	path: 'register',
			// 	element: <Register />,
			// },
            {
				path: 'profile',
				element: <Profile />,
			},
		],
	},
]
