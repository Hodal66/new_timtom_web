/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { CourseData } from '../../database/static/CoursesData';
const Overview = () => {
  const [submissions, setSubmissions] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState('overview');

  useEffect(() => {
    const storedSubmissions = JSON.parse(localStorage.getItem('submitedInfo')) || [];
    setSubmissions(storedSubmissions);
  }, []);

  const overviewData = CourseData.reduce(
    (acc, course) => {
      acc[course.category] = (acc[course.category] || 0) + 1;
      if (course.category === 'ICTSkills') acc.ICTSkills += 1;
      if (course.category === 'travelAndTouirsm') acc.travelAndTouirsm += 1;
      if (course.category === 'Aviation') acc.Aviation += 1;
      return acc;
    },
    { ICTSkills: 0, travelAndTouirsm: 0, Aviation: 0 }
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <main className="flex-1 p-4 md:p-8 bg-gray-100 overflow-y-auto">
        {selectedMenu === 'overview' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Total courses</h3>
                <p>{CourseData.length}</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold">ICTSkills courses</h3>
                <p>{overviewData.ICTSkills}</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold">travelAndTouirsm courses</h3>
                <p>{overviewData.travelAndTouirsm}</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Aviation courses</h3>
                <p>{overviewData.Aviation}</p>
              </div>
              {Object.keys(overviewData).map(
                (category) =>
                  category !== 'ICTSkills' &&
                  category !== 'travelAndTouirsm' &&
                  category !== 'Aviation' && (
                    <div key={category} className="p-4 bg-white rounded-lg shadow-md">
                      <h3 className="text-xl font-bold">{category}</h3>
                      <p>{overviewData[category]}....</p>
                    </div>
                  )
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Overview;
