import React, { useState } from 'react';
import CourseForm from './CourseForm';
import CourseList from './CourseList';
import styles from './GPACalculator.module.css';
const GPACalculator = () => {
  const [courses, setCourses] = useState([]);

  const addCourse = (course) => {
    const existingCourse = courses.find((existing) => existing.subjectName === course.subjectName);
    if (existingCourse) {
      alert(`Course "${course.subjectName}" already exists.`);
      return;
    }
    setCourses([...courses, course]);
  };

  const resetCourses = () => {
    setCourses([]);
  };

  const calculateGPA = () => {
    const totalCredits = courses.reduce((acc, course) => acc + parseFloat(course.creditHours), 0);
    const totalPoints = courses.reduce((acc, course) => acc + (parseFloat(course.creditHours) * parseFloat(course.grade)), 0);
    return (totalPoints / totalCredits).toFixed(2);
  };

  return (
    <div className={styles.container}>
      <h1>GPA Calculator</h1>
      <CourseForm addCourse={addCourse} />
      <CourseList courses={courses} />
      <h2>Current GPA: {courses.length > 0 ? calculateGPA() : '0.00'}</h2>
      <button onClick={resetCourses}>Reset</button>
    </div>
  );
};

export default GPACalculator;
