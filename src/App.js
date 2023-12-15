import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import PostsPage from './components/PostPage';
import PostDetails from './components/PostDetails';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} />} />
        <Route
          path="/posts"
          element={loggedIn ? <PostsPage /> : <Navigate to="/login" replace />}
        />
        <Route path="/posts/:postId" element={loggedIn ? <PostDetails /> : <Navigate to="/login" replace />} />
        <Route index element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
