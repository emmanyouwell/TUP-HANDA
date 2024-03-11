import React from 'react';
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
const ExamsList = ({examTaken, loading}) => {
  return (
    <div>
  <Timeline>
  {loading ? (
    <div className="min-h-screen mt-20">
      <Loader />
    </div>
  ) : examTaken ? (
    examTaken.map((item, index) => (
      <div key={index} className="mb-4 bg-[#F4EBDE] text-black p-5 rounded-lg">
        <h5 className="mb-2 font-bold">{item.moduleId.title}</h5>
        {item.attempts ? (
          item.attempts.map((attempt, index) => (
            <div key={index} className="mb-2 ">
            <p>Attempt #{index+1}</p>
              <p className="mb-0">Score: {attempt.score}</p>
              <p className="mb-0">
              Taken at: {new Date(attempt.takenAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} {new Date(attempt.takenAt).toLocaleTimeString('en-US')}
              </p>
            </div>
          ))
        ) : (
          <p>No attempts yet</p>
        )}
      </div>
    ))
  ) : (
    <p>No downloaded modules yet</p>
  )}
</Timeline>
    </div>
  );
}

export default ExamsList;