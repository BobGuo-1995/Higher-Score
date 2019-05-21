var ScoreJohn1, ScoreJohn2, ScoreJohn3;
var ScoreMike1, ScoreMike2, ScoreMike3;

//additional 
var mary1,mary2,mary3;

ScoreJohn1 = 89, ScoreJohn2 = 120, ScoreJohn3 = 103; 
ScoreMike1 = 116, ScoreMike2 = 94, ScoreMike3 = 123;
mary1 = 97, mary2 = 134 , mary3 = 105;
var averageJohn, averageMike,averageMary; 

averageJohn = (ScoreJohn1 + ScoreJohn2 + ScoreJohn3)/3;
averageMike = (ScoreMike1 + ScoreMike2 + ScoreMike3)/3;
averageMary = (mary1 + mary2 + mary3)/3;
console.log(averageJohn);
console.log(averageMike);
console.log(averageMary);

if (averageJohn === averageMike === averageMary){
    console.log('Draw');
}else if(averageJohn > averageMike && averageJohn > averageMary){
    console.log('John is the winner!');
}else if (averageMike > averageJohn && averageMike > averageMary){
    console.log('Mike is the winner!');       
}else if (averageMary> averageJohn && averageMary > averageMike){
    console.log('Mary is the winner!');           
}
