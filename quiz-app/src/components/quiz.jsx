function Quiz() {
    const questionsBank = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris",
        },
            {
            question: "Which language is used for web apps?",
            options: ["Python", "JavaScript", "PHP", "All"],
            answer: "All",
        },
           {
            question: "What does JSX stand for?",
            options: ["JavaScript XML", "Java Syntax eXtension", "Java Source eXtension", "None"],
            answer: "JavaScript XML",
        },
    ];

    return (
        <div> 
            <h2> Question 1</h2>
            <p> {questionsBank[0].question} </p>
        </div> 
    );
}

export default Quiz;
