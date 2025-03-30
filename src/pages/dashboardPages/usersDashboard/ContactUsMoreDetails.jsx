import { useQuery } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import { GET_CONTACT_US_BY_ID } from "../../../database/dynamic/ContactUsDatabase";
import {
  FaArrowLeft,
  FaEnvelope,
  FaPhone,
  FaUser,
  FaList,
} from "react-icons/fa";

const ContactUsMoreDetails = () => {
  const { contactUsId } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(GET_CONTACT_US_BY_ID, {
    variables: { contactUsId },
  });

  console.log("This is the ID you are searching for: ", contactUsId);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-800 transition"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-green-600 hover:text-green-800 transition"
        >
          <FaList className="mr-2" /> Back to Submissions
        </button>
      </div>

      {/* Contact Details Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray border-b pb-3 mb-4">
          Contact Details
        </h2>

        {/* Loading & Error State */}
        {loading && (
          <p className="text-gray-600 text-center">Loading details...</p>
        )}
        {error && (
          <p className="text-red bg-red p-2 rounded-md text-center">
            Error: {error.message}
          </p>
        )}

        {/* Display Contact Details */}
        {data?.getContactUsById && (
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaUser className="text-blue" />
              <p className="text-lg font-medium text-gray">
                {data.getContactUsById.fullName}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-blue" />
              <p className="text-gray-700">{data.getContactUsById.email}</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone className="text-blue" />
              <p className="text-gray-700">{data.getContactUsById.telephone}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md border border-gray">
              <h3 className="text-gray font-medium">Message:</h3>
              <p className="text-blue">{data.getContactUsById.message}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUsMoreDetails;
