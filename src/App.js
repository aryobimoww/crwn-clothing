import React from "react";
import "./App.css";

import HomePage from "./pages/HomePage";
import ShopPage from "./components/shop/shop";
import Header from "./components/header/header";
import Form from "./pages/Form/Form";
import { Routes, Route } from "react-router-dom";
import { auth } from "./firebase/firebase.utility";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<Form />} />
        </Routes>
      </div>
    );
  }
}

export default App;
