import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main>
      <div className="container">
        <div className="h-[100vh] flex justify-center items-center text-center">
          <div>
            <img src="/images/404-img.jpg" alt="404 Image" className="w-full max-w-[400px] block mb-6" />
            <h2 className="text-3xl font-semibold mb-6">Sorry, Page Not Found!</h2>
            <Link to={'/'} className="btn bg-[#007DFE] text-white hover:bg-[#007DFE] border border-[#007DFE] hover:border-[#007DFE] normal-case text-base">Return Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Error;