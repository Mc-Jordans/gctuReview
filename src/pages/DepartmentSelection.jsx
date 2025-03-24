// src/pages/DepartmentSelection.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Assuming we'll replace this with API calls later
const mockDepartments = [
  { id: 1, name: "Computer Science", icon: "💻" },
  { id: 2, name: "Business Administration", icon: "📊" },
  { id: 3, name: "Engineering", icon: "🔧" },
  { id: 4, name: "Student Affairs", icon: "🎓" },
  { id: 5, name: "Finance", icon: "💰" },
  { id: 6, name: "Library", icon: "📚" },
];

function DepartmentSelection() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchDepartments = () => {
      setTimeout(() => {
        setDepartments(mockDepartments);
        setLoading(false);
      }, 500);
    };

    fetchDepartments();
  }, []);

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-blue-800 mb-6 text-center">
          Select a Department
        </h1>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
          </div>
        ) : (
          <div className="grid gap-4">
            {departments.map((department) => (
              <Link
                key={department.id}
                to={`/staff/${department.id}`}
                className="bg-white rounded-lg shadow p-4 flex items-center transition-all hover:shadow-md hover:bg-blue-50"
              >
                <span className="text-3xl mr-4">{department.icon}</span>
                <span className="text-lg font-medium text-gray-800">
                  {department.name}
                </span>
              </Link>
            ))}
          </div>
        )}

        <Link
          to="/"
          className="block mt-8 text-blue-600 hover:text-blue-800 text-center"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default DepartmentSelection;
