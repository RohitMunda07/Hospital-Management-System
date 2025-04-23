import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStepIndex } from '../store/authSlice';

const AdminClaimTable = ({ claims = [] }) => {
  const dispatch = useDispatch(); // ✅ Hook called at the top level
  const [statuses, setStatuses] = useState(claims.map(() => 'pending'));
  const [forwarded, setForwarded] = useState(claims.map(() => false));

  const handleAction = (index, status) => {
    const updatedStatuses = [...statuses];
    updatedStatuses[index] = status;
    setStatuses(updatedStatuses);

    if (status === "approved") {
      dispatch(setStepIndex(2)); // Move to "Verified by Admin"
    } else if (status === "rejected") {
      dispatch(setStepIndex(1)); // Reset or stay
    }
  };

  const handleForward = (index) => {
    const updated = [...forwarded];
    updated[index] = true;
    setForwarded(updated);

    dispatch(setStepIndex(3)); // Move to "Sent to HR"
  };

  return (
    <div className="overflow-x-auto mt-10 w-full px-4">
      <table className="w-[90vw] bg-white text-black border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-orange-600 text-white text-lg">
          <tr>
            <th className="py-3 px-4 border-r">Claimed Amount</th>
            <th className="py-3 px-4 border-r">Month</th>
            <th className="py-3 px-4 border-r">Year</th>
            <th className="py-3 px-4 border-r">Remarks</th>
            <th className="py-3 px-4 border-r">Status</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody className="text-base">
          {claims.map((item, index) => (
            <tr key={index} className="border-t border-gray-300">
              <td className="py-3 px-4 border-r">{item.claimed}</td>
              <td className="py-3 px-4 border-r">{item.month}</td>
              <td className="py-3 px-4 border-r">{item.year}</td>
              <td className="py-3 px-4 border-r">{item.remarks}</td>
              <td className="py-3 px-4 border-r">
                <span
                  className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                    statuses[index] === 'approved'
                      ? 'bg-green-500'
                      : statuses[index] === 'rejected'
                      ? 'bg-red-500'
                      : 'bg-yellow-400 text-black'
                  }`}
                >
                  {statuses[index]}
                </span>
              </td>
              <td className="py-3 px-4 flex flex-col gap-2">
                <div className="flex justify-between">
                  <button
                    onClick={() => handleAction(index, 'approved')}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleAction(index, 'rejected')}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Reject
                  </button>
                </div>
                <button
                  onClick={() => handleForward(index)}
                  className={`${
                    forwarded[index] ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
                  } text-white mt-1 rounded-lg w-full text-center`}
                  disabled={forwarded[index]}
                >
                  {forwarded[index] ? 'Forwarded' : 'Forward to Insurance'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminClaimTable;
