import { MdEdit, MdDelete, MdVisibility } from "react-icons/md";

const UserTable = () => {
  const users = [
    { id: 1, name: "John Doe", email: "johndoe@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", role: "User" },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alicej@example.com",
      role: "Editor",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Users List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="text-left px-6 py-3">#ID</th>
              <th className="text-left px-6 py-3">Name</th>
              <th className="text-left px-6 py-3">Email</th>
              <th className="text-left px-6 py-3">Role</th>
              <th className="text-left px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`border-t ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="px-6 py-3">{user.id}</td>
                <td className="px-6 py-3">{user.name}</td>
                <td className="px-6 py-3">{user.email}</td>
                <td className="px-6 py-3">{user.role}</td>
                <td className="px-6 py-3 flex space-x-4 text-lg">
                  <MdEdit
                    className="text-blue-500 hover:text-primary cursor-pointer"
                    title="Edit"
                  />
                  <MdDelete
                    className="text-red-500 hover:text-red cursor-pointer"
                    title="Delete"
                  />
                  <MdVisibility
                    className="text-green-500 hover:text-secondary cursor-pointer"
                    title="Read More"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
