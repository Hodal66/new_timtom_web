import { useEffect, useState } from 'react';

const SubmitedInfo = () => {
  const [SubmitedInfo, setSubmitedInfo] = useState([]);

  useEffect(() => {
    const storedSubmitedInfo = JSON.parse(localStorage.getItem('formData')) || [];
    setSubmitedInfo(storedSubmitedInfo);
  }, []);

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">SubmitedInfo</h2>
      <ul>
        {SubmitedInfo.map((userSubmitted, index) => (
          <li key={index} className="mb-4 p-4 border rounded-md bg-gray-50">
            <p><strong>Name:</strong> {userSubmitted.name}</p>
            <p><strong>Email:</strong> {userSubmitted.email}</p>
            <p><strong>Message:</strong> {userSubmitted.message}</p>
            <p><strong>Date:</strong> {new Date(userSubmitted.date).toLocaleString()}</p>
            <p><strong>House ID:</strong> {userSubmitted.houseId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubmitedInfo;
