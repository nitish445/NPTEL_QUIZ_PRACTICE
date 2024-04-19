import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Result = () => {
    const { showResult, quizs, marks, startOver }  = useContext(DataContext);
    return (
        <section className=" text-white" style={{ display: `${showResult ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className={`text-light text-center p-5 rounded ${marks > 85 ? 'bg-success' : 'bg-danger'}`}>
                            <h1 className='mb-2 fw-bold'>{marks > 85 ? 'Awesome!' : 'Oops!'}</h1>
                            
                            <h3 className='mb-3 fw-bold'>Your score is {marks} out of 100</h3>
                            <h4 className='mb-2 fw-bold'>You Scored {(marks/2)*1.5} out of 75</h4>

                            <button onClick={startOver} className='btn py-2 px-4 btn-light fw-bold d-inline'>Start Over</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Result;