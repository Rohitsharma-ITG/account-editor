import React, { useState } from 'react';
import './partnerDetail.css';
import { FiUser } from "react-icons/fi";
import PartnerProfile from '../Components/PartnerProfile/PartnerProfile';
// import PartnerOrders from '../Components/PartnerProfile/PartnerOrders';
// import PartnerSettings from '../Components/PartnerProfile/PartnerSettings';

const PartnerDetail = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Partner Profile", icon: <FiUser /> },
    { id: "status", label: "App Status", icon: <FiUser /> },
    { id: "features", label: "App Features", icon: <FiUser /> },
    { id: "pluggins", label: "Pluggins", icon: <FiUser /> },
    { id: "settings", label: "Settings", icon: <FiUser /> },
    { id: "googleFirebase", label: "Google Firebase", icon: <FiUser /> }
  ];

  const renderComponent = () => {
    switch (activeTab) {
      case "profile":
        return <PartnerProfile />;
      // case "status":
      //   return <PartnerOrders />;
      // case "features":
      //   return <PartnerSettings />;
      // default:
      //   return <PartnerProfile />; // Default fallback
    }
  };

  return (
    <div className="main-partnerDetail-container">
      <div className="top-tabs-partnerDetail">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tabs-partnerdetail-box ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="tab-icon">{tab.icon}</div>
            <div className="tab-content">
              <h4>{tab.label}</h4>
            </div>
          </div>
        ))}
      </div>

      {renderComponent()}
    </div>
  );
};

export default PartnerDetail;
