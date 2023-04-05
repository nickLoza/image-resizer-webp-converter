import footerText from "./utils/footerText"

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
			</div>
		</footer>
	)
}

export default Footer