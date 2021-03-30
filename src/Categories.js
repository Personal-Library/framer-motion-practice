import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Categories = () => {
	const boxesArray = new Array(16).fill(0);

	return (
		<StyledDiv>
			<motion.div variants={container} initial='hidden' animate='show'>
				{boxesArray.map((_, idx) => {
					return (
						<motion.div variants={item} key={idx} className='flip-card'>
							<div className='flip-card-inner'>
								<div className='flip-card-front'></div>
								<div className='flip-card-back'></div>
							</div>
						</motion.div>
					);
				})}
			</motion.div>
		</StyledDiv>
	);
};

export default Categories;

const container = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const item = {
	hidden: {
		opacity: 0,
		y: 60,
	},
	show: {
		opacity: 1,
		y: 0,
	},
};

const StyledDiv = styled.div`
	margin: 3rem 10rem;
	div {
		width: 100%;
		margin-left: 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		gap: 2rem;

		.flip-card {
			height: 125px;
			width: 250px;
			background-color: #fdcfda;
			perspective: 2000px; // Gives 3D effect
		}

		// Container is needed to position the front and back side
		// This card *experiences* the transform
		.flip-card-inner {
			position: relative;
			margin: 0;
			width: 100%;
			height: 100%;
			text-align: center;
			transition: transform 0.5s;
			transform-style: preserve-3d;
		}

		// Hover triggers flip on both DOM elements
		.flip-card:hover .flip-card-inner {
			transform: rotateY(180deg);
		}

		/* Position the front and back side */
		.flip-card-front,
		.flip-card-back {
			position: absolute;
			top: 0;
			left: 0;
			margin: 0;
			width: 100%;
			height: 100%;
			backface-visibility: hidden;
			-webkit-backface-visibility: hidden;
		}

		/* Style the front side */
		.flip-card-front {
			background-color: #66cdaa;
		}

		/* Style the back side */
		.flip-card-back {
			background-color: #ffcc7f;
			transform: rotateY(180deg);
		}
	}
`;
