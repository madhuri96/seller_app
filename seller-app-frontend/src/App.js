import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import AddStoreInfo from './components/AddStoreInfo';
import AddCategory from './components/AddCategory';
import AddSubcategory from './components/AddSubcategory';
import AddInventory from './components/AddInventory';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div>
      <h1>Seller App</h1>
      <Router>
        <Routes>
          <Route exact path='/' element={<SignupForm />} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/dashboard/store-info' component={AddStoreInfo} />
          <Route exact path='/dashboard/categories' component={AddCategory} />
          <Route
            exact
            path='/dashboard/subcategories'
            component={AddSubcategory}
          />
          <Route exact path='/dashboard/inventory' component={AddInventory} />
          <Route path='/search' element={<SearchResults />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
