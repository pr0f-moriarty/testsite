import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  // Extract the filename from the imgPath prop
  const filename = props.imgPath.split("/").pop().split(".")[0];

  const openImageInNewTab = () => {
    window.open(props.imgPath, "_blank");
  };

  return (
    <Card className="project-card-view" onClick={openImageInNewTab} style={{ cursor: "pointer" }}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{filename}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {/* {props.description} */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
