/** @format */

import React, { useState } from "react";
import RestaurantDataService from "../services/restaurant";
import { Link } from "react-router-dom";

const AddReview = (props) => {
  let initialReviewState = "";
  let editing = false;

  if (props.location.state && props.location.state.currentReview) {
    editing = true;
    initialReviewState = props.location.state.currentReview.text;
  }

  const [review, setReview] = useState(initialReviewState);
  const [submited, setSubmited] = useState(false);

  const handleInputChagne = (event) => {
    setReview(event.target.value);
  };

  const saveReview = () => {
    var data = {
      text: review,
      name: props.user.name,
      user_id: props.user.id,
      restaurant_id: props.match.params.id,
    };

    if (editing) {
      data.review_id = props.location.state.currentReview._id;
      RestaurantDataService.updateReview(data)
        .then((response) => {
          setSubmited(true);
          console.log(response.data);
        })
        .catch((e) => console.log(e));
    } else {
      RestaurantDataService.createReview(data).then((response) => {
        setSubmited(true);
        console.log(data);
      });
    }
  };
  return (
    <div>
      {props.user ? (
        <div className="submit-form">
          {submited ? (
            <div>
              <h4>Submitted successfully</h4>
              <Link
                to={"/restaurants/" + props.match.params.id}
                className="btn btn-success">
                Back to restaurants
              </Link>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="description">
                  {editing ? "Edit" : "Create"} Review
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="text"
                  required
                  value={review}
                  onChange={handleInputChagne}
                  name="text"
                />
              </div>
              <button onClick={saveReview} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>Please log in</div>
      )}
    </div>
  );
};

export default AddReview;
