import React from 'react';
import './App.css';
import { Admin, Resource } from 'react-admin';
import AuthProvider from '../src/features/auth/authProvider';
import restProvider from 'ra-data-simple-rest';
import PostList from './features/posts/PostsList';
import CreatePost from './features/posts/CreatePost';
import EditPost from './features/posts/EditPost';
import UserList from './features/users/UserList';
import UserCreate from './features/users/UserCreate';
import UserEdit from './features/users/UserEdit';

const dataProvider = restProvider('http://localhost:3000');

const App = () => {
	return (
		<div className='App'>
			Hello
			<Admin
				dataProvider={dataProvider}
				authProvider={AuthProvider}>
				<Resource
					name={'posts'}
					list={PostList}
					create={CreatePost}
					edit={EditPost}
				/>

				<Resource
					name='users'
					list={UserList}
					create={UserCreate}
					edit={UserEdit}
				/>
			</Admin>
		</div>
	);
};

export default App;

