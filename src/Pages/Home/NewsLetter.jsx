import { Link } from "react-router-dom";

const NewsLetter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter signup logic here
    // For example, send the email address to your backend or external service
    // and display a success message to the user
  };

  return (
    <footer className="bg-lime-500 bg-blur-md py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-white mb-4 text-center sm:text-4xl md:text-5xl lg:text-6xl">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-100 mb-6 text-center sm:text-lg md:text-xl lg:text-2xl">
            Get the latest updates on special offers and promotions!
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="flex items-center mb-4">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-full py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 sm:w-80 md:w-96 lg:w-120"
                required
              />
              <button
                type="submit"
                className="ml-4 bg-orange-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
              >
                Subscribe
              </button>
            </div>
            {/* Add a success message here if needed */}
          </form>
        </div>
      </div>
      <div className="footer footer-center pt-5 text-base-content rounded ">
        <nav className="grid grid-flow-col gap-10 text-xl font-bold">
          <Link to='/' className="link link-hover">Home</Link>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </div>
    </footer>
  );
};

export default NewsLetter;
