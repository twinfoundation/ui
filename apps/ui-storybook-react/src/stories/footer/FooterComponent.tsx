import React from "react";
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

interface FooterComponentProps {
	brandName: string;
	brandUrl: string;
	brandLogo: string;
	sections: Array<{
		title: string;
		links: Array<{ label: string; url: string }>;
	}>;
	copyrightBy: string;
	copyrightYear: number;
}

export const FooterComponent: React.FC<FooterComponentProps> = ({
	brandName,
	brandUrl,
	brandLogo,
	sections,
	copyrightBy,
	copyrightYear
}) => (
	<Footer container>
		<div className="w-full">
			<div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
				<div>
					<Footer.Brand
						href={brandUrl}
						src={brandLogo}
						alt={`${brandName} Logo`}
						name={brandName}
					/>
				</div>
				<div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
					{sections.map((section, index) => (
						<div key={index}>
							<Footer.Title title={section.title} />
							<Footer.LinkGroup col>
								{section.links.map((link, linkIndex) => (
									<Footer.Link key={linkIndex} href={link.url}>
										{link.label}
									</Footer.Link>
								))}
							</Footer.LinkGroup>
						</div>
					))}
				</div>
			</div>
			<Footer.Divider />
			<div className="w-full sm:flex sm:items-center sm:justify-between">
				<Footer.Copyright href="#" by={copyrightBy} year={copyrightYear} />
				<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
					<Footer.Icon href="#" icon={BsFacebook} />
					<Footer.Icon href="#" icon={BsInstagram} />
					<Footer.Icon href="#" icon={BsTwitter} />
					<Footer.Icon href="#" icon={BsGithub} />
					<Footer.Icon href="#" icon={BsDribbble} />
				</div>
			</div>
		</div>
	</Footer>
);
