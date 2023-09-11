import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout/Layout";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Team from "@/components/Team";
import WhyUs from "@/components/WhyUs";
import OurStack from "@/components/OurStack";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Star Healthcare Technology</title>
        <meta name="description" content="Star Healthcare Technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container hero-section">
          <div className="hero-section__content">
            <h1 className="display-1">Lorem ipsum dolor sit amet</h1>
            <p className="h3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="btns-container">
              <button className="btn">Get Started</button>
              <button className="btn-demo">
                <Image
                  src="/assets/play-icon.svg"
                  alt="play"
                  width={40}
                  height={30}
                />
                Request Demo
              </button>
            </div>
          </div>
          <div className="hero-section__image">
            <Image
              src={"/assets/coder-hero.svg"}
              alt="hero image"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        </div>

        {/* Solutions Section */}
        <Solution />

        {/* Features Section */}
        <Features />

        {/* CTA */}
        <section className="container CTA">
          <h2 className="CTA--headline">
            Ready to <span>Get Started</span>
          </h2>
          <div className="btns-container">
            <button className="btn">View Plans & Pricing</button>
            <button className="btn-secondary">Contact Us</button>
          </div>
        </section>

        {/* Teams Section */}
        <Team />

        {/* Why US */}
        <WhyUs />

        {/* WhatWeDo */}
        <WhatWeDo />

        {/* Our Stack */}
        <OurStack />

        {/* CTA */}
        <section className="container CTA CTA-spark">
          <div className="CTA-spark__top">
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </div>
          <div className="btns-container">
            <button className="btn">JOIN STAR FAMILY</button>
          </div>
          <div className="CTA-spark__bottom">
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </div>
        </section>
      </Layout>
    </>
  );
}
