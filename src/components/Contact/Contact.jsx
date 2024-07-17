// import info from "../../england";
import { useState } from "react";


const Contact = () => {

    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
          "Hello " + contact.name + " your message has been sent. unfortunately my email service has been deprecated."
        )
        alert(
          "I appreciate your time and effort to reach out to me and contact me through my email, englandpelenio17@gmail.com"
        )
        alert(
          "I will get back to you as soon as possible with you sendin through email. Thank you!"
        )
        setContact({
          name: "",
          email: "",
          message: ""
        });
    }

    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-175px)] py-12 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Contact Me
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="form-group">
                <label htmlFor="name" className="text-base text-gray-700 block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contact.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div className="form-group mt-4">
                <label htmlFor="email" className="text-base text-gray-700 block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div className="form-group mt-4">
                <label htmlFor="message" className="text-base text-gray-700 block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={contact.message}
                  onChange={(e) => setContact({ ...contact, message: e.target.value })}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}
 
export default Contact;