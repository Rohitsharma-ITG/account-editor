import React,{useState} from 'react'
import './home.css'
import { FiUsers } from 'react-icons/fi'
// import List from '../Components/Partner/list';
import Homelist from '../Components/Home/Listhome/Homelist'

const route = () => {
  const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7; 
  
    const stores = [
      {
        myshopify_domain: "john-shop.myshopify.com",
        android: "0",
        ios: "23"
      },
      {
        myshopify_domain: "jane-store.myshopify.com",
       android: "0",
        ios: "23"
      },
      {
        myshopify_domain: "mike-shop.myshopify.com",
         android: "0",
        ios: "23"
      },
      {
        myshopify_domain: "harvey-store.myshopify.com",
      android: "0",
        ios: "23"
      },
      {
        myshopify_domain: "rachel-shop.myshopify.com",
         android: "0",
        ios: "23"
      },
      {
        myshopify_domain: "donna-store.myshopify.com",
        android: "0",
        ios: "23"
      },
      {
        myshopify_domain: "louis-shop.myshopify.com",
       android: "0",
        ios: "23"
      },
      {
        myshopify_domain: "jessica-store.myshopify.com",
      android: "0",
        ios: "23"
      },  {
        myshopify_domain: "harvey-store.myshopify.com",
       android: "0",
        ios: "23"
      },
      {
        myshopify_domain: "rachel-shop.myshopify.com",
   android: "0",
        ios: "23"
      },
      {
        myshopify_domain: "donna-store.myshopify.com",
        android: "0",
        ios: "23"
      },
      {
        myshopify_domain: "louis-shop.myshopify.com",
        android: "0",
        ios: "23"
      },
      {
        myshopify_domain: "jessica-store.myshopify.com",
        android: "0",
        ios: "23"
      },
      {
        myshopify_domain: "harvey-store.myshopify.com",
      android: "0",
        ios: "23"
      },
      {
        myshopify_domain: "rachel-shop.myshopify.com",
         android: "0",
        ios: "23"
      },
      {
        myshopify_domain: "donna-store.myshopify.com",
        android: "0",
        ios: "23"
      },
      {
        myshopify_domain: "louis-shop.myshopify.com",
       android: "0",
        ios: "23"
      },
      {
        myshopify_domain: "jessica-store.myshopify.com",
      android: "0",
        ios: "23"
      },  {
        myshopify_domain: "harvey-store.myshopify.com",
       android: "0",
        ios: "23"
      },
      {
        myshopify_domain: "rachel-shop.myshopify.com",
   android: "0",
        ios: "23"
      },
      
    ];
    
  
    const totalPages = Math.ceil(stores.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = stores.slice(indexOfFirstItem, indexOfLastItem);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const goToPreviousPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
    const goToNextPage = () => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  
  return (
  <div className="main-home-container">
    <div className="top-home-boxes">
      <div className="boxx">
        <div className="boxx-content">
          <p>Total Customers</p>
          <h4>1402</h4>
        </div>
        <div className="box-icon">
           <FiUsers />
        </div>
      </div>
      <div className="boxx">
        <div className="boxx-content">
          <p>Total Customers</p>
          <h4>1402</h4>
        </div>
        <div className="box-icon">
           <FiUsers />
        </div>
      </div>
      <div className="boxx">
        <div className="boxx-content">
          <p>Total Customers</p>
          <h4>1402</h4>
        </div>
        <div className="box-icon">
           <FiUsers />
        </div>
      </div>
      <div className="boxx">
        <div className="boxx-content">
          <p>Total Customers</p>
          <h4>1402</h4>
        </div>
        <div className="box-icon">
           <FiUsers />
        </div>
      </div>
    </div>
    <div className="table-wrapper">
          <table className="Home-table">
            <thead>
              <tr>
                <th className='first-col'>My Shopify Domain</th>
                <th>Android</th>
                <th>Ios</th>
                
              </tr>
            </thead>
            <tbody>
              <Homelist stores={currentItems} />
            </tbody>
          </table>

          <div className="pagination">
            <button onClick={goToPreviousPage} disabled={currentPage === 1}>&lt;</button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={currentPage === i + 1 ? 'active' : ''}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button onClick={goToNextPage} disabled={currentPage === totalPages}>&gt;</button>
          </div>
        </div>
  </div>
  )
}

export default route