// src/pages/ThankYouPage.jsx
import { Link } from "react-router-dom";

function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center">
        <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
          <svg
            className="w-10 h-10 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Thank You For Your Feedback!
        </h1>

        <p className="text-gray-600 mb-6">
          Your feedback helps GCTU improve our services. We appreciate you
          taking the time to share your experience.
        </p>

        <Link
          to="/"
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default ThankYouPage;
