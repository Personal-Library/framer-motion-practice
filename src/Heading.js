import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
	height: 50vh;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	div {
		font-size: 7rem;
		font-weight: 600;
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
	const dinoHover = (letter) => {
		switch (letter) {
			case '🦕':
				return { scale: 1.25, rotateZ: 20 };
			default:
				return { rotateZ: 30 };
		}
	};

	const dinoTransition = (letter) => {
		switch (letter) {
			case '🦕':
				return { ease: [0.98, 0, 0.15, 0.95], duration: 0.5 };
			default:
				return { type: 'spring', bounce: 0.5, velocity: 2, restSpeed: 0.5, duration: 1 };
		}
	};

	return (
		<Wrapper>
			<motion.div variants={container} initial='hidden' animate='show'>
				{name.map((letter, idx) => {
					return (
						<motion.p
							key={idx}
							variants={item}
							whileHover={dinoHover(letter)}
							transition={dinoTransition(letter)}
						>
							{letter}
						</motion.p>
					);
				})}
			</motion.div>
		</Wrapper>
	);
};

export default Heading;
