import Image from "next/image";

const Features = () => {
  return (
    <section className="container">
      <div className="feature-sec">
        <div className="feature-sec__left">
          <div className="feature-sec__left__content">
            <h2>Features</h2>
            <p>
              Transforming healthcare with integrated software solutions for
              seamless management and improved patient outcomes   
            </p>
          </div>
        </div>
        <div className="feature-sec__right">
          <div className="feature-sec__right__content">
            <div className="feature-sec__right__content__item">
              <Image
                src={"/assets/users.svg"}
                alt="icon"
                width={60}
                height={67}
              />
              <p>xxxxxxxxxxxxxxxxxxxxxxx</p>
            </div>
            <div className="feature-sec__right__content__item">
              <Image
                src={"/assets/signal.svg"}
                alt="icon"
                width={60}
                height={67}
              />
              <p>xxxxxxxxxxxxx</p>
            </div>
            <div className="feature-sec__right__content__item">
              <Image
                src={"/assets/idea.svg"}
                alt="icon"
                width={60}
                height={67}
              />
              <p>xxxxxxxxxxxxxxxxxxxxxxx</p>
            </div>
          </div>
          <div className="btns-container">
            <button className="btn">Request A Demo</button>
            <button className="btn-secondary">View All</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
