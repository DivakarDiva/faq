import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [{
            question: "What is React?",
            answer: "React is a JavaScript library for building user interfaces.",
        },
        {
            question: "What is useState?",
            answer: "useState is a React Hook that lets you add and manage state in a component.",
        },
        {
            question: "What is an Accordion?",
            answer: "An Accordion is a UI component where sections can be expanded or collapsed.",
        },
        {
            question: "Can multiple FAQ items be open?",
            answer: "In this example, only one FAQ item can be open at a time.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
	<div style = { styles.container } >
        <h1 > Its MY FAQ Accordion </h1>

        {
            faqs.map((faq, index) => (
                <div key = { index } style = { styles.item } >
                <button onClick = { () => toggleFAQ(index) }
                style = { styles.question } >
                { faq.question }
                <span> { openIndex === index ? "−" : "+" } </span>  </button>

                {
                    openIndex === index && ( < div style = { styles.answer } > { faq.answer } </div>)
                } </div>


            ))
        } </div>
    );
}

const styles = {
    container: {
        width: "500px",
        margin: "50px auto",
        fontFamily: "Arial",
        
    },

    item: {
        border: "1px solid #ddd",
        marginBottom: "10px",
        borderRadius: "5px",
        overflow: "hidden",
    },

    question: {
        width: "100%",
        padding: "18px",
        border: "none",
        background: "#f5f5f5",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "16px",
        fontWeight: "bold",
        
    },

    answer: {
        padding: "18px",
        background: "white",
        lineHeight: "1.5",
    },
};

createRoot(document.getElementById("root")).render( <App/> );
