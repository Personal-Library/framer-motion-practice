import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
	height: 60vh;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	div {
		font-size: 7rem;
		p {
			display: inline-block;
			margin-left: 1rem;
			margin-right: 0.5rem;
		}
	}
`;

const name = ['A', 'n', 't', 'h', 'o', 'n', 'y', '🦕'];

const container = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.35,
		},
	},
};

const item = {
	hidden: {
		opacity: 0,
		y: -60,
	},
	show: {
		opacity: 1,
		y: 0,
	},
};

const Heading = () => {
	return (
		<Wrapper>
			<motion.div variants={container} initial='hidden' animate='show'>
				{name.map((letter, idx) => {
					return (
						<motion.p key={idx} variants={item}>
							{letter}
						</motion.p>
					);
				})}
			</motion.div>
		</Wrapper>
	);
};

export default Heading;
