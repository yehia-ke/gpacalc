import React from 'react';

const CourseList = ({ courses }) => {
  return (
    <ul>
      {courses.map((course, index) => (
        <li key={index}>
          {course.subjectName} - {course.creditHours} Credit Hours - Grade: {course.grade}
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
