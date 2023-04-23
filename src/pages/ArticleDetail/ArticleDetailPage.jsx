import React from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import { images } from '../../constants/index';
import { Link } from 'react-router-dom';
import SuggestedPosts from './container/SuggestedPosts';
import CommentsContainer from '../../components/Comments/CommentsContainer';

const breadCrumbsData = [
	{ name: 'Home', link: '/' },
	{ name: 'Blog', link: '/blog' },
	{ name: 'Article title', link: '/blog/1' },
];

const postsData = [
	{
		_id: '1',
		image: images.PostImage,
		title: 'Help children get better education',
		createdAt: '2023-01-28T15:35:53.607+0000',
	},
	{
		_id: '2',
		image: images.PostImage,
		title: 'Help children get better education',
		createdAt: '2023-01-28T15:35:53.607+0000',
	},
	{
		_id: '3',
		image: images.PostImage,
		title: 'Help children get better education',
		createdAt: '2023-01-28T15:35:53.607+0000',
	},
	{
		_id: '4',
		image: images.PostImage,
		title: 'Help children get better education',
		createdAt: '2023-01-28T15:35:53.607+0000',
	},
];

const tagsData = [
	'Medical',
	'Lifestyle',
	'Learn',
	'Healthy',
	'Food',
	'Diet',
	'Education',
];

const ArticleDetailPage = () => {
	return (
		<MainLayout>
			<section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
				<article className="flex-1">
					<BreadCrumbs data={breadCrumbsData} />
					<img
						className="rounded-xl w-full"
						src={images.PostImage}
						alt="laptop"
					/>
					<Link
						to="/blog?category=selectedCategory"
						className="text-primary text-sm font-roboto inline-block mt-4 md:text-base"
					>
						EDUCATION
					</Link>
					<h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
						Youths needs to get into better Education
					</h1>
					<div className="mt-4 text-dark-soft">
						<p className="leading-7">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
							congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
							imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
							senectus et netus. Mattis pellentesque id nibh tortor id aliquet
							lectus proin.
						</p>
					</div>
					<CommentsContainer className="mt-10" loggedInUserId="a" />
				</article>
				<div>
					<SuggestedPosts
						header="Latest Article"
						posts={postsData}
						tags={tagsData}
						className="mt-8 lg:mt-0 lg:max-w-xs"
					/>
					<div className='mt-7'>
						<h2 className='font-roboto font-medium text-dark-hard mb-4 md:text-xl'>Share on:</h2>
					</div>
				</div>
			</section>
		</MainLayout>
	);
};

export default ArticleDetailPage;
