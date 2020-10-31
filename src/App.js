import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import CreateExercise from './CreateExercise';
import CreateUser from './CreateUser';
import EditExercise from './EditExercise';
import ExerciseList from './ExerciseList';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <br/>
        <Route exact path = '/' component={ExerciseList} />
        <Route exact path = '/edit:id' component={EditExercise} />
        <Route exact path = '/create' component={CreateExercise} />
        <Route exact path = '/user' component={CreateUser} />
      </BrowserRouter>
    </>
  );
}

export default App;
