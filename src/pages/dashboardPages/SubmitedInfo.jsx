// import { useEffect, useState } from 'react';
import SubmissionTable from "./usersDashboard/SubmissionTable";

const SubmitedInfo = () => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">SubmitedInfo</h2>
      <SubmissionTable />
    </div>
  );
};

export default SubmitedInfo;
