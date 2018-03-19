import React from 'react';
import Introduction from './../../components/Introduction';
import Button from './../../components/Button';
// import ProfilePic from './FH.png';
import ProfilePic1 from './../../assets/images/home/d1.jpg';
import ProfilePic2 from './../../assets/images/home/d2.jpg';
import ProfilePic3 from './../../assets/images/home/d3.jpg';
import ProfilePic4 from './../../assets/images/home/d4.jpg';
import ProfilePic5 from './../../assets/images/home/d5.jpg';
import ProfilePic6 from './../../assets/images/home/d6.jpg';
import ProfilePic7 from './../../assets/images/home/d7.jpg';
import ProfilePic8 from './../../assets/images/home/d8.jpg';
import ProfilePic9 from './../../assets/images/home/d9.jpg';
import ProfilePic10 from './../../assets/images/home/d10.jpg';
import ProfilePic11 from './../../assets/images/home/d11.jpg';
import ProfilePic12 from './../../assets/images/home/d12.jpg';
import './Home.scss';

export default function Home() {
	function clickFunction () {
		const pic = document.querySelector('.ppic'),
			allImages = pic.getElementsByTagName('img');

		Object.values(allImages).map((image, index) => {
			if ((index+1) % 2 == 0) {
				// console.log(image)
				image.style.marginLeft = '-687px'
			} else {
				// console.log('paratlan');	
				image.style.marginLeft = '687px'
			} 
		})
	}

	console.log("%cThis will be formatted with yellowchr text", "color: #eeaa44")

	return (
		<div className="content">
			<Introduction />
			<div className="home">
				<Button link="/design" text="Design" btnClass="btn-design" />

				<div className="ppic" onClick={ clickFunction }>
					<img id="ppic1" src={ ProfilePic1 } alt=""/>
					<img id="ppic2" src={ ProfilePic2 } alt=""/>
					<img id="ppic3" src={ ProfilePic3 } alt=""/>
					<img id="ppic4" src={ ProfilePic4 } alt=""/>
					<img id="ppic5" src={ ProfilePic5 } alt=""/>
					<img id="ppic6" src={ ProfilePic6 } alt=""/>
					<img id="ppic7" src={ ProfilePic7 } alt=""/>
					<img id="ppic8" src={ ProfilePic8 } alt=""/>
					<img id="ppic9" src={ ProfilePic9 } alt=""/>
					<img id="ppic10" src={ ProfilePic10 } alt=""/>
					<img id="ppic11" src={ ProfilePic11 } alt=""/>
					<img id="ppic12" src={ ProfilePic12 } alt=""/>
				</div>
				{/* <img className="big-profile-pic" src={ ProfilePic } alt="Ferenc Horvath"/> */}

				<Button link="/code" text="Code" btnClass="btn-code" />
            </div>
		</div>
	);
}
