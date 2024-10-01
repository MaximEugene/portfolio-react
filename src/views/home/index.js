import React, { useRef, useState, useEffect } from "react";
import MenuIcon from "../../components/menuIcon/inedex";
import { CSSTransition } from "react-transition-group";

import "./home.css";
import clsx from "clsx";
const Home = () => {
  const onPlay = useRef(true);
  const nodeRef = useRef([]);
  const ref11 = useRef(null);
  const ref12 = useRef(null);
  const ref23 = useRef(null);
  const ref31 = useRef(null);
  const ref13 = useRef(null);
  const ref21 = useRef(null);
  const ref32 = useRef(null);
  const [currentState, setCurrentState] = useState(11);
  const [currentTransitionState, setCurrentTransitionState] = useState(0);
  window.onload = function () {
    currentState === 11 && ref11.current && ref11.current.play();
  };
  console.log(onPlay.current, "onplaycurre");
  const handlePrev = () => {
    console.log("handle prev", currentState % 10, currentState);
    if (onPlay.current) {
      if (currentState % 10 === 1) {
        setCurrentState(13);
      } else {
        setCurrentState((currentState % 10) * 11 - 1);
      }
    }
  };

  const handleNext = () => {
    if (onPlay.current) {
      if (currentState % 10 === 3) {
        setCurrentState(31);
      } else {
        setCurrentState((currentState % 10) * 11 + 1);
      }
    }
  };

  const handleState = (i) => {
    if (onPlay.current && currentState % 10 !== i) {
      setCurrentState((currentState % 10) * 10 + i);
    }
  };
  useEffect(() => {
    setCurrentTransitionState(currentState % 10);
    if (onPlay.current) {
      currentState === 12 && ref12.current && ref12.current.play();
      currentState === 13 && ref13.current && ref13.current.play();
      currentState === 23 && ref23.current && ref23.current.play();
      currentState === 21 && ref21.current && ref21.current.play();
      currentState === 31 && ref31.current && ref31.current.play();
      currentState === 32 && ref32.current && ref32.current.play();
    }
    onPlay.current = false;
    const timeoutId = setTimeout(() => {
      onPlay.current = true;
      //   ref12.current.pause();
      //   ref13.current.pause();
      //   ref23.current.pause();
      //   ref21.current.pause();
      //   ref31.current.pause();
      //   ref32.current.pause();
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [currentState]);
  return (
    <div className="home">
      <div className="home__background">
        <video
          ref={ref11}
          className={clsx("home__background__video", {
            "is-current": currentState === 11,
          })}
          data-src="assets/video/intro.mp4"
          //   data-poster="assets/video/intro.jpg"
          //   poster="intro.jpg"
          data-object-fit="cover"
          preload="auto"
          muted
          playsInline
          data-id="intro"
          src="assets/video/intro.mp4"
        ></video>
        <video
          ref={ref12}
          className={clsx("home__background__video", {
            "is-current": currentState === 12,
          })}
          data-src="assets/video/1-2.mp4"
          //   data-poster="intro.jpg"
          //   poster="intro.jpg"
          data-object-fit="cover"
          preload="auto"
          muted
          playsInline
          data-id="intro"
          src="assets/video/1-2.mp4"
        ></video>
        <video
          ref={ref13}
          className={clsx("home__background__video", {
            "is-current": currentState === 13,
          })}
          data-src="assets.video/1-3.mp4"
          //   data-poster="intro.jpg"
          //   poster="intro.jpg"
          data-object-fit="cover"
          preload="auto"
          muted
          playsInline
          data-id="intro"
          src="assets/video/1-3.mp4"
        ></video>
        <video
          ref={ref23}
          className={clsx("home__background__video", {
            "is-current": currentState === 23,
          })}
          data-src="assets/video/2-3.mp4"
          //   data-poster="intro.jpg"
          //   poster="intro.jpg"
          data-object-fit="cover"
          preload="auto"
          muted
          playsInline
          data-id="intro"
          src="assets/video/2-3.mp4"
        ></video>
        <video
          ref={ref21}
          className={clsx("home__background__video", {
            "is-current": currentState === 21,
          })}
          data-src="assets/video/2-1.mp4"
          //   data-poster="intro.jpg"
          //   poster="intro.jpg"
          data-object-fit="cover"
          preload="auto"
          muted
          playsInline
          data-id="intro"
          src="assets/video/2-1.mp4"
        ></video>
        <video
          ref={ref31}
          className={clsx("home__background__video", {
            "is-current": currentState === 31,
          })}
          data-src="assets/video/3-1.mp4"
          //   data-poster="intro.jpg"
          //   poster="intro.jpg"
          data-object-fit="cover"
          preload="auto"
          muted
          playsInline
          data-id="intro"
          src="assets/video/3-1.mp4"
        ></video>
        <video
          ref={ref32}
          className={clsx("home__background__video", {
            "is-current": currentState === 32,
          })}
          data-src="assets/video/3-2.mp4"
          //   data-poster="intro.jpg"
          //   poster="intro.jpg"
          data-object-fit="cover"
          preload="auto"
          muted
          playsInline
          data-id="intro"
          src="assets/video/3-2.mp4"
        ></video>
      </div>
      <section className="home__screen">
        <CSSTransition
          timeout={300}
          in={!onPlay.current}
          classNames="vert-text-first"
          nodeRef={nodeRef[13]}
        >
          <div className="menu-icon-div vert-text-first" ref={nodeRef[13]}>
            <MenuIcon />
          </div>
        </CSSTransition>
        <CSSTransition
          timeout={300}
          in={!onPlay.current}
          classNames="vert-text-first"
          nodeRef={nodeRef[14]}
        >
          <a
            className="logo vert-text-first"
            href="http://localhost:3000"
            ref={nodeRef[14]}
          >
            Sr.Dev
          </a>
        </CSSTransition>
        {/* <div className="home__index">
          <span className="home__index__current">
            <span
              className="home__index__value home__index__value--next"
              aria-hidden="true"
              //   style="visibility: inherit; transform: translate(0%, 100%) matrix(1, 0, 0, 1, 0, 0);"
            >
              03
            </span>
            <span
              className="home__index__value home__index__value--next"
              aria-hidden="true"
              //   style="visibility: inherit; transform: translate(0%, 100%) matrix(1, 0, 0, 1, 0, 0);"
            >
              02
            </span>
            <span
              className="home__index__value"
              //   style="visibility: inherit; transform: translate(0%, -100%) matrix(1, 0, 0, 1, 0, 0);"
            >
              01
            </span>
          </span>
          <span
            className="home__index__separator"
            // style="opacity: 0; transform: matrix(1, 0, 0, 1, 0, 0);"
          ></span>
          <span className="home__index__total">
            <span
              className="home__index__value home__index__value--next"
              aria-hidden="true"
              //   style="visibility: inherit; transform: translate(0%, -100%) matrix(1, 0, 0, 1, 0, 0);"
            >
              01
            </span>
            <span
              className="home__index__value home__index__value--next"
              aria-hidden="true"
              //   style="visibility: inherit; transform: translate(0%, -100%) matrix(1, 0, 0, 1, 0, 0);"
            >
              02
            </span>
            <span
              className="home__index__value"
              //   style="visibility: inherit; transform: matrix(1, 0, 0, 1, 0, 0);"
            >
              03
            </span>
          </span>
        </div> */}

        <div className="home__screen__text">
          <h1 className="home__screen__title">
            <span className="home__screen__title__inner">
              <CSSTransition
                timeout={300}
                in={currentTransitionState === 1}
                classNames="home__screen__title_first"
                nodeRef={nodeRef[1]}
              >
                <span
                  className="home__screen__title__word home__screen__title_first"
                  ref={nodeRef[1]}
                >
                  Institutional Banking
                </span>
              </CSSTransition>
            </span>
            <span className="home__screen__title__inner">
              <CSSTransition
                timeout={300}
                in={currentTransitionState === 2}
                classNames="home__screen__title_first"
                nodeRef={nodeRef[2]}
              >
                <span
                  className="home__screen__title__word home__screen__title_first"
                  ref={nodeRef[2]}
                >
                  Institutional Banking
                </span>
              </CSSTransition>
            </span>
            <span className="home__screen__title__inner">
              <CSSTransition
                timeout={300}
                in={currentTransitionState === 3}
                classNames="home__screen__title_first"
                nodeRef={nodeRef[3]}
              >
                <span
                  className="home__screen__title__word home__screen__title_first"
                  ref={nodeRef[3]}
                >
                  Institutional Banking
                </span>
              </CSSTransition>
            </span>
          </h1>
          <div className="home__screen__description">
            <CSSTransition
              timeout={300}
              in={currentTransitionState === 1}
              classNames="home__screen__description_div"
              nodeRef={nodeRef[4]}
            >
              <div className="home__screen__description_div" ref={nodeRef[4]}>
                {currentState}asdfasdfasdfasdfasd fasdf asdf asdf asdfdgasdg
              </div>
            </CSSTransition>
            <CSSTransition
              timeout={300}
              in={currentTransitionState === 2}
              classNames="home__screen__description_div"
              nodeRef={nodeRef[5]}
            >
              <div className="home__screen__description_div" ref={nodeRef[5]}>
                {currentState}asdfasdfasdfasdfasd fasdf asdf asdf asdf asdf asdf
                asdfdgasdg
              </div>
            </CSSTransition>
            <CSSTransition
              timeout={300}
              in={currentTransitionState === 3}
              classNames="home__screen__description_div"
              nodeRef={nodeRef[6]}
            >
              <div className="home__screen__description_div" ref={nodeRef[6]}>
                {currentState}asdfasdfasdfasdfasd fasdf asdf asdf asdfdgasdg
              </div>
            </CSSTransition>
          </div>
          <div className="home__screen__more__div   ">
            <CSSTransition
              timeout={300}
              in={currentTransitionState === 1}
              classNames="home__screen__more"
              nodeRef={nodeRef[7]}
            >
              <a
                className="home__screen__more underlined-cta"
                href="/service/institutional-banking"
              >
                Learn More
              </a>
            </CSSTransition>
            <CSSTransition
              timeout={300}
              in={currentTransitionState === 2}
              classNames="home__screen__more"
              nodeRef={nodeRef[8]}
            >
              <a
                className="home__screen__more underlined-cta"
                href="/service/institutional-banking"
              >
                Learn More
              </a>
            </CSSTransition>
            <CSSTransition
              timeout={300}
              in={currentTransitionState === 3}
              classNames="home__screen__more"
              nodeRef={nodeRef[9]}
            >
              <a
                className="home__screen__more underlined-cta"
                href="/service/institutional-banking"
              >
                Learn More
              </a>
            </CSSTransition>
          </div>
        </div>

        <div className="vert-text home__screen__vert-text">
          <CSSTransition
            timeout={300}
            in={!onPlay.current}
            classNames="vert-text-first"
            nodeRef={nodeRef[10]}
          >
            <div className="vert-text__inner vert-text-first" ref={nodeRef[10]}>
              <span className="vert-text__word">
                E<span className="vert-text__x">x</span>pertise
              </span>
              <span className="vert-text__word">
                E<span className="vert-text__x">x</span>perience
              </span>
              <span className="vert-text__word">
                Fle<span className="vert-text__x">x</span>ibility
              </span>
              <span className="vert-text__word">
                E<span className="vert-text__x">x</span>pertise
              </span>
              <span className="vert-text__word">
                E<span className="vert-text__x">x</span>perience
              </span>
              <span className="vert-text__word">
                Fle<span className="vert-text__x">x</span>ibility
              </span>
              <span className="vert-text__word">
                E<span className="vert-text__x">x</span>pertise
              </span>
              <span className="vert-text__word">
                E<span className="vert-text__x">x</span>perience
              </span>
              <span className="vert-text__word">
                Fle<span className="vert-text__x">x</span>ibility
              </span>
            </div>
          </CSSTransition>
        </div>
        <CSSTransition
          timeout={300}
          in={!onPlay.current}
          classNames="vert-text-first"
          nodeRef={nodeRef[15]}
        >
          <nav className="home__nav vert-text-first" ref={nodeRef[15]}>
            <div className="home__nav__buttons">
              <button
                className="circ-button circ-button--top home__nav__button home__nav__prev"
                onClick={handlePrev}
                aria-label="Previous"
              >
                <span className="home__nav__button__border">
                  <span className="home__nav__button__border__circ">
                    <span className="home__nav__button__border__circ__outer">
                      <span className="home__nav__button__border__circ__inner">
                        <span className="home__nav__button__border__circ__line"></span>
                      </span>
                    </span>
                  </span>
                  <span className="home__nav__button__border__line"></span>
                </span>
                <span className="home__nav__button__border">
                  <span className="home__nav__button__border__circ">
                    <span className="home__nav__button__border__circ__outer">
                      <span className="home__nav__button__border__circ__inner">
                        <span className="home__nav__button__border__circ__line"></span>
                      </span>
                    </span>
                  </span>
                  <span className="home__nav__button__border__line"></span>
                </span>

                <span className="circ-button__border"></span>

                <span className="circ-button__picto">
                  <span className="circ-button__picto__line"></span>
                  <span className="circ-button__picto__line"></span>
                </span>
              </button>

              <button
                className="circ-button circ-button--bottom home__nav__button home__nav__next"
                aria-label="Previous"
                onClick={handleNext}
              >
                <span className="home__nav__button__border">
                  <span className="home__nav__button__border__circ">
                    <span className="home__nav__button__border__circ__outer">
                      <span className="home__nav__button__border__circ__inner">
                        <span className="home__nav__button__border__circ__line"></span>
                      </span>
                    </span>
                  </span>
                  <span className="home__nav__button__border__line"></span>
                </span>
                <span className="home__nav__button__border">
                  <span className="home__nav__button__border__circ">
                    <span className="home__nav__button__border__circ__outer">
                      <span className="home__nav__button__border__circ__inner">
                        <span className="home__nav__button__border__circ__line"></span>
                      </span>
                    </span>
                  </span>
                  <span className="home__nav__button__border__line"></span>
                </span>

                <span className="circ-button__border"></span>

                <span className="circ-button__picto">
                  <span className="circ-button__picto__line"></span>
                  <span className="circ-button__picto__line"></span>
                </span>
              </button>
            </div>

            <ul className="home__nav__screens">
              <li
                className={clsx("home__nav__screen", {
                  "is-current": currentState % 10 === 1,
                })}
                onClick={() => {
                  handleState(1);
                }}
              >
                <button className="home__nav__screen__button">
                  <span className="home__nav__screen__button__label">
                    <span className="home__nav__screen__button__label__inner">
                      Institutional
                    </span>
                  </span>
                </button>
              </li>
              <li
                className={clsx("home__nav__screen", {
                  "is-current": currentState % 10 === 2,
                })}
                onClick={() => {
                  handleState(2);
                }}
              >
                <button className="home__nav__screen__button">
                  <span className="home__nav__screen__button__label">
                    <span className="home__nav__screen__button__label__inner">
                      Commercial
                    </span>
                  </span>
                </button>
              </li>
              <li
                className={clsx("home__nav__screen", {
                  "is-current": currentState % 10 === 3,
                })}
                onClick={() => {
                  handleState(3);
                }}
              >
                <button className="home__nav__screen__button">
                  <span className="home__nav__screen__button__label">
                    <span className="home__nav__screen__button__label__inner">
                      Mortgage
                    </span>
                  </span>
                </button>
              </li>
            </ul>
          </nav>
        </CSSTransition>
        <CSSTransition
          timeout={300}
          in={!onPlay.current}
          classNames="vert-text-first"
          nodeRef={nodeRef[14]}
        >
          <a
            className="home__login vert-text-first"
            ref={nodeRef[14]}
            href="https://www.nexbank.com"
          >
            <span className="home__login__line"></span>
            <span className="home__login__label">contact me</span>
          </a>
        </CSSTransition>
      </section>
    </div>
  );
};
export default Home;
