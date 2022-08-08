import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './pages/EmployeeList';
import CreateEmployee from './pages/CreateEmployee';
import Login from './pages/Login';
import CounterPage from './pages/CounterPage';
import { Provider } from 'react-redux';
import { store } from "./store/store"
import EmployeeDetails from './pages/EmployeeDetails';
import EditPage from './pages/EditPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<EmployeeList />} />
          <Route path="/create" element={<CreateEmployee />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path=":id/details" element={<EmployeeDetails />} />
          <Route path=":id/editpage" element={<EditPage />} />

        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
