"use client";

import React from 'react'
import { Rating } from 'react-simple-star-rating';
interface IRatingComponent {
    rating: number;
}
const RatingComponent: React.FC<IRatingComponent> = ({rating}) => {
  return (
    <Rating initialValue={rating} readonly />
  )
}

export default RatingComponent