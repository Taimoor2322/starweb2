import React from "react";
import Tabs from "./Tabs";

const OurStack = () => {
  const tabs = [
    {
      label: "Backend",
      content: <div>Content for Tab 1</div>,
    },
    {
      label: "Frontend",
      content: <div>Content for Tab 2</div>,
    },
    {
      label: "Databases",
      content: <div>Content for Tab 3</div>,
    },
    {
      label: "Testing",
      content: <div>Content for Tab 4</div>,
    },
  ];

  return (
    <section className="ourStack-sec">
      <div className="container">
        <hr />
        <h2>
          Our <strong>Tech Stack</strong>
        </h2>
      </div>

      {/* build tabs in reactjs */}
      <div className="ourStack-sec__wrapper">
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
};

export default OurStack;
