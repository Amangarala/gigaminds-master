import React from "react";
import "./style.css";

const CourseCard = (props) => {
  const { imgUrl, title, lesson, students, rating } = props.item;

  return (
    
    <div className="single__course__item">
      <div className="course__img">
        <img src={imgUrl} alt="" style={{ width: "150px" }} />
      </div>

      <div className="course__details" style={{marginTop:'10px',marginButtom:'10px'}}>
        <h6 className="course__title mb-4">{title}</h6>
<hr />
        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1" style={{backgroundColor:'lightgrey'}}>
            <i class="ri-book-open-line"></i>Author: {lesson} 
          </p>
<br />
          <p className="students d-flex align-items-center gap-1">
            <i class="ri-user-line"></i> Publish time: {students}
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            <i class="ri-star-fill"></i> Rating: {rating}
          </p>

          {/* <p className="enroll d-flex align-items-center gap-1">
            <a href="#"> Enroll Now</a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
