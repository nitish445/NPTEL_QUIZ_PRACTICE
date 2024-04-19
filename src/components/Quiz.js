import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../context/dataContext';

const Quiz = () => {
    const { showQuiz, quizs, checkAnswer, correctAnswer, selectedAnswer, questionIndex, nextQuestion, showTheResult } = useContext(DataContext);
    const [randomQuestions, setRandomQuestions] = useState([]);

    useEffect(() => {
        // Function to select random 50 questions
        const selectRandomQuestions = () => {
            const shuffledQuestions = quizs.sort(() => 0.5 - Math.random()); // Shuffle the questions array
            const selectedQuestions = shuffledQuestions.slice(0, 50); // Get the first 50 questions
            setRandomQuestions(selectedQuestions);
        };

        selectRandomQuestions(); // Call the function to select random questions when the component mounts
    }, [quizs]); // Trigger the effect whenever the quizs array changes

    const question = randomQuestions[questionIndex];

    return (
        <section className="text-white" style={{ display: `${showQuiz ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <div className="card p-4" style={{ background: '#3d3d3d', borderColor: '#646464' }}>
                            <div className="d-flex justify-content-between gap-md-3">
                                <h5 className='mb-2 fs-normal lh-base'>{question?.question}</h5>
                                <h5 style={{ color: '#60d600', width: '100px', textAlign: 'right' }}>{questionIndex + 1} / {randomQuestions?.length}</h5>
                            </div>
                            <div>
                                {
                                    question?.options?.map((item, index) => (
                                        <button
                                            key={index}
                                            className={`option w-100 text-start btn text-white py-2 px-3 mt-3 rounded btn-dark ${correctAnswer === item && 'bg-success'}`}
                                            onClick={(event) => checkAnswer(event, item)}
                                        >
                                            {item}
                                        </button>
                                    ))
                                }
                            </div>
                            {
                                (questionIndex + 1) !== randomQuestions.length ?
                                    <button className='btn py-2 w-100 mt-3 bg-primary text-light fw-bold' onClick={nextQuestion} disabled={!selectedAnswer}>Next Question</button>
                                    :
                                    <button className='btn py-2 w-100 mt-3 bg-primary text-light fw-bold' onClick={showTheResult} disabled={!selectedAnswer}>Show Result</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quiz;
