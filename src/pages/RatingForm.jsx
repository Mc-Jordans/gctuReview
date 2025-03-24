import React, { useState } from "react";
import { Star } from "lucide-react";

function RatingForm() {
  const [rating, setRating] = useState(0);
  const [department, setDepartment] = useState("");
  const [staffMember, setStaffMember] = useState("");
  const [verificationMethod, setVerificationMethod] = useState("student-id");
  const [submitted, setSubmitted] = useState(false);

  // Mock data - in a real app, this would come from an API
  const departments = [
    { id: "admin", name: "Administration" },
    { id: "finance", name: "Finance Department" },
    { id: "academic", name: "Academic Affairs" },
    { id: "library", name: "Library" },
    { id: "it", name: "IT Services" },
  ];

  const staffMembers = {
    admin: [
      { id: "admin1", name: "John Doe" },
      { id: "admin2", name: "Jane Smith" },
    ],
    finance: [
      { id: "fin1", name: "Robert Johnson" },
      { id: "fin2", name: "Mary Williams" },
    ],
    academic: [
      { id: "acad1", name: "David Brown" },
      { id: "acad2", name: "Sarah Davis" },
    ],
    library: [
      { id: "lib1", name: "Michael Wilson" },
      { id: "lib2", name: "Elizabeth Taylor" },
    ],
    it: [
      { id: "it1", name: "James Anderson" },
      { id: "it2", name: "Patricia Thomas" },
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      department,
      staffMember,
      rating,
      verificationMethod,
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="w-full max-w-md bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-center text-green-600 dark:text-green-400 mb-2">
            Thank You!
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
            Your feedback has been submitted successfully.
          </p>
          <div className="flex justify-center mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-8 w-8 ${
                  i < rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300 dark:text-gray-600"
                }`}
              />
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
            Your rating helps us improve our services and recognize outstanding
            staff members.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Rate Your Experience
        </h1>

        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Staff Rating Form
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Please provide honest feedback about your interaction with our
            staff.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="department"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Department
              </label>
              <select
                id="department"
                value={department}
                onChange={(e) => {
                  setDepartment(e.target.value);
                  setStaffMember("");
                }}
                className="w-full border border-gray-300 rounded-md p-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              >
                <option value="">Select department</option>
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="staff-member"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Staff Member
              </label>
              <select
                id="staff-member"
                value={staffMember}
                onChange={(e) => setStaffMember(e.target.value)}
                disabled={!department}
                className="w-full border border-gray-300 rounded-md p-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white disabled:opacity-50"
              >
                <option value="">
                  {department
                    ? "Select staff member"
                    : "Select department first"}
                </option>
                {department &&
                  staffMembers[department].map((staff) => (
                    <option key={staff.id} value={staff.id}>
                      {staff.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Rate your experience
              </label>
              <div className="flex justify-center space-x-2 py-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-10 w-10 cursor-pointer ${
                      star <= rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="comments"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Additional Comments (Optional)
              </label>
              <textarea
                id="comments"
                placeholder="Please share any specific feedback about your experience..."
                className="w-full min-h-[100px] border border-gray-300 rounded-md p-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Verification Method
              </label>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center space-x-2 rounded-md border p-3 dark:border-gray-700">
                  <input
                    type="radio"
                    id="student-id"
                    name="verification"
                    value="student-id"
                    checked={verificationMethod === "student-id"}
                    onChange={(e) => setVerificationMethod(e.target.value)}
                    className="h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-700"
                  />
                  <label
                    htmlFor="student-id"
                    className="flex-1 cursor-pointer text-gray-700 dark:text-gray-300"
                  >
                    Student/Staff ID
                  </label>
                  {verificationMethod === "student-id" && (
                    <input
                      className="w-full max-w-[180px] border border-gray-300 rounded-md p-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      placeholder="Enter ID number"
                    />
                  )}
                </div>

                <div className="flex items-center space-x-2 rounded-md border p-3 dark:border-gray-700">
                  <input
                    type="radio"
                    id="email"
                    name="verification"
                    value="email"
                    checked={verificationMethod === "email"}
                    onChange={(e) => setVerificationMethod(e.target.value)}
                    className="h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-700"
                  />
                  <label
                    htmlFor="email"
                    className="flex-1 cursor-pointer text-gray-700 dark:text-gray-300"
                  >
                    University Email
                  </label>
                  {verificationMethod === "email" && (
                    <input
                      type="email"
                      className="w-full max-w-[180px] border border-gray-300 rounded-md p-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      placeholder="your.email@gctu.edu.gh"
                    />
                  )}
                </div>

                <div className="flex items-center space-x-2 rounded-md border p-3 dark:border-gray-700">
                  <input
                    type="radio"
                    id="receipt"
                    name="verification"
                    value="receipt"
                    checked={verificationMethod === "receipt"}
                    onChange={(e) => setVerificationMethod(e.target.value)}
                    className="h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-700"
                  />
                  <label
                    htmlFor="receipt"
                    className="flex-1 cursor-pointer text-gray-700 dark:text-gray-300"
                  >
                    Service Receipt Number
                  </label>
                  {verificationMethod === "receipt" && (
                    <input
                      className="w-full max-w-[180px] border border-gray-300 rounded-md p-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      placeholder="Enter receipt number"
                    />
                  )}
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={`w-full py-2 rounded text-white ${
                  !department || !staffMember || rating === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                }`}
                disabled={!department || !staffMember || rating === 0}
              >
                Submit Rating
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RatingForm;
