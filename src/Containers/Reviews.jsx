import p1 from "../Assets/reviews/p1.jpg";
import p2 from "../Assets/reviews/p2.jpg";
import p3 from "../Assets/reviews/p3.jpg";
import p4 from "../Assets/reviews/p4.jpg";

export default function Reviews() {
  const reviews = [
    {
      name: "Jonathan M.",
      review:
        "Exceptional craftsmanship. The watch feels premium, elegant, and worth every cent.",
      rating: 5,
      img: p1,
    },
    {
      name: "Sarah L.",
      review:
        "Absolutely stunning. The detailing is unmatched and the packaging was perfect.",
      rating: 5,
      img: p3,
    },
    {
      name: "David K.",
      review:
        "A perfect blend of luxury and quality. Definitely my new favorite brand.",
      rating: 4,
      img: p2,
    },
    {
      name: "Alex R.",
      review:
        "Pure elegance. The weight, finish, and movement exceeded expectations.",
      rating: 5,
      img: p4,
    },
  ];

  return (
    <section className="py-20 bg-black text-white" id="reviews">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl 
                         hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border border-yellow-500/40"
                />
                <div>
                  <h4 className="text-lg font-semibold text-yellow-500">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-400">Verified Customer</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 text-yellow-500 text-xl mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-300 leading-relaxed mb-6">
                "{item.review}"
              </p>

              {/* Name */}
              <h4 className="text-lg font-semibold text-yellow-500">
                — {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
