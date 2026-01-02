import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-black py-20 px-6 md:px-16 lg:px-24 text-white"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-center mb-14
        bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
      >
        Get in Touch
      </motion.h2>

      {/* MAIN LAYOUT */}
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* LEFT — CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex items-start gap-4">
            <div className="text-yellow-500 text-3xl">
              <FaEnvelope />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-gray-300">support@yourbrand.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-yellow-500 text-3xl">
              <FaPhoneAlt />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-yellow-500 text-3xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Location</h3>
              <p className="text-gray-300">Bulawayo, Zimbabwe</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — CONTACT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/40 border border-yellow-600/20 p-8 rounded-2xl shadow-lg
          backdrop-blur-sm"
        >
          {/* Name */}
          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-300">Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-black/70 border border-gray-700 text-white focus:border-yellow-500 focus:ring-yellow-500 outline-none"
              placeholder="Your Name"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-300">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-black/70 border border-gray-700 text-white focus:border-yellow-500 focus:ring-yellow-500 outline-none"
              placeholder="your@email.com"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-300">Message</label>
            <textarea
              rows="4"
              className="w-full p-3 rounded-lg bg-black/70 border border-gray-700 text-white focus:border-yellow-500 focus:ring-yellow-500 outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-full font-semibold bg-gradient-to-r 
            from-yellow-500 to-yellow-700 text-black shadow-xl hover:scale-105 
            transition-transform"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
