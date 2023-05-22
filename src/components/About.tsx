import React from 'react';
import cardBg from '../../public/understand.svg';
import communicate from '../../public/communicate.svg';
import deliver from '../../public/deliver.svg';
import Card from './Card';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {};

function About({}: Props) {
  return (
    <div id="vision" className="min-h-screen py-10">
      {/* <div className='bg-wave w-full h-48 bg-no-repeat bg-cover absolute'></div> */}
      <div className="flex flex-col items-center pt-5">
        <h1 className="max-w-xl text-center text-4xl font-bold text-black">
          What do we mean when we say{' '}
          <span className="text-primary">Customer First</span>
        </h1>
        <div className="flex lg:flex-row flex-col lg:space-x-10 lg:space-y-0 space-y-10 mt-10">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: -3000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              exit={{ opacity: 0, x: -3000 }}
            >
              <Card
                Word1="We"
                Word2="hear"
                Word3="Understand"
                para="We are empathetic to business needs and attentive to pain points of our customers and not afraid to put in the extra effort to provide best value"
                cardBg={cardBg}
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: -3000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              exit={{ opacity: 0, x: -3000 }}
            >
              <Card
                cardBg={communicate}
                Word1="We"
                Word2="Communicate"
                Word3="Engage"
                para="We ask the right questions and welcome all stakeholders to get involved throughout the software development process to increase efficiency"
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: -3000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              exit={{ opacity: 0, x: -3000 }}
            >
              <Card
                cardBg={deliver}
                Word1="We"
                Word2="Build"
                Word3="Deliver"
                para="We craft digital solutions with utmost detail while equally focusing on the customer journey so that it's not just a product that is delivered but a lasting customer experience"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default About;
