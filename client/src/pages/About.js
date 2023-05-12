import React from "react";
import { Typography, Row, Col } from "antd";
import "../styles/About.css"; // Import the custom CSS file

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div className="about-page">
      <Row justify="center" align="middle">
        <Col span={20}>
          <Title level={2} className="about-title">
            About Us
          </Title>
          <div className="about-content">
            <Paragraph>
              At HealthCare Website, we are dedicated to providing quality healthcare services to individuals and
              promoting overall well-being. Our team of experienced healthcare professionals is committed to delivering
              personalized care and ensuring patient satisfaction.
            </Paragraph>
            <Paragraph>
              We believe in a patient-centered approach, where we focus on understanding and addressing the unique needs of
              each individual. With our state-of-the-art facilities and advanced medical technology, we strive to offer
              comprehensive medical services and treatments.
            </Paragraph>
            <Paragraph>
              Our mission is to enhance the health and quality of life of our patients. We are passionate about fostering a
              caring and supportive environment, where patients feel comfortable and confident in the care they receive.
            </Paragraph>
            <Paragraph>
              Contact us today to learn more about our services or to schedule an appointment. We look forward to being your
              trusted healthcare provider.
            </Paragraph>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
