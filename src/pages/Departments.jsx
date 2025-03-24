// src/pages/Departments.jsx
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// Custom hook to detect clicks outside
const useClickOutside = (handler) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handler]);

  return ref;
};

const mockDepartments = [
  {
    id: 1,
    name: "Computer Science",
    image: "/src/assets/computer-science.png",
  },
  { id: 2, name: "Business Administration", image: "/src/assets/business.png" },
  { id: 3, name: "Engineering", image: "/src/assets/engineering.png" },
  { id: 4, name: "Student Affairs", image: "/src/assets/student-affairs.png" },
  { id: 5, name: "Finance", image: "/src/assets/finance.png" },
  { id: 6, name: "Library", image: "/src/assets/library.png" },
];

function Departments() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const filteredDepartments = departments.filter((dept) =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsDropdownOpen(true);
  };

  const handleDepartmentSelect = (department) => {
    setSearchTerm(department.name);
    setIsDropdownOpen(false);
  };

  const dropdownRef = useClickOutside(() => setIsDropdownOpen(false));

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-y-auto">
      <NavBar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-block mb-8 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
          >
            ← Back to Home
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Departments
          </h1>

          {/* Search Dropdown */}
          <div className="relative mb-8 max-w-md mx-auto" ref={dropdownRef}>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={() => setIsDropdownOpen(true)}
              placeholder="Search departments..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
            />
            {isDropdownOpen && filteredDepartments.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-950 rounded-lg shadow-lg max-h-60 overflow-y-auto border border-gray-200 dark:border-gray-700">
                {filteredDepartments.map((dept) => (
                  <div
                    key={dept.id}
                    onClick={() => handleDepartmentSelect(dept)}
                    className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-800 cursor-pointer text-gray-900 dark:text-white"
                  >
                    {dept.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 dark:border-blue-400"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDepartments.map((department) => (
                <div
                  key={department.id}
                  className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6 flex flex-col items-center justify-center h-64 transition-all hover:shadow-lg"
                >
                  <img
                    src={department.image}
                    alt={department.name}
                    className="w-20 h-20 object-contain mb-4"
                  />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                    {department.name}
                  </h2>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Departments;
