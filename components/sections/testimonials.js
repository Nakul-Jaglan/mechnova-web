import React from 'react'
import Image from "next/image";

const testimonials = [
  {
    stars: 5.0,
    name: "Luis Fernando",
    country: "Colombia",
    image: "/testimonials/test1.jpeg",
    message:
      "We\'ve been using Mechnova water pumps for our coffee farm irrigation, and the performance has been outstanding. It\'s reliable even during long-hour usage. Definitely worth the investment.",
  },
  {
    stars: 4.5,
    name: "Ana Gabriela Torres",
    country: "Mexico",
    image: "/testimonials/test2.jpeg",
    message:
      "The backpack sprayer is easy to use and covers a lot of ground. Only wish the battery lasted slightly longer, but overall it\'s a great machine for greenhouse work.",
  },
  {
    stars: 4.7,
    name: "Ramesh Iyer",
    country: "India",
    image: "/testimonials/test3.jpeg",
    message:
      "I bought a Mechnova brush cutter for my farm in Tamil Nadu. It cuts through thick grass like butter. The engine is smooth, and it\'s lighter than other brands I\'ve tried.",
  },
  {
    stars: 4.3,
    name: "Mariana López",
    country: "Peru",
    image: "/testimonials/test4.jpeg",
    message:
      "The chainsaw is solid, and customer service helped me get replacement parts easily. Slight delay in delivery, but machine performance made up for it.",
  },
  {
    stars: 5.0,
    name: "Diego Mendez",
    country: "Guatemala",
    image: "/testimonials/test5.jpeg",
    message:
      "Very impressed with the power of Mechnova\'s diesel generator. We use it for both farm and home backup, and it hasn\'t failed us once. Quiet and efficient!",
  },
  {
    stars: 4.6,
    name: "Kavita Sharma",
    country: "India",
    image: "/testimonials/test6.jpeg",
    message:
      "The vacuum blower I purchased for my garden is compact and gets the job done without any fuss. Packaging could be better, but functionality is top-notch.",
  },
];

function StarRating({ value }) {
  const fullStars = Math.floor(value);
  const halfStar = value % 1 >= 0.25 && value % 1 < 0.75;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <div className="flex items-center justify-center mb-2">
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.04 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
        ))}
      {halfStar && (
        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><defs><linearGradient id="half"><stop offset="50%" stopColor="#facc15"/><stop offset="50%" stopColor="#e5e7eb"/></linearGradient></defs><path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.04 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
      )}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <svg key={i} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.04 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
        ))}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="w-full py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden border-4 border-blue-200">
                <Image src={t.image} alt={t.name} fill className="object-cover" />
              </div>
              <StarRating value={t.stars} />
              <div className="font-semibold text-lg text-gray-900 mb-1">{t.name}</div>
              <div className="text-xs text-blue-700 mb-2">{t.country}</div>
              <div className="text-gray-700 text-base">“{t.message}”</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials