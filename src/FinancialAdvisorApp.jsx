import React, { useState } from "react";
import ReactPlayer from "react-player";
import './FinancialAdvisorApp.css'

import logo from "./images/logo.png";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import MessageRecipient from "./MessageRecipient";

const questions = [
  "How can I build my credit score?",
  "How can I start a business?",
  "How can I plan for college?",
];
const answers = [
  "To build your credit score, check your credit report for errors, use a secured credit card or credit builder loan, and always make timely payments. Keep your credit utilization below 30%, avoid opening too many new accounts, and maintain old accounts for a longer credit history. Apply for new credit only when needed, monitor your credit regularly, and be patient while practicing responsible financial habits. Building credit takes time, but these steps will help you establish a strong credit profile.",
  "To start a business, you'll need to follow these key steps. First, conduct thorough market research to identify your target audience and assess the demand for your product or service. Next, create a detailed business plan outlining your objectives, strategies, and financial projections. Register your business name and structure, obtain necessary permits and licenses, and secure funding through personal savings, loans, or investors. Build a strong team and network with industry professionals. Establish your online and offline presence through a website, social media, and marketing efforts. Lastly, launch your business and continually adapt and grow based on customer feedback and market trends. Remember, entrepreneurship requires dedication, resilience, and adaptability.",
  "To financially plan for college, start by researching college costs and creating a budget that includes tuition, living expenses, and other necessities. Explore financial aid options like scholarships, grants, and federal aid through the FAFSA. Save early by setting up a college savings account or getting a part-time job in high school. Consider attending a community college to save on tuition before transferring to a four-year institution. Compare financial aid packages from different colleges to understand your net cost. Minimize debt by opting for federal loans and living frugally during college. Look for work-study programs and paid internships for additional income. Regularly reassess your plan to adjust to changing circumstances and financial aid opportunities. Seek guidance from college counselors or financial aid offices as needed.",
];

const videoAnswers = [
  "https://youtu.be/kjYlsz2kmII",
  "https://youtu.be/RxQHjlv38wQ",
  "https://youtu.be/lZa8r3hUc8w",
];

const achivements = [
  "Entrepreneur : Ask about business",
  "Rookie : Ask your first question",
  "Rothlisberger : Ask about a Roth IRA",
];

const FinancialAdvisorApp = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm NeuroBank, your financial advisor",
      sentTime: "just now",
      sender: "NeuroBank",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [showAchievements, setShowAchievements] = useState(false);
  const [achievements, setAchievements] = useState([]);
  const [questionsAsked, setQuestionsAsked] = useState(1);

  const apiKey = process.env.REACT_APP_API_KEY;

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    const questionIndex = questions.findIndex(
      (q) => q.toLowerCase() === message.toLowerCase()
    );

    if (questionIndex !== -1) {
      setIsTyping(true);

      setTimeout(() => {
        const answerMessage = {
          message: answers[questionIndex],
          sender: "NeuroBank",
        };
        const videoMessage = {
          message: videoAnswers[questionIndex],
          sender: "NeuroBank",
          isVideo: true,
        };

        setMessages([...newMessages, answerMessage, videoMessage]);
        setIsTyping(false);

        // Set the React Player URL based on the user's input
        setVideoUrl(videoAnswers[questionIndex]);
      }, 3000);
    } else {
      setIsTyping(true);
      await processMessageToChatGPT(newMessages);
      setIsTyping(false);
    }

    setQuestionsAsked(questionsAsked + 1);
    console.log(questionsAsked);
     if (questionsAsked === 1 && !achievements.includes("Rookie : Ask your first question")) {
      alert("Rookie achivement unlocked!");
      // If the user asks their first question, add the "Rookie" achievement to the unlocked achievements
      setAchievements([...achievements, "Rookie : Ask your first question"]);
      achivements.splice(1, 1);
    }
    
    if (message.toLowerCase().includes("roth ira") && !achievements.includes("Rothlisberger : Ask about a Roth IRA"))
       {
      alert("Rothlisberger achievement unlocked!");
      setAchievements([...achievements, "Rothlisberger : Ask about a Roth IRA"]);
      achivements.splice(1, 1);
    }
    

  };

  async function processMessageToChatGPT(chatMessages) {
    // ... (existing code)
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if(messageObject.sender === "ChatGPT"){
        role="assistant";
      } else {
        role = "user";
      }
      return {role: role, content: messageObject.message}

    });
    const systemMessage = {
      role: "system",
      content: "Imagine you are a financial advisor and are trying to educate a client with minimal financial experience. "
    }
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages
      ]
    }
    await fetch("https://api.openai.com/v1/chat/completions",{
      method: "POST",
      headers: {
        "Authorization": "Bearer "+ apiKey, 
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      console.log(data.choices[0].message.content);
      setMessages(
        [...chatMessages,{
message: data.choices[0].message.content,
sender: "ChatGPT"
        }]
      );
      setIsTyping(false);
    });
  }

  const handleAchievementsButtonClick = () => {
    setShowAchievements(!showAchievements);
  };

  return (
    <div
      className="App"
      style={{
        height: "calc(100vh - 100px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "100px",
      }}
    >
      {/* ─── FUTURISTIC SLIM HEADER ─── */}
      <header className="advisor-header">
        <img src={logo} alt="NeuroBank Logo" className="advisor-logo" />
        <h2 className="advisor-title">NeuroBank Advisor</h2>
      </header>
      <div className="advisor-page">
      <div className="advisor-chat" style={{ maxWidth: "800px", width: "665px", height: "70vh", marginTop: "1.5rem" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? (
                  <TypingIndicator content="NeuroBank is typing" />
                ) : null
              }
              style={{ maxHeight: "calc(100% - 40px)", overflowY: "auto" }}
            >
              {messages.map((message, i) => {
                if (message.sender === "NeuroBank" && message.isVideo) {
                  return (
                    <div key={i}>
                      <MessageRecipient>{message.sender}</MessageRecipient>
                      <ReactPlayer url={videoUrl} controls width="400px" height="400px" />
                    </div>
                  );
                }
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput
              placeholder="Type message here"
              onSend={handleSend}
            />
          </ChatContainer>
        </MainContainer>
      </div>

      {/* ─── ACHIEVEMENTS PANEL ─── */}
      <div className="achievements-container">
        <button id="achivementButton" onClick={handleAchievementsButtonClick}>
          {showAchievements ? "Hide Achievements" : "Show Achievements"}
        </button>
        {showAchievements && (
          <div className="achievements-list">
            <h2>Unlocked Achievements:</h2>
            <ul>
              {achievements.map((ach, idx) => (
                <li key={idx}>{ach}</li>
              ))}
            </ul>
            <h2>Locked Achievements:</h2>
            <ul>
              {achivements.map((ach, idx) => {
                const label = `Achievement: ${ach}`;
                return !achievements.includes(label) ? (
                  <li key={idx}>{label} (Locked)</li>
                ) : null;
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default FinancialAdvisorApp;
