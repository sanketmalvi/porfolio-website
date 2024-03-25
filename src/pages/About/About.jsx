/* eslint-disable react/no-unescaped-entities */
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description: "The most modern and high-quality design made at a professional level."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Mobile apps",
    description: "Professional development of applications for iOS and Android."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Photography",
    description: "I make high-quality photos of any category at a professional level."
  }
];


const About = () => {
  
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p>
      A passionate full-stack developer with a Bachelor's degree in Computer Science Engineering. My journey in web development began during my studies and has since grown into a deep-rooted passion. I thrive on crafting dynamic, user-friendly web experiences that marry both form and function. With a strong foundation in computer science principles, I enjoy tackling complex challenges and bringing innovative solutions to life. Beyond coding, I'm an avid learner, always eager to stay updated with the latest technologies and industry trends. Let's build something amazing together!
      </p>
    </section>


    {/* <!--
      - service
    --> */}

    <section className="service">

      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>

  </article>
  )
}

export default About