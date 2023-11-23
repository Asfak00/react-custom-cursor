import React from "react";

// react animate cursor
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  return (
    <>
      <div className="app">
        <h1>React Custom Cursor</h1>
      </div>

      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        showSystemCursor={true}
        innerStyle={{
          backgroundColor: "#193b68",
        }}
        outerStyle={{
          border: "2px solid #193b68",
          borderRadius: "50%",
          padding: "20px",
          backgroundColor: "transparent",
        }}
        outerScale={5}
        clickables={[
          "h1",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </>
  );
};

export default App;
