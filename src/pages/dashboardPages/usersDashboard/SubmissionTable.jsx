import { useMutation, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import {
  GET_ALL_CONTACT_US_INFORMATION,
  DELETE_CONTACT_INFO,
} from "../../../database/dynamic/ContactUsDatabase";

const SubmissionTable = () => {
  const { loading, error, data, refetch } = useQuery(
    GET_ALL_CONTACT_US_INFORMATION
  );
  const [DeleteContactUs] = useMutation(DELETE_CONTACT_INFO, {
    onCompleted: () => refetch(),
  });

  const handleDelete = async (ContactUsId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await DeleteContactUs({ variables: { contactUsId: ContactUsId } });
        alert("User deleted successfully!");
      } catch (err) {
        console.error("Error deleting user:", err);
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Users List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="text-left px-6 py-3">#ID</th>
              <th className="text-left px-6 py-3">Full Name</th>
              <th className="text-left px-6 py-3">Email</th>
              <th className="text-left px-6 py-3">Telephone</th>
              <th className="text-left px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.getAllContactUs.map((user, index) => (
              <tr
                key={user._id}
                className={`border-t ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="px-6 py-3">{user._id}</td>
                <td className="px-6 py-3">{user.fullName}</td>
                <td className="px-6 py-3">{user.email}</td>
                <td className="px-6 py-3">{user.telephone}</td>
                <td className="px-6 py-3 flex space-x-4 text-lg">
                  <Link to={`/admin/submissions/${user._id}`}>
                    <button className="px-3 py-1 bg-blue text-white rounded">
                      Read More
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="px-3 py-1 bg-red text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmissionTable;
