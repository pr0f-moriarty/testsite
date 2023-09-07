import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Function to fetch image URLs from the project-images folder
    const fetchImageUrls = async () => {
      try {
        const imagesContext = require.context("../../project-images", false, /\.(png|jpe?g|svg)$/);
        const images = imagesContext.keys().map(imagesContext);
        setImageUrls(images);
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };

    // Call the function to fetch image URLs
    fetchImageUrls();
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Some <strong className="purple">Pictures</strong> I've clicked recently
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {imageUrls.map((imageUrl, index) => (
            <Col key={index} md={4} className="project-card">
              <ProjectCard
                imgPath={imageUrl}
                isBlog={false}
                title={`Project ${index + 1}`}
                // description="Description of the project."
                ghLink="#"
                demoLink="#"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
