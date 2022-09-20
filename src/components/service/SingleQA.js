import React, { useState } from "react";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./SingleQA.css";
import sections from "../../Data";

const SingleQA = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="qaContainer ">
      <div className="container">
        <div className="qa-heading"> </div>
        <div className="qa-content">
          <div className="item-list">
            {sections.questions.map((question) => {
              return (
                <div className="item" key={question.id}>
                  <div
                    className={`item-head flex ${
                      isActive ? "item-head-border" : null
                    }`}
                    onClick={() => setIsActive(!isActive)}
                  >
                    <h6 className="fs-20 fw-4 text-grey">{question.title}</h6>
                    <span className="item-icon">
                      {/* {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />} */}
                      {isActive ? (
                        <FontAwesomeIcon icon={faMinusCircle} />
                      ) : (
                        <FontAwesomeIcon icon={faPlusCircle} />
                      )}
                    </span>
                  </div>

                  <div
                    className={`item-body ${isActive ? "item-body-show" : ""}`}
                  >
                    <p className="text">{question.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleQA;
