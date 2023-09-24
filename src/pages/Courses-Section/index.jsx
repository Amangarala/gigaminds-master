import React from "react";
import { Container, Row, Col } from "reactstrap";
import Img1 from "../../images/charak.jpg";
import Img2 from "../../images/Susruta.jpg";
import Img3 from "../../images/bible.jpg";

import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Charaka Samhita",
    lesson: "Sage Charaka",
    students: "Ancient text, originally written around 300-200 BCE",
    rating: 5.9,
    imgUrl: Img1,
  },
  {
    id: "02",
    title: "Sushruta Samhita",
    lesson: "Sage Sushruta",
    students: "Ancient text, originally written around 600 BCE",
    rating: 5.9,
    imgUrl: Img2,
  },
  {
    id: "03",
    title: "The Ayurveda Bible",
    lesson: "Anne McIntyre",
    students: "March 2, 2012",
    rating: 5.9,
    imgUrl: Img3,
  },
 


];

const Courses = () => {
  return (
    <section >
      <Container  >
        <Row style={{ display: "flex", flexWrap: "wrap",justifyContent:'center' }}>
          {coursesData.map((item) => (
            <Col lg="3" md="4" sm="6" xs="12" key={item.id}>
              <CourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
