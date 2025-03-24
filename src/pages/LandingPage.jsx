import {  Star, BarChart3, QrCode } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <NavBar/>
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Help Improve Your University Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your feedback helps us enhance the quality of service across all
            departments at Ghana Communication Technology University.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center">
              <QrCode className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-2" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Scan & Rate
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                Scan the QR code at any department to quickly provide feedback
                about your experience.
              </p>
            </div>
            <div className="mb-4">
              <img
                src="/src/assets/qrcode_github.com.png"
                alt="QR Code Example"
                className="mx-auto rounded-lg border border-gray-200 dark:border-gray-700"
              />
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
              View Sample QR
            </button>
          </div>

          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center">
              <Star className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-2" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Rate Staff Members
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                Provide honest feedback about your interaction with university
                staff.
              </p>
            </div>
            <div className="flex justify-center space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-10 w-10 text-yellow-400 fill-yellow-400 m-auto"
                />
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
              Your ratings help us recognize excellent service and identify
              areas for improvement.
            </p>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
              Try Demo Rating
            </button>
          </div>

          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center">
              <BarChart3 className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-2" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Impact Dashboard
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                See how your feedback is helping improve university services.
              </p>
            </div>
            <div className="h-[200px] flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg mb-4">
              <img src="src/assets/stat2.jpeg" alt="stat" className="w-full object-cover h-full" />
              {/* <p className="text-gray-500 dark:text-gray-400">
                Public statistics dashboard coming soon
              </p> */}
            </div>
            <button className="w-full border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-gray-800">
              Learn More
            </button>
          </div>
        </section>

        <section className="bg-blue-50 dark:bg-gray-800 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 dark:bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  1
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Scan QR Code
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Scan the QR code displayed in the department after receiving
                service.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 dark:bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  2
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Select Staff
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Choose the staff member you want to rate from the list
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 dark:bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  3
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Submit Rating
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Rate your experience and provide optional comments for
                improvement.
              </p>
            </div>
          </div>
        </section>
      </main>

     <Footer/>
    </div>
  );
}

export default LandingPage;
