import React, { useState } from "react";
import Header from "./components/Header";
import FeedBackData from "../src/data/FeedBackData";
import FeedBackList from "./components/FeedBackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

const App = () => {
  const [feedback, setFeedbackdata] = useState(FeedBackData);
  const deleteFeedback = (id) => {
    window.confirm("Are you sure you want to delete this feedback ?");
    setFeedbackdata(feedback.filter((item) => item.id !== id));
  };
  return (
    <>
      <Header text={"Feedback UI"} />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
};

export default App;
