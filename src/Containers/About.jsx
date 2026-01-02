import { motion } from "framer-motion";
import storyImg from "../assets/story.jpg"; // your image

export default function BrandStory() {
  return (
    <section className="w-full bg-black py-24 px-6 text-white" id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            The Art of{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Craftsmanship
            </span>
          </h2>

          <p className="text-gray-300 mt-6 text-lg leading-relaxed">
            Our timepieces are built with unwavering precision, honoring decades
            of watchmaking mastery. Each watch blends refined artistry with
            cutting-edge engineering.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Hand-polished casings, meticulous movement calibration, and premium
            materials define our commitment to excellence and timeless design.
          </p>

          <button className="mt-10 px-8 py-3 rounded-full border border-yellow-500/40 text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all font-semibold">
            Learn More
          </button>
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <img
            src={storyImg}
            className="w-full h-full object-cover brightness-75"
            alt="Craftsmanship"
          />

          {/* GOLD BORDER OVERLAY */}
          <div className="absolute inset-0 border border-yellow-600/20 rounded-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
