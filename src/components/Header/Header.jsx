import React from 'react';
import { images } from '../../constants/index';

const Header = () => {
	return <section>
		<header>
			<div>
				<img src={images.logo} alt="logo" />
			</div>
			<div></div>
		</header>
	</section>;
};

export default Header;