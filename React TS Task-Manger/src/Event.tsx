import React, { FormEvent, useEffect, useState } from "react";
import { useTheme } from "./Context";

const Event = () => {
  const context = useTheme();

  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [theme, setTheme] = useState(context);
  console.log(theme);
  useEffect(() => {
    setTheme(context);
  }, [context]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <section className={`${theme.theme}`}>
      <h2>Context Theme : {theme.theme}</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input mb-1"
          value={text}
          placeholder="Enter the name"
          name="text"
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="email"
          className="form-input mb-1"
          value={email}
          placeholder="Enter the email"
          name="email"
          onChange={handleChange}
        />
        <button className="btn btn-center" type="submit">
          submit
        </button>
      </form>
      <button
        onClick={() => {
          if (context.theme === "dark") {
            context.setTheme("system");
            return;
          }
          if (context.theme === "light") {
            context.setTheme("dark");
            return;
          }
          if (context.theme === "system") {
            context.setTheme("light");
            return;
          }
        }}
        className="btn btn-center"
      >
        toggle theme
      </button>
    </section>
  );
};

export default Event;
