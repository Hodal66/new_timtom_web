import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import MainNavigationBar from '../../components/navBar/MainNavigationBar';

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    // Save the data to local storage
    const formData = JSON.parse(localStorage.getItem('formData')) || [];
    formData.push(data);
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Form submitted successfully!');
    reset(); // Reset form fields
  };

  return (
    <div className="bg-gray-100 p-8">
       <div className="md:hidden">
      <MainNavigationBar/>
      </div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Us</h2>

        <div className="flex flex-col md:flex-row justify-between">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg md:w-1/2 mb-8 md:mb-0 md:mr-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <span className="text-red text-sm">{errors.name.message}</span>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: 'Invalid email address'
                    }
                  })}
                />
                {errors.email && <span className="text-red text-sm">{errors.email.message}</span>}
              </div>
    
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  {...register('message', { required: 'Message is required' })}
                ></textarea>
                {errors.message && <span className="text-red text-sm">{errors.message.message}</span>}
              </div>
              <div className="text-center">
                <button className="bg-blue hover:bg-white text-white hover:text-blue hite font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg md:w-1/2 md:ml-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            <p className="text-gray-700 mb-4">
              <strong>Address:</strong> Kanombe, Kigali, Rwanda
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Phone:</strong> +250 788 519 634
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> info@timtomaviation.com
            </p>
            <div className="mt-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-800 hover:text-blue-600">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="#" className="text-gray-800 hover:text-pink-500">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="#" className="text-gray-800 hover:text-green-500">
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a>
                <a href="#" className="text-gray-800 hover:text-blue-700">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31514.561495122875!2d30.06443924766725!3d-1.9440723946117855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca45e8f7eae99%3A0x8a1a9fef1180a621!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1622902675984!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Timtom Aviation Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

