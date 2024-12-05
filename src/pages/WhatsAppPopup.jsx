/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import { useState, useEffect } from "react";
// import { FaTimes } from "react-icons/fa"; // Use Heroicons for the close icon

// const WhatsAppPopup = ({ phoneNumber }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // Show the popup after 60 seconds
//     const initialTimeout = setTimeout(() => {
//       setIsVisible(true);
//     }, 30000);

//     // Show the popup every 2 minutes (120 seconds) after the initial timeout
//     const recurringPopup = setInterval(() => {
//       setIsVisible(true);
//     }, 120000);

//     return () => {
//       clearTimeout(initialTimeout);
//       clearInterval(recurringPopup);
//     };
//   }, []);

//   const sendMessage = () => {
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
//     window.open(whatsappURL, "_blank");
//     setIsVisible(false); // Close the popup after sending
//   };

//   return (
//     isVisible && (
//       <div className="fixed bottom-10 right-10 bg-whiteWhite border border-gray-light shadow-xl rounded-lg p-6 z-50 w-80">
//         {/* Header with Close Icon */}
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-lg font-semibold text-blue">
//             We're Here to Help!{" "}
//           </h3>
//           <button onClick={() => setIsVisible(false)}>
//             <FaTimes className="w-6 h-6 text-gray-dark hover:text-red transition duration-300" />
//           </button>
//         </div>

//         {/* Message Input */}
//         <textarea
//           className="w-full border border-gray-light rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary text-gray-dark"
//           rows="4"
//           placeholder="Type your query here..."
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />

//         {/* Send Button */}
//         <button
//           className="mt-4 w-full bg-gradient-to-r from-primary to-secondary text-white py-2 rounded-lg font-medium shadow-md hover:opacity-90 transition duration-300 animate-bounce"
//           onClick={sendMessage}
//         >
//           Send Message
//         </button>
//       </div>
//     )
//   );
// };

// export default WhatsAppPopup;

import { useState, useEffect } from "react";
import { FaTimes, FaWhatsapp } from "react-icons/fa"; // Import WhatsApp and close icons

const WhatsAppPopup = ({ phoneNumber }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Show the popup after 60 seconds
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 60000);

    // Show the popup every 2 minutes after the initial timeout
    const recurringPopup = setInterval(() => {
      setIsVisible(true);
    }, 120000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(recurringPopup);
    };
  }, []);

  const sendMessage = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
    setIsVisible(false); // Close the popup after sending
  };

  return (
    isVisible && (
      <div className="fixed bottom-10 right-10 bg-whiteWhite border border-gray-light shadow-xl rounded-lg p-6 z-50 w-80">
        {/* Header with WhatsApp Icon */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-secondary w-6 h-6" />{" "}
            {/* WhatsApp Icon */}
            <h3 className="text-lg font-semibold text-primary">Chat with Us</h3>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-dark hover:text-red hover:bg-third p-2 rounded-md transition duration-300"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Message Input */}
        <textarea
          className="w-full border border-gray-light rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary text-gray-dark"
          rows="3"
          placeholder="Type your message here ......."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* Send Button */}
        <button
          className="mt-4 w-full bg-gradient-to-r from-primary to-secondary text-white py-2 rounded-lg font-medium shadow-md hover:opacity-90 transition duration-300 animate-bounce"
          onClick={sendMessage}
        >
          Send Message
        </button>
      </div>
    )
  );
};

export default WhatsAppPopup;
