import React,{useState} from 'react'
import {questions} from'./QuestionBank.js';
import {  Link } from 'react-router-dom';
import "./Quiz.css";
import { colors } from '@material-ui/core';
const SharkQuiz=()=> {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		
	}
  const nextQuestion=()=>{
    const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
  } 

	return (
		
			<>
      < div className="quiz" >
      <div className="header" style={{backgroundColor:"#bbdefb"}}>
      <p id="title">infotainment</p>  
        </div>
				
					
				<h1> {score} : {questions.length} </h1>
			
            <div class="quizcard">
              <div class="question-count">
            <span> {currentQuestion + 1}</span>/{questions.length}
            </div>
						<h4> {questions[currentQuestion].questionText}</h4>
					
					<div className='options'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='optbutton' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
            </div>
            {currentQuestion==questions.length-1?(
     <button className="next" > <Link to="/dashboard" style={{colors:"white"}} >End</Link></button>
     ):(<button className="next"onClick={nextQuestion}>Next Question</button> )}
     
					</div>
          </div>
       
          
	</>
			
		
	)
     }
            export default SharkQuiz