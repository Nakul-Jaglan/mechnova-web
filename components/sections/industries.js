import Image from "next/image";

const industries = [
	{
		title: "Agriculture & Farming",
		desc: "Reliable machines for irrigation, crop maintenance, and field prep—from gasoline engines to motor pumps and sprayers.",
		image: "https://images.unsplash.com/flagged/photo-1573722398482-f0853718ba49?q=80&w=581&auto=format&fit=crop",
	},
	{
		title: "Forestry & Landscaping",
		desc: "Powerful brush cutters and chainsaws for clearing, pruning, and land management—ideal for tough terrain and precision work.",
		image: "https://plus.unsplash.com/premium_photo-1661939048709-4b778b9f5d2c?q=80&w=580&auto=format&fit=crop",
	},
	{
		title: "Agroindustrial Enterprises",
		desc: "High-performance generators and pumps built to support long operational hours and rural electrification for farms and agro-units.",
		image: "https://plus.unsplash.com/premium_photo-1661811847476-3ea28469f856?q=80&w=607&auto=format&fit=crop",
	},
	{
		title: "Domestic & Home Use",
		desc: "Compact tools like electric pressure washers and blowers—perfect for gardening, cleaning, and light maintenance at home.",
		image: "https://plus.unsplash.com/premium_photo-1742884841249-87657739c659?q=80&w=528&auto=format&fit=crop",
	},
	{
		title: "Greenhouses & Warehouses",
		desc: "Fumigation tools designed for large coverage areas, helping protect crops and stored goods efficiently and safely.",
		image: "https://images.unsplash.com/photo-1627674358849-41ac471e5df5?q=80&w=537&auto=format&fit=crop",
	},
	{
		title: "Construction & Off-Grid Operations",
		desc: "Robust diesel generators and water pumps that deliver consistent performance in demanding work sites and remote areas.",
		image: "https://images.unsplash.com/photo-1643308012242-704341800ef3?q=80&w=580&auto=format&fit=crop",
	},
];

function Industries() {
	return (
		<section className="w-full py-16 bg-gradient-to-br from-green-50 to-blue-50">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
					Industries We Serve
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{industries.map((ind, i) => (
						<div
							key={i}
							className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.03] transition-transform duration-300"
						>
							<div className="relative h-80 w-full">
								<Image
									src={ind.image}
									alt={ind.title}
									fill
									className="object-cover object-bottom"
									sizes="(max-width: 768px) 100vw, 33vw"
									priority={i === 0}
								/>
							</div>
							<div className="p-6 flex flex-col flex-1">
								<h3 className="font-semibold text-lg mb-2 text-center text-gray-900">
									{ind.title}
								</h3>
								<p className="text-gray-600 text-sm text-center flex-1">
									{ind.desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Industries;