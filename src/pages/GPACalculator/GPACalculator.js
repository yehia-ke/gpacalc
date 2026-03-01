import React, { useState } from "react";
import CourseForm from "./CourseForm";
import CourseList from "./CourseList";
import styles from "./GPACalculator.module.css";
const GPACalculator = () => {
  const [courses, setCourses] = useState([]);
  const [showCode, setShowCode] = useState(false);

  const addCourse = (course) => {
    setCourses((prevCourses) => {
      const existingCourse = prevCourses.find(
        (existing) => existing.subjectName === course.subjectName
      );
      if (existingCourse) {
        return prevCourses; // Return the original courses array
      }
      return [...prevCourses, course]; // Add the new course
    });
  };

  const removeCourse = (courseToRemove) => {
    setCourses((courses) => {
      return courses.filter((course) => course !== courseToRemove);
    });
  };
  const resetCourses = () => {
    setCourses(courses => {
      return [];
    });
    window.location.reload();
  };

  const calculateGPA = () => {
    const totalCredits = courses.reduce(
      (acc, course) => acc + parseFloat(course.creditHours),
      0
    );
    const totalPoints = courses.reduce(
      (acc, course) =>
        acc + parseFloat(course.creditHours) * parseFloat(course.grade),
      0
    );
    return (totalPoints / totalCredits).toFixed(2);
  };
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;


    const reader = new FileReader();
    reader.onload = handleFileRead;
    reader.readAsText(file);
  };
  const handleFileRead = (event) => {
    const csvData = event.target.result;
    const rows = csvData.split("\n");
    const parsedData = rows.map((row) => row.split(","));
    parsedData.pop();
    parsedData.forEach((data) => {
      const [subjectName, creditHours, grade] = data;
      addCourse({subjectName, creditHours, grade});

    });
  };
  return (
    <div className={styles.container}>
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <h1 style={{ textAlign: "center", margin: 0 }}>GPA Calculator</h1>
        <button onClick={() => setShowCode(true)} style={{ position: "absolute", top: 0, right: 0 }}>{'</>'}</button>
      </div>
      <CourseForm addCourse={addCourse} />
      <CourseList courses={courses} removeCourse={removeCourse} />
      <h2>Current GPA: {courses.length > 0 ? calculateGPA() : "0.00"}</h2>
      <button onClick={resetCourses}>Reset</button>
      <input type="file" id="csvFileInput" accept=".csv" onChange={handleFileUpload} />
      
      {showCode && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "8px",
            textAlign: "center",
            maxWidth: "600px"
          }}>
            <h2 style={{ margin: "0 0 20px 0", color: "black" }}>1.20.1</h2>
            <p style={{ wordBreak: "break-all", fontFamily: "monospace", color: "black" }}>
              01101101 01100011 00101110 01111001 01100101 01101000 01101001 01100001 00101101 01101011 01100101 00101110 01100011 01101111 01101101
            </p>
            <button onClick={() => setShowCode(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GPACalculator;
