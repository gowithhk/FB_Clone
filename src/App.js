import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

function App() {
  const user = null;

  return (
    //BEM naming convention

    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          {/* Header */}
          <Header />

          {/* App body */}

          <div className="app__body">
            <Sidebar />
            {/* Sidebar */}
            <Feed />
            {/* Feed */}
            <Widgets />
            {/* Widgets */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
