import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import BlogAndSocial from '../pages/blogandsocial';
import BlogPage from '../pages/blogPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HowItWorks from '../pages/HowItWorks';
import Simulator from '../pages/simulator';
import Indices from '../pages/indices';

function AppLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/blog-and-social" element={<BlogAndSocial />} />
        <Route path="/blog-and-social/:title" element={<BlogPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/simulator" element={<Simulator />} />
        <Route path="/indices" element={<Indices />} />
      </Routes>
      <Footer />
    </>
  );
}
export default AppLayout;
