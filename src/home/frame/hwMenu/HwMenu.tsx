import React from 'react';
import './HwMenu.scoped.scss';
import {HashRouter, NavLink} from 'react-router-dom';
import {RootStateOrAny, useSelector} from "react-redux";

const HwMenu: React.FC = () => {
  const reducer = useSelector((state: RootStateOrAny) => state.CartReducer);

  return (
      <HashRouter>
        <div className="hwMenu">
          <div className="content">
            <NavLink exact to="/">Welcome</NavLink>
            <NavLink to="/exState">State</NavLink>
            <NavLink to="/exProps">Props</NavLink>
            <NavLink to="/exBasicSyntax">Basic Syntax</NavLink>
            <NavLink to="/exLifeCycle">Life Cycle</NavLink>
            <NavLink to="/exVeneer">Veneer</NavLink>
            <NavLink to="/exTodoList">TodoList</NavLink>
            <NavLink to="/exReduxTodo">Redux Todo</NavLink>
            <NavLink to="/exRedux">Redux</NavLink>
            <NavLink to="/exCart">CartList - {reducer.length}</NavLink>
            {/*<NavLink to="/exReduxCounter">Redux Counter</NavLink>*/}
          </div>
        </div>
      </HashRouter>
  );
};

export default HwMenu;
