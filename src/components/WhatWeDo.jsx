const WhatWeDo = () => {
  return (
    <section className="container whatWeDo-sec">
      <hr />
      <h2>
        What do <strong>we Do</strong>
      </h2>

      <div className="timeline">
            <div className="timeline__block tb">
                <div className="timeline__block__item">
                    <h3><span>#1</span>Assemble the right team</h3>
                    <p>We handle all aspects of vetting and choosing the right team that you don&apos;t have the time, expertise, or desire to do.</p>
                </div>
                <div className="timeline__block__item">
                    <h3><span>#5</span>Code reviews</h3>
                    <p>Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells</p>
                </div>
            </div>
            <hr />
            <div className="timeline__block bb">
                <div className="timeline__block__item">
                    <h3><span>#1</span>Assemble the right team</h3>
                    <p>We handle all aspects of vetting and choosing the right team that you don&apos;t have the time, expertise, or desire to do.</p>
                </div>
                <div className="timeline__block__item">
                    <h3><span>#4</span>Standups & weekly demos</h3>
                    <p>Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.</p>
                </div>
                <div className="timeline__block__item">
                    <h3><span>#5</span>Code reviews</h3>
                    <p>Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells</p>
                </div>
            </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
