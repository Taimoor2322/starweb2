import React, { useState } from "react";

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="Tabs">
      <div className="Tabs__btns">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={index === activeTab ? "active" : ""}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="Tabs__content">
        <div className="container">{tabs[activeTab].content}</div>
      </div>
    </div>
  );
}

export default Tabs;
