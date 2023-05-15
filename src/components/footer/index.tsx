import footerText from "./utils/footerText"
import {AiOutlineGithub, AiOutlineLinkedin} from "react-icons/ai"

function Footer() {
	return (
		<footer className='footer'>
			<div className="footer__content">
				{footerText.map((item)=>(
					<div key={item.id} className="footer__content-column column">
						<p className="column__title">
							{item.title}
						</p>
						{item.text.map((t,i)=>(
							<a key={i} href="#" className="column__text">
								{t}
							</a>
						))}
					</div>
				))}
				<div className="footer__info">
					<a  className="footer__info-link"
						href="https://github.com/nickLoza/image-resizer-webp-converter"
						target="_blank">
						 <AiOutlineGithub/>Repository
					</a>
					<a  className="footer__info-link"
						href="https://www.linkedin.com/in/nicklozadev/"
						target="_blank">
						<AiOutlineLinkedin/>Linkedin 
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer