import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Categories = () => {
	const boxesArray = new Array(16).fill(0);

	return (
		<StyledDiv>
			<motion.div variants={container} initial='hidden' animate='show'>
				{boxesArray.map((_, idx) => {
					return <motion.div variants={item} key={idx}></motion.div>;
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
		div {
			height: 125px;
			width: 250px;
			background-color: #e0e0e0;
		}
	}
`;
