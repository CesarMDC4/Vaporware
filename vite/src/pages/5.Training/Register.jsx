import React from 'react';

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">

      {/* Embedded Google Doc form link to Cypress Engineering Registration form */}
      <iframe
        title="Google Doc Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSczcAzQacJndpHIUeg5i5oFpJT-QF4zPUgr2zGlK_9OdrFQGw/viewform?embedded=true"
        width="640"
        height="800"
      >
        Loading...
      </iframe>
    </div>
  );
};

export default Register;
