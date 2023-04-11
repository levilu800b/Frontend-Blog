import React from 'react';
import { images } from '../../../constants/index';

const Hero = () => {
  return (
		<section>
			<div>
				<h1>Read the most interesting articles</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor
					vitae purus faucibus ornare suspendisse.
				</p>
                <div>
                    <div>
                        <input type="text" />
                    </div>
                    <button>Search</button>
                </div>
                <div>
                    <span>Popular Tags:</span>
                    <ul>
                        <li>Design</li>
                        <li>User Experience</li>
                        <li>User Interfaces</li>
                    </ul>
                </div>
			</div>
			<div>
                <img src={images.HeroImage} alt="users are reading articles" />
            </div>
		</section>
	);
}

export default Hero