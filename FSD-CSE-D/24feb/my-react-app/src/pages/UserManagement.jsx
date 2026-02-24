import React, { useState } from "react";

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    id: "",
    name: "",
    contact: "",
    email: "",
    address: "",
    company: "",
    designation: "",
  });

  const [editIndex, setEditIndex] = useState(null);
  const [searchId, setSearchId] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updated = [...users];
      updated[editIndex] = form;
      setUsers(updated);
      setEditIndex(null);
    } else {
      setUsers([...users, form]);
    }

    setForm({
      id: "",
      name: "",
      contact: "",
      email: "",
      address: "",
      company: "",
      designation: "",
    });
  };

  const handleEdit = (index) => {
    setForm(users[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  const filteredUsers = searchId
    ? users.filter((user) => user.id.includes(searchId))
    : users;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          User Management
        </h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by ID..."
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
        >
          {Object.keys(form).map((key) => (
            <input
              key={key}
              type="text"
              name={key}
              placeholder={key.toUpperCase()}
              value={form[key]}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ))}

          <button
            type="submit"
            className="md:col-span-3 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            {editIndex !== null ? "Update User" : "Add User"}
          </button>
        </form>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Contact</th>
                <th className="p-3">Email</th>
                <th className="p-3">Address</th>
                <th className="p-3">Company</th>
                <th className="p-3">Designation</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => (
                  <tr
                    key={index}
                    className="text-center border-t hover:bg-gray-50"
                  >
                    <td className="p-2">{user.id}</td>
                    <td className="p-2">{user.name}</td>
                    <td className="p-2">{user.contact}</td>
                    <td className="p-2">{user.email}</td>
                    <td className="p-2">{user.address}</td>
                    <td className="p-2">{user.company}</td>
                    <td className="p-2">{user.designation}</td>
                    <td className="p-2 space-x-2">
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="8"
                    className="text-center p-4 text-gray-500"
                  >
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;