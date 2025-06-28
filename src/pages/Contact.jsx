import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center px-4 py-10">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-10 w-full max-w-5xl">
        <h2 className="text-4xl font-bold text-black text-center mb-10">Get in Touch with <span className="text-red-500">Dhaage</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info Section */}
          <div className="text-black space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">Contact Info</h3>
              <p className="text-gray-600">Have a question or need support? We're here to help you with your fashion journey.</p>
            </div>
            <div>
              <p><strong>📍 Address:</strong> 123 ,Himachal Pradesh , India</p>
              <p><strong>📧 Email:</strong> support@Dhaage.com</p>
              <p><strong>📞 Phone:</strong> +91 99999 99999</p>
            </div>
          </div>

          {/* Form Section */}
          <form className="space-y-6">
            <div>
              <label className="block text-black mb-1">Your Name</label>
              <input type="text" placeholder="John Doe" className="w-full px-4 py-2 border-black bg-white/60 border  text-black rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-black mb-1">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full px-4 py-2 border-black bg-white/60 border  text-black rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-black mb-1">Your Message</label>
              <textarea rows="4" placeholder="Type your message..." className="w-full px-4 py-2 border-black bg-white/60 border  text-black rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-red-500 to-purple-500 text-white font-semibold py-2 rounded-xl hover:opacity-90 transition-all duration-300">
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;