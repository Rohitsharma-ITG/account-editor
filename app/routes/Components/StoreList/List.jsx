import React from 'react';
import './List.css'
import { Link } from '@remix-run/react';
import { useNavigate } from '@remix-run/react';

const List = ({ partners }) => {
  const navigate=useNavigate()
  const handleNavigate=()=>{
    console.log("runn")
    navigate('/app/storedetail')
  }
  return (
    <>
      {partners.length > 0 ? (
        partners.map((partner, index) => (
          <tr key={index}>
            <td>{partner.name}</td>
            <td>{partner.email}</td>
            <td>{partner.number}</td>
            <td>{partner.plan}</td>
            <td>{partner.shop}</td>
            <td >
           <button className="view-btn" onClick={()=>handleNavigate()} >
           View
           </button>
          
              
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="6">No partners found.</td>
        </tr>
      )}
    </>
  );
};

export default List;
