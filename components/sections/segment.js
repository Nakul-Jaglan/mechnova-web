import Image from "next/image";
import Link from "next/link";

const segments = [
  {
    title: "Gardening & Forestry",
    image: "/segment/gardening.webp",
    link: "/products/",
    desc: "Handle tough landscaping and forest maintenance tasks with our robust equipment. Key products: gasoline brush cutters, chainsaws, electric lawn mowers, earth augers. High performance, precision, and ease of use for pros and farm owners.",
  },
  {
    title: "Fumigation",
    image: "/segment/fumigation.webp",
    link: "/products/",
    desc: "Protect crops and spaces with reliable fumigation tools. Gasoline backpack sprayers with brass pump and cordless backpack sprayers for wide coverage and easy application.",
  },
  {
    title: "Diesel Machines",
    image: "/segment/diesel.webp",
    link: "/products/",
    desc: "Powerful machines for demanding applications, especially off-grid. Diesel generators, engines, and motor pumps for irrigation, construction, and backup power.",
  },
  {
    title: "Domestic",
    image: "/segment/domestic.webp",
    link: "/products/",
    desc: "Simple, compact tools for everyday home and garden tasks. Electric pressure washers and gasoline vacuum blower for small gardens, vehicles, and light-duty work.",
  },
  {
    title: "Agro Industrial",
    image: "/segment/agro-industrial.webp",
    link: "/products/",
    desc: "High-performance solutions for farms and agri-enterprises. Gasoline engines, motor pumps, and inverter generators for long-hour usage and rural electrification.",
  },
];

function Segment() {
  return (
    <section className="w-full py-8 bg-[#0072ce]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-100">
          Our Segments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {segments.map((seg, i) => (
            <div
              key={i}
              className="bg-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.05] transition-transform duration-300 cursor-pointer"
            >
                <Link href={segments[i].link}>
                    <div className="relative h-96 w-full">
                        <Image
                        src={seg.image}
                        alt={seg.title}
                        fill
                        className="object-cover object-bottom"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={i === 0}
                        />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-semibold text-2xl mb-2 text-center text-gray-900 hover:text-[#0072ce]">
                        {seg.title}
                        </h3>
                        <p className="text-gray-600 text-base text-center flex-1">{seg.desc}</p>
                    </div>
                </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Segment;