import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const EmailButton: React.FC = () => {
  const [emailText, setEmailText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailText(event.target.value);
  };

  const handleEmailSend = () => {
    const emailAddress = "asmit2222@gmail.com";
    const subject = "Happy Hour app Restaurant Suggestion";
    const body = emailText;

    // Create the mailto URL with the email parameters
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the user's default email client with the mailto URL
    window.location.href = mailtoUrl;
  };

  return (
    <div>
      <input
        className="suggestionInputBox"
        type="text"
        value={emailText}
        onChange={handleInputChange}
      />
      <Button variant="primary" onClick={handleEmailSend}>
        Suggest a Restaurant
      </Button>
    </div>
  );
};

export default EmailButton;
