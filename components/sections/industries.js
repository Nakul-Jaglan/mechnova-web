import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";

function Industries() {
	const { t } = useTranslation();
	const industries = [
		{
			title: t("home.industries.agriculture.title"),
			desc: t("home.industries.agriculture.description"),
			image: "/mechnova/banner/Agriculture.webp",
		},
		{
			title: t("home.industries.forestry.title"),
			desc: t("home.industries.forestry.description"),
			image: "/mechnova/banner/Forestry.webp",
		},
		{
			title: t("home.industries.agroindustrial.title"),
			desc: t("home.industries.agroindustrial.description"),
			image: "/mechnova/banner/Agroindustrial.webp",
		},
		{
			title: t("home.industries.domestic.title"),
			desc: t("home.industries.domestic.description"),
			image: "/mechnova/banner/Domestic.webp",
		},
		{
			title: t("home.industries.greenhouses.title"),
			desc: t("home.industries.greenhouses.description"),
			image: "/mechnova/banner/diesel.webp",
		}
	];

	return (
		<section className="w-full py-16 bg-[#0072ce]">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-100">
					{t("home.industries.title")}
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
