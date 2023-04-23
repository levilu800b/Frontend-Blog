import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaRedditSquare, FaWhatsappSquare, FaLinkedin } from 'react-icons/fa'

const SocialShareButtons = ({ url, title}) => {
  return (
		<div className="w-full flex justify-between">
			<a
				target="_blank"
				rel="noreferrer"
				href={`https://www.facebook.com/dialog/share?app_id=1180206992856877&display=popup&href=${url}`}
			>
				<FaFacebookSquare className="text-[#3B5998] w-12 h-auto" />
			</a>
			<a
				target="_blank"
				rel="noreferrer"
				href={`https://twitter.com/intent/tweet?url=${url}`}
			>
				<FaTwitterSquare className="text-[#00ACEE] w-12 h-auto" />
			</a>
			<a
				target="_blank"
				rel="noreferrer"
				href={`http://www.reddit.com/submit?url=${url}&title=${title}`}
			>
				<FaRedditSquare className="text-[#FF4500] w-12 h-auto" />
			</a>
			<a
				target="_blank"
				rel="noreferrer"
				href={`https://api.whatsapp.com/send/?text=${url}`}
			>
				<FaWhatsappSquare className="text-[#25D366] w-12 h-auto" />
			</a>
			<a
				target="_blank"
				rel="noreferrer"
				href={`https://www.linkedin.com/shareArticle?url=${url}`}
			>
				<FaLinkedin className="text-[#0077B5] w-12 h-auto" />
			</a>
		</div>
	);
}

export default SocialShareButtons