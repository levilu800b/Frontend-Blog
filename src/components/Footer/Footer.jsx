import React from 'react';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { BsTelegram } from 'react-icons/bs';



import { images } from '../../constants/index';

const Footer = () => {
	return (
		<section className="bg-dark-soft">
			<footer className="container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5">
				<div className="col-span-5">
					<h3 className="text-dark-light font-bold">Product</h3>
					<ul className="text-[#959EAD] text-sm mt-5 space-y-4">
						<li>
							<a href="/">Landing Page</a>
						</li>
						<li>
							<a href="/">Features</a>
						</li>
						<li>
							<a href="/">Documentation</a>
						</li>
						<li>
							<a href="/">Referral Program</a>
						</li>
						<li>
							<a href="/">Pricing</a>
						</li>
					</ul>
				</div>
				<div className="col-span-5">
					<h3 className="text-dark-light font-bold">Services</h3>
					<ul className="text-[#959EAD] text-sm mt-5 space-y-4">
						<li>
							<a href="/">Documentation</a>
						</li>
						<li>
							<a href="/">Design</a>
						</li>
						<li>
							<a href="/">Themes</a>
						</li>
						<li>
							<a href="/">Illustration</a>
						</li>
						<li>
							<a href="/">UI kit</a>
						</li>
					</ul>
				</div>
				<div className="col-span-5">
					<h3 className="text-dark-light font-bold">Company</h3>
					<ul className="text-[#959EAD] text-sm mt-5 space-y-4">
						<li>
							<a href="/">About</a>
						</li>
						<li>
							<a href="/">Terms</a>
						</li>
						<li>
							<a href="/">Privacy Policy</a>
						</li>
						<li>
							<a href="/">Careers</a>
						</li>
					</ul>
				</div>
				<div className="col-span-5">
					<h3 className="text-dark-light font-bold">More</h3>
					<ul className="text-[#959EAD] text-sm mt-5 space-y-4">
						<li>
							<a href="/">Documentation</a>
						</li>
						<li>
							<a href="/">License</a>
						</li>
						<li>
							<a href="/">Changelog</a>
						</li>
					</ul>
				</div>
				<div className='col-span-10'>
					<img src={images.logo} alt="logo" className='brightness-0 invert mx-auto' />
					<p className='text-sm text-dark-light text-center mt-4'>Build a modern and creative website with crealand</p>
					<ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300">
						<li>
							<a href="/">
								<AiOutlineTwitter className='w-6 h-auto' />
							</a>
						</li>
						<li>
							<a href="/">
								<AiFillInstagram className='w-6 h-auto' />
							</a>
						</li>
						<li>
							<a href="/">
								<FaFacebook className='w-6 h-auto' />
							</a>
						</li>
						<li>
							<a href="/">
								<BsTelegram className='w-6 h-auto' />
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</section>
	);
};

export default Footer;
