import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProgressStep = ({ title, state, status, scheduled }) => (
  <div
    className={`flex flex-col items-start bg-${status} p-4 rounded-lg shadow-md w-full md:w-auto`}
  >
    <p className="text-sm md:text-base">{title}</p>
    <p className="font-bold text-sm md:text-base">{state}</p>
    {scheduled && <p className="text-xs md:text-sm">Scheduled: {scheduled}</p>}
  </div>
);

const CompanyProgress = ({ name, role, steps }) => (
  <div className="mb-8">
    <h4 className="text-base md:text-xl font-semibold mb-2 text-center md:text-left">{name}</h4>
    <p className="text-sm md:text-base mb-4 text-center md:text-left">Role: {role}</p>
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <ProgressStep {...step} />
          {index < steps.length - 1 && (
            <div className="hidden md:flex mx-2 text-xl">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default CompanyProgress;
