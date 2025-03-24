// src/pages/StaffSelection.jsx
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// Mock data - will be replaced with API calls
const mockStaffByDepartment = {
  1: [
    {
      id: 101,
      name: "Dr. Ama Mensah",
      position: "Department Head",
      photoUrl: "/avatars/staff1.jpg",
    },
    {
      id: 102,
      name: "Mr. Kofi Boateng",
      position: "Senior Lecturer",
      photoUrl: "/avatars/staff2.jpg",
    },
    {
      id: 103,
      name: "Ms. Abena Osei",
      position: "Academic Advisor",
      photoUrl: "/avatars/staff3.jpg",
    },
  ],
  2: [
    {
      id: 201,
      name: "Dr. John Ansah",
      position: "Department Head",
      photoUrl: "/avatars/staff4.jpg",
    },
    {
      id: 202,
      name: "Mrs. Grace Appiah",
      position: "Administrator",
      photoUrl: "/avatars/staff5.jpg",
    },
  ],
  // Add more departments as needed
};

function StaffSelection() {
  const { departmentId } = useParams();
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [departmentName, setDepartmentName] = useState("");

  useEffect(() => {
    // Simulate API call
    const fetchStaff = () => {
      setTimeout(() => {
        // Get department name from another mock dataset
        const deptNames = {
          1: "Computer Science",
          2: "Business Administration",
          3: "Engineering",
          4: "Student Affairs",
          5: "Finance",
          6: "Library",
        };

        setDepartmentName(deptNames[departmentId] || "Unknown Department");
        setStaff(mockStaffByDepartment[departmentId] || []);
        setLoading(false);
      }, 500);
    };

    fetchStaff();
  }, [departmentId]);

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-blue-800 mb-2 text-center">
          {departmentName}
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Select the staff member who assisted you
        </p>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
          </div>
        ) : staff.length > 0 ? (
          <div className="grid gap-4">
            {staff.map((person) => (
              <Link
                key={person.id}
                to={`/rate/${person.id}`}
                className="bg-white rounded-lg shadow p-4 flex items-center transition-all hover:shadow-md hover:bg-blue-50"
              >
                <div className="h-16 w-16 rounded-full bg-gray-200 overflow-hidden mr-4">
                  {person.photoUrl ? (
                    <img
                      src={person.photoUrl}
                      alt={person.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-blue-100 text-blue-800 font-bold text-xl">
                      {person.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{person.name}</h3>
                  <p className="text-gray-500 text-sm">{person.position}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-white rounded-lg shadow">
            <p className="text-gray-600">
              No staff members found for this department.
            </p>
          </div>
        )}

        <Link
          to="/departments"
          className="block mt-8 text-blue-600 hover:text-blue-800 text-center"
        >
          ← Back to Departments
        </Link>
      </div>
    </div>
  );
}

export default StaffSelection;
