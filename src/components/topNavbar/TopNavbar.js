import React, { useState } from 'react';
import TopNav from './TopNav';
import Burger from './Burger';

function TopNavbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='top-navbar'>
			<div className='top-section'>
				<div className='logo'>Nav Bar</div>
				<Burger isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
			<TopNav isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	);
}

export default TopNavbar;
