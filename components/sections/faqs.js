"use client";
import { useState } from "react";

const faqs = [
	{
		q: "What types of machines does Mechnova offer?",
		a: "Mechnova offers a wide range of equipment including brush cutters, chainsaws, sprayers, generators, engines, water pumps, and domestic tools like pressure washers and vacuum blowers. These machines are suited for agricultural, forestry, fumigation, industrial, and household applications.",
	},
	{
		q: "Who can benefit from Mechnova's products?",
		a: "Our machines are designed for a broad range of users including farmers, landscapers, warehouse operators, agri-enterprises, construction professionals, and even homeowners seeking compact, low-maintenance tools.",
	},
	{
		q: "What makes Mechnova machines reliable?",
		a: "Mechnova machines are engineered for high performance, durability, and ease of use. We support our products with strong warranties, thorough quality checks, and unmatched after-sales service to ensure long-term customer satisfaction.",
	},
	{
		q: "Do you provide support to distributors and resellers?",
		a: "Yes, Mechnova works closely with importers, wholesalers, and retailers. We provide business support including marketing assistance, technical documentation, and reliable product supply to help our partners grow confidently.",
	},
	{
		q: "What is Mechnova's mission?",
		a: "Our mission is to empower communities globally with efficient, affordable, and high-quality machinery that enhances productivity across agriculture, gardening, fumigation, and domestic needs—all while building lasting partnerships.",
	},
];

function Faqs() {
	const [open, setOpen] = useState(null);

	return (
		<section className="w-full py-8 bg-[#0072ce]">
			<div className="container mx-auto px-4 max-w-3xl">
				<h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-white">
					Frequently Asked Questions
				</h2>
				<div className="space-y-4">
					{faqs.map((faq, i) => (
						<div
							key={i}
							className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-gray-50"
						>
							<button
								className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none focus:bg-blue-50 transition cursor-pointer"
								onClick={() => setOpen(open === i ? null : i)}
								aria-expanded={open === i}
								aria-controls={`faq-${i}`}
							>
								<span className="font-semibold text-lg text-gray-900">
									{faq.q}
								</span>
								<span
									className={`ml-4 transition-transform ${
										open === i ? "rotate-180" : ""
									}`}
								>
									▼
								</span>
							</button>
							<div
								id={`faq-${i}`}
								className={`px-6 text-gray-700 text-base transition-all duration-300 ease-in-out ${
									open === i
										? "max-h-40 opacity-100 pb-4"
										: "max-h-0 opacity-0 overflow-hidden"
								}`}
								style={{}}
							>
								{faq.a}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Faqs;