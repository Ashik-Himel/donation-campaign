import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main>
      <Helmet>
        <title>Page Not Found - Donation Campaign</title>
      </Helmet>
      <div className="container">
        <div className="h-[100vh] flex justify-center items-center text-center">
          <div>
            <img src="/images/question-mark.png" alt="Question Mark" className="w-2/5 max-w-[200px] mx-auto block mb-6" />
            <h2 className="text-3xl font-semibold mb-2">Sorry, Page Not Found!</h2>
            <p className="max-w-[750px] mx-auto text-gray-500 mb-6">The page you are looking for cannot be found. It seems that the page you are trying to access may have been removed, had its name changed, or is temporarily unavailable.</p>
            <Link to={'/'} className="btn bg-[#007DFE] text-white hover:bg-[#007DFE] border border-[#007DFE] hover:border-[#007DFE] normal-case text-base">Return Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Error;