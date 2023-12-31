import React, { useState } from "react";
import Card from "./shared/Card";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us ?</h2>

        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            value={text}
            onChange={handleTextChange}
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
