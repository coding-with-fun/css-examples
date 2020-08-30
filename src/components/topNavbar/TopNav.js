import React from 'react';

function TopNav({ isOpen, setIsOpen }) {
	let nav_class = '';

	if (isOpen) nav_class = 'top-nav nav-open';
	else nav_class = 'top-nav nav-closed';

	return (
		<ul className={nav_class}>
			<li>A</li>
			<li>B</li>
			<li>C</li>
			<li>D</li>
		</ul>
	);
}

export default TopNav;
