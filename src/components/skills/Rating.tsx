import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";

type RatingProp = {
  rate: number;
  center?: boolean;
};

export default function Rating({ rate, center }: RatingProp) {
  let counter = rate + 1;

  return (
    <div className={`rating ${center ? "center" : ""}`}>
      {--counter > 0 ? (
        counter === 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <AiFillStar />
        )
      ) : (
        <AiOutlineStar />
      )}
      {--counter > 0 ? (
        counter === 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <AiFillStar />
        )
      ) : (
        <AiOutlineStar />
      )}
      {--counter > 0 ? (
        counter === 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <AiFillStar />
        )
      ) : (
        <AiOutlineStar />
      )}
      {--counter > 0 ? (
        counter === 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <AiFillStar />
        )
      ) : (
        <AiOutlineStar />
      )}
      {--counter > 0 ? (
        counter === 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <AiFillStar />
        )
      ) : (
        <AiOutlineStar />
      )}
    </div>
  );
}
