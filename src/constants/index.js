import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	threejs,
	unrealEngine,
	sqlServer,
	bottega,
	kiewit,
	TechToolbox,
	DepotWizard,
	passwordManager,
	portfolio,
} from "../assets";
import { Tech } from "../components";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Indie Game Developer",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "Sql",
		icon: sqlServer,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "Unreal Engine",
		icon: unrealEngine,
	},
];

const experiences = [
	{
		title: "Full-Stack Developer Bootcamp",
		company_name: "Bottega University",
		icon: bottega,
		iconBg: "#383E56",
		date: "November 2019 - November 2022",
		points: [
			"Learning how to design, implement, and test web applications using frameworks like React and Flask.",
			"Applying UI/UX best practices for an optimal customer experience.",
			"Understanding theory, architecture, and use of both NoSQL and SQL databases.",
		],
	},
	{
		title: "Hardware Depot Technician",
		company_name: "Kiewit Corporation",
		icon: kiewit,
		iconBg: "#FFFFFF",
		date: "July 2021 - Current",
		points: [
			"Developing and maintaining desktop applications built in Powershell to automate and facilitate daily tasks.",
			"Collaborating with the team to consistently figure out new methods and technologies to increase efficiency and accuracy of our job responsibilities.",
			"Utilizing SQL databases to track and maintain important data points related to job functions.",
			"Imaging a wide variety of computers and workstations for company use, ensuring devices are up-to-date with necessary software properly installed.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "TechToolbox",
		description:
			"Desktop application designed to automate tasks required to set up work computers. These tasks include installing Windows and driver updates and installing necessary software",
		tags: [
			{
				name: "powershell",
				color: "blue-text-gradient",
			},
			{
				name: "sql",
				color: "green-text-gradient",
			},
		],
		image: TechToolbox,
	},
	{
		name: "Depot Wizard",
		description:
			"Powershell form designed to submit computer request tickets. The form receives input from user, including type of request, user information with ability to validate shipping address, and user credentials",
		tags: [
			{
				name: "powershell",
				color: "blue-text-gradient",
			},
			{
				name: "sql",
				color: "green-text-gradient",
			},
			{
				name: "azure",
				color: "pink-text-gradient",
			},
			{
				name: "citrix",
				color: "orange-text-gradient",
			},
		],
		image: DepotWizard,
	},
	{
		name: "Password Manager",
		description:
			"Simple Python form built in Tkinter that generates a random complex password for a specified account, and stores the password to a MongoDB data cluster",
		tags: [
			{
				name: "python",
				color: "blue-text-gradient",
			},
			{
				name: "tkinter",
				color: "green-text-gradient",
			},
			{
				name: "mongodb",
				color: "pink-text-gradient",
			},
		],
		image: passwordManager,
		source_code_link: "https://github.com/NHackleman/Password-Manager",
	},
	{
		name: "Personal Portfolio",
		description:
			"My personal portfolio you are seeing now! It has been designed to emphasize my passion for software development.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "threejs",
				color: "pink-text-gradient",
			},
		],
		image: portfolio,
		source_code_link: "https://github.com/NHackleman/3D_Portfolio",
	},
];

export { services, technologies, experiences, testimonials, projects };
