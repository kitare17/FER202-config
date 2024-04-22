import { useParams } from "react-router"
import { Question } from './question';

const QuestionDetail=()=>{
    const {id}=useParams();
    const questionDetail=Question.filter((question)=>{return question.id==id;})[0]  ;
    console.log(questionDetail)
    return(
        <div>
            <p> {questionDetail.id}</p>
            <p> {questionDetail.options}</p>
            <p> {questionDetail.correctAnswer}</p>
      
        </div>
    )
}
export default  QuestionDetail;