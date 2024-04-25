import React from 'react';
import { NavLink as Link, Routes, Route } from 'react-router-dom';

import { Counter } from '../counter';
import { Post } from '../post';

export class App extends React.Component {
    constructor() {
        console.log( 'App.constructor()' );
        super();
    }

    render() {
        console.log( 'App.render()' );

        return (
            <div className='ui-app'>
                <div className='ui-app__navigation'>
                    <Link
                        className='ui-app__navigation__link'
                        activeClassName='ui-app__navigation__link--active'
                        to='/'
                        exact={ true }
                    >Counter</Link>

                    <Link
                        className='ui-app__navigation__link'
                        activeClassName='ui-app__navigation__link--active'
                        to='/post'
                        exact={ true }
                    >Post</Link>
                </div>

                <Routes>
                    <Route
                        path='/'
                        element={ <Counter name='Counter Narxoz'/> }
                    />

                    <Route
                        path='/post'
                        element={ <Post /> }
                    />
                </Routes>

            </div>
        );
    }
}
