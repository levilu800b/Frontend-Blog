import React from 'react'

import { images } from '../../constants/index'

const ArticleCard = () => {
  return (
		<div className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]`}>
			<img src={images.PostImage} alt="title" />
		</div>
	);
}

export default ArticleCard