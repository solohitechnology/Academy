import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './components/about/About';
import Header from './components/common/header/Header';
import Home from './components/home/Home';
import Team from './components/team/Team';
import BlogCard from './components/blog/BlogCard';
import Testimonial from './components/home/testimonal/Testimonal';
import Certificate from './components/certificate/Certificate';
import PostSeminar from './components/seminar/PostSeminar';
import CheckoutPage from './components/common/checkout/CheckoutPage';
import Privacy from './components/policy/Privacy';
import LoginPage from './components/login/LoginPage';
import PostBlog from './components/blog/PostBlog';
import UploadFiles from './components/common/getallbook/UploadFiles';
import Contact from './components/contact/Contact';
import Footer from './components/common/footer/Footer';
import RegisterPage from './components/register/RegisterPage';
import OnlineCourses from './components/allcourses/OnlineCourses';
import Book from './components/allcourses/Book';
import UploadVideo from './components/allcourses/UploadVideo';
import VideoGallery from './components/allcourses/VideoGallery';

const handleLogin = (setIsAuthenticated) => {
  setIsAuthenticated(true);
};

function PrivateRoute({ element: Element, location, setIsAuthenticated, ...rest }) {
  const isAuthenticated = !!localStorage.getItem('accessToken');

  return isAuthenticated ? (
    <Element />
  ) : (
    <Navigate to="/login" replace state={{ from: location.pathname }} />
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/allbooks"
            element={
              <PrivateRoute
                element={Book}
                location={window.location}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
          <Route path="/team" element={<Team />} />
          <Route path="/videogallery" element={<VideoGallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/postseminar" element={<PostSeminar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cert" element={<Certificate />} />
          <Route path='/uploadvideo' element={<UploadVideo />} />
          <Route
            path="/login"
            element={<LoginPage onLogin={() => handleLogin(setIsAuthenticated)} />}
          />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/user/checkout"
            element={
              <PrivateRoute
                element={CheckoutPage}
                location={window.location}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
          <Route
            path="/courses"
            element={
              <PrivateRoute
                element={OnlineCourses}
                location={window.location}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
          <Route
            path="/postblog"
            element={
              <PrivateRoute
                element={PostBlog}
                location={window.location}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
          <Route
            path="/uploadbook"
            element={
              <PrivateRoute
                element={UploadFiles}
                location={window.location}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />

          <Route path='/blog' element={<BlogCard />} />

          {/* Solotech routes */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
