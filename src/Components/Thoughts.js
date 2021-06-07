import React, { useState } from "react";
const Thoughts = ({ thoughts, blur }) => {
  const [showTime, setShowTime] = useState(false);

  return (
    <div>
      <ul className="thoughts">
        {thoughts.map((item, index) => {
          if (item.createdAt)
            return (
              <li key={item.createdAt} className={blur ? "thought" : null}>
                <textarea
                  rows="1"
                  placeholder="Erase with Backspace ⌫"
                  spellcheck="false"
                  aria-selected="false"
                  onHover={() => setShowTime(true)}
                  className="thought-area"
                >
                  {item.thought}
                </textarea>
                {showTime && (
                  <span class="timestamp">
                    {item.createdAt}
                    {console.log("hi")}
                  </span>
                )}{" "}
              </li>
            );
        })}
      </ul>
    </div>
  );
};

export default Thoughts;
