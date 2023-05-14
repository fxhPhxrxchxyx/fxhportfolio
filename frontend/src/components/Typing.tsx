import { Fragment } from "react";

const Typing = ({}) => {
  return (
    <Fragment>
      <p className="line animation-typing">Phurichaya Khemvaraporn (Fah)</p>

      <style>{`
        .line {
          color: "#C7D36F";
          width: 2em;
          margin: 0px;
          border-right: 2px solid rgba(255, 255, 255, 0.75);
          font-weight: 600;
          font-size:32px;
          white-space: nowrap;
          overflow: hidden;
        }
        .animation-typing {
          animation: typing 2s steps(40) 1s 1 normal both,
            blinkTextCursor 500ms steps(40) infinite normal;
        }
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 15em;
          }
        }
        @keyframes blinkTextCursor {
          from {
            border-right-color: black;
          }
          to {
            border-right-color: transparent;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Typing;
