import './App.css';
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';

function App() {
  
  const {fetchBlogsPosts} = useContext(AppContext);

  useEffect(() => {
    fetchBlogsPosts();
  });

  // TODO: remove the above function and change it to below one
  // useEffect(() => {
  //   fetchBlogsPosts();
  // });

  return (
    <div className=''>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;
