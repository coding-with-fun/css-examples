import React from 'react';

function FlexBoxBasic() {
	return (
		<div className='flex-box'>
			<h2>Flex Box Basics</h2>
			<div className='container'>
				<div className='item' id='item-1'>
					First Box
				</div>
				<div className='item' id='item-2'>
					Second Box
				</div>
				<div className='item' id='item-3'>
					Third Box
				</div>
			</div>
		</div>
	);
}

export default FlexBoxBasic;
