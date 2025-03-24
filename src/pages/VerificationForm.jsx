// src/pages/VerificationForm.jsx
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function VerificationForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { staffId, staffName, ratings } = location.state || {};

  const [formData, setFormData] = useState({
    verificationType: "student",
    studentId: "",
    email: "",
    phoneNumber: "",
    serviceTicket: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleVerificationTypeChange = (type) => {
    setFormData((prev) => ({
      ...prev,
      verificationType: type,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (formData.verificationType === "student" && !formData.studentId) {
      newErrors.studentId = "Student ID is required";
    }

    if (formData.verificationType === "email" && !formData.email) {
      newErrors.email = "Email address is required";
    } else if (
      formData.verificationType === "email" &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (formData.verificationType === "phone" && !formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    }

    if (formData.verificationType === "ticket" && !formData.serviceTicket) {
      newErrors.serviceTicket = "Service ticket number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Simulate API call to verify and submit the entire feedback
    console.log("Submitting verification:", {
      staffId,
      ratings,
      verification: formData,
    });

    // Navigate to thank you page
    navigate("/thank-you");
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-2xl font-bold text-blue-800 mb-2 text-center">
            Verify Your Feedback
          </h1>

          {staffName && (
            <p className="text-center text-gray-600 mb-6">
              For your rating of{" "}
              <span className="font-medium">{staffName}</span>
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Verification Method
              </label>

              <div className="grid grid-cols-2 gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => handleVerificationTypeChange("student")}
                  className={`py-2 px-4 rounded-lg text-center ${
                    formData.verificationType === "student"
                      ? "bg-blue-100 text-blue-800 font-medium"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  Student ID
                </button>

                <button
                  type="button"
                  onClick={() => handleVerificationTypeChange("email")}
                  className={`py-2 px-4 rounded-lg text-center ${
                    formData.verificationType === "email"
                      ? "bg-blue-100 text-blue-800 font-medium"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  Email
                </button>

                <button
                  type="button"
                  onClick={() => handleVerificationTypeChange("phone")}
                  className={`py-2 px-4 rounded-lg text-center ${
                    formData.verificationType === "phone"
                      ? "bg-blue-100 text-blue-800 font-medium"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  Phone Number
                </button>

                <button
                  type="button"
                  onClick={() => handleVerificationTypeChange("ticket")}
                  className={`py-2 px-4 rounded-lg text-center ${
                    formData.verificationType === "ticket"
                      ? "bg-blue-100 text-blue-800 font-medium"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  Service Ticket
                </button>
              </div>

              {formData.verificationType === "student" && (
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm mb-2">
                    Student ID Number
                  </label>
                  <input
                    type="text"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${
                      errors.studentId ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your student ID"
                  />
                  {errors.studentId && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.studentId}
                    </p>
                  )}
                </div>
              )}

              {formData.verificationType === "email" && (
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm mb-2">
                    University Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="example@gctu.edu.gh"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              )}

              {formData.verificationType === "phone" && (
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${
                      errors.phoneNumber ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
              )}

              {formData.verificationType === "ticket" && (
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm mb-2">
                    Service Ticket Number
                  </label>
                  <input
                    type="text"
                    name="serviceTicket"
                    value={formData.serviceTicket}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${
                      errors.serviceTicket
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Enter service ticket number"
                  />
                  {errors.serviceTicket && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.serviceTicket}
                    </p>
                  )}
                </div>
              )}

              <p className="text-sm text-gray-500 mt-2">
                Your information is only used to verify your feedback and will
                not be shared.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded transition-colors"
            >
              Verify & Submit
            </button>
          </form>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="block w-full text-blue-600 hover:text-blue-800 text-center"
        >
          ← Back
        </button>
      </div>
    </div>
  );
}

export default VerificationForm;
