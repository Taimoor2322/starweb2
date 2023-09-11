import Layout from "@/components/Layout/Layout";
import React from "react";

const style = () => {
  return (
    <Layout>
      <div className="container">
        <h2>Style Guide</h2>
        <hr />
        <br />

        <p>Poppins and Inter Font family used</p>

        <h1 className="display-1">Display-1 -- 96px 600</h1>
        <h1>Heading 1 -- 65px 700</h1>
        <h2>Heading 2 -- 35px 700</h2>
        <h3>Heading 3 -- 18px 600</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          aperiam nemo laborum soluta esse ea totam voluptas doloribus natus
          minus.
        </p>

        <br />
        <h2 className="CTA--headline">
          Ready to <span>Get Started</span>
        </h2>
        <div className="btns-container">
          <button className="btn">Request A Demo</button>
          <button className="btn-secondary">View All</button>
        </div>
      </div>
    </Layout>
  );
};

export default style;
