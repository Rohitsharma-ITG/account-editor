
import React, { useEffect, useState } from 'react';
import './app.home/home.css';
import { FiUsers } from 'react-icons/fi';
import Homelist from './Components/Home/Listhome/Homelist';

const Route = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 2;

  // Fetching Data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/partners');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setStores(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Pagination Logic
  const totalPages = Math.ceil(stores.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = stores.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const goToPreviousPage = () =>
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  const goToNextPage = () =>
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));

  return (
    <div className="main-home-container">
      <div className="top-home-boxes">
        <div className="boxx">
          <div className="boxx-content">
            <p>Total Customers</p>
            <h4>{stores.length}</h4>
          </div>
          <div className="box-icon">
            <FiUsers />
          </div>
        </div>
      </div>

      <div className="table-wrapper">
        {loading ? (
          <p>Loading data...</p>
        ) : error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : stores.length === 0 ? (
          <p>No customers found.</p>
        ) : (
          <>
            <table className="Home-table">
              <thead>
                <tr>
                  <th>My Shopify Domain</th>
                </tr>
              </thead>
              <tbody>
                <Homelist stores={currentItems} />
              </tbody>
            </table>

            {/* Pagination Section */}
            <div className="pagination">
              <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  className={currentPage === i + 1 ? 'active' : ''}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Route;
