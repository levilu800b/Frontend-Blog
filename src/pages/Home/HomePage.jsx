import React from 'react';

import MainLayout from '../../components/MainLayout/MainLayout';
import Hero from './container/Hero';
import CTA from './container/CTA';
import Articles from './container/Articles';

const HomePage = () => {
	return <MainLayout>
		<Hero />
		<Articles />
		<CTA />
	</MainLayout>;
};

export default HomePage;
