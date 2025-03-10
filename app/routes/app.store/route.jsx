import React, { useState } from 'react';
import './partner.css';
import List from '../Components/StoreList/list';

const Route = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7; 

  const partners = [
    { name: "John Doe", email: "john@example.com", number: "1234567890", plan: "Premium", shop: "john-shop.myshopify.com" },
    { name: "Jane Smith", email: "jane@example.com", number: "9876543210", plan: "Basic", shop: "jane-store.myshopify.com" },
    { name: "Mike Ross", email: "mike@example.com", number: "1122334455", plan: "Standard", shop: "mike-shop.myshopify.com" },
    { name: "Harvey Specter", email: "harvey@example.com", number: "5566778899", plan: "Pro", shop: "harvey-store.myshopify.com" },
    { name: "Rachel Zane", email: "rachel@example.com", number: "9988776655", plan: "Premium", shop: "rachel-shop.myshopify.com" },
    { name: "Donna Paulsen", email: "donna@example.com", number: "6677889900", plan: "Basic", shop: "donna-store.myshopify.com" },
    { name: "Louis Litt", email: "louis@example.com", number: "3344556677", plan: "Standard", shop: "louis-shop.myshopify.com" },
    { name: "Jessica Pearson", email: "jessica@example.com", number: "2233445566", plan: "Pro", shop: "jessica-store.myshopify.com" },
    { name: "Johneeee Doe", email: "john@example.com", number: "1234567890", plan: "Premium", shop: "john-shop.myshopify.com" },
    { name: "Janeee Smith", email: "jane@example.com", number: "9876543210", plan: "Basic", shop: "jane-store.myshopify.com" },
    { name: "Mikeeee Ross", email: "mike@example.com", number: "1122334455", plan: "Standard", shop: "mike-shop.myshopify.com" },
    { name: "Harveyee Specter", email: "harvey@example.com", number: "5566778899", plan: "Pro", shop: "harvey-store.myshopify.com" },
    { name: "Rachelee Zane", email: "rachel@example.com", number: "9988776655", plan: "Premium", shop: "rachel-shop.myshopify.com" },
    { name: "Donna eePaulsen", email: "donna@example.com", number: "6677889900", plan: "Basic", shop: "donna-store.myshopify.com" },
    { name: "Louiseeee Litt", email: "louis@example.com", number: "3344556677", plan: "Standard", shop: "louis-shop.myshopify.com" },
    { name: "Jessiceeeeea Pearson", email: "jessica@example.com", number: "2233445566", plan: "Pro", shop: "jessica-store.myshopify.com" },
    { name: "Johngggg Doe", email: "john@example.com", number: "1234567890", plan: "Premium", shop: "john-shop.myshopify.com" },
    { name: "Janegggg Smith", email: "jane@example.com", number: "9876543210", plan: "Basic", shop: "jane-store.myshopify.com" },
    { name: "Mikerrrrr Ross", email: "mike@example.com", number: "1122334455", plan: "Standard", shop: "mike-shop.myshopify.com" },
    { name: "Harveyr Specter", email: "harvey@example.com", number: "5566778899", plan: "Pro", shop: "harvey-store.myshopify.com" },
    { name: "Rachel Zane", email: "rachel@example.com", number: "9988776655", plan: "Premium", shop: "rachel-shop.myshopify.com" },
    { name: "Donna Paulsen", email: "donna@example.com", number: "6677889900", plan: "Basic", shop: "donna-store.myshopify.com" },
    { name: "Louis Litt", email: "louis@example.com", number: "3344556677", plan: "Standard", shop: "louis-shop.myshopify.com" },
    { name: "Jessica Pearson", email: "jessica@example.com", number: "2233445566", plan: "Pro", shop: "jessica-store.myshopify.com" },
    { name: "John Doe", email: "john@example.com", number: "1234567890", plan: "Premium", shop: "john-shop.myshopify.com" },
    { name: "Jane Smith", email: "jane@example.com", number: "9876543210", plan: "Basic", shop: "jane-store.myshopify.com" },
    { name: "Mike Ross", email: "mike@example.com", number: "1122334455", plan: "Standard", shop: "mike-shop.myshopify.com" },
    { name: "Harvey Specter", email: "harvey@example.com", number: "5566778899", plan: "Pro", shop: "harvey-store.myshopify.com" },
    { name: "Rachel Zane", email: "rachel@example.com", number: "9988776655", plan: "Premium", shop: "rachel-shop.myshopify.com" },
    { name: "Donna Paulsen", email: "donna@example.com", number: "6677889900", plan: "Basic", shop: "donna-store.myshopify.com" },
    { name: "Louis Litt", email: "louis@example.com", number: "3344556677", plan: "Standard", shop: "louis-shop.myshopify.com" },
    { name: "Jessica Pearson", email: "jessica@example.com", number: "2233445566", plan: "Pro", shop: "jessica-store.myshopify.com" },
  ];

  const totalPages = Math.ceil(partners.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = partners.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const goToPreviousPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  const goToNextPage = () => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));

  return (
    <>
      <div className="main-partner-container">
        <div className="top-heading">
          <h2>Stores</h2>
          <p>List of stores connected to services</p>
        </div>
        <div className="table-wrapper">
          <table className="partner-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Plan</th>
                <th>Shop</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <List partners={currentItems} />
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
    </>
  );
};

export default Route;

