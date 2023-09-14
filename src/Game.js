import React, { Component } from "react";
import "./Game.css";
import { ReactSketchCanvas } from "react-sketch-canvas";
import Timer from "./Timer";
import npButton from "./newpromptbutton";
import word from "./words.json";
import Replicate from "replicate";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const wordlist = word.nouns;
const API_TOKEN = "r8_9H07IVuFSj4YKuBlBjChs0h4QgxIHJh29fVJV";
console.log(API_TOKEN);
class Game extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.state = {
      loading: true,
      word: "",
      imgsrc: "",
      caption: "",
      subButton: require("./submitbutton.png"),
    };
    this.handleMouseClick = this.handleMouseClick.bind(this);
  }

  componentDidMount() {
    let W = null;
    let index = Math.floor(Math.random() * (159 - 0 + 1)) + 0;

    wordlist.map((data, i) => {
      return i === index ? (W = data) : <p></p>;
    });

    this.setState({
      word: W,
      loading: false,
    });
  }

  handleMouseClick() {
    this.setState({
      subButton: require("./loading.png"), //just need to add the new button
    });
  }

  handleWord() {
    return this.state.word;
  }

  runBlipAPI = async (imageDataURL) => {
    const replicate = new Replicate({
      auth: API_TOKEN,
    });

    let W = this.handleWord();
    this.canvas.current.exportImage("jpeg");
    try {
      const output = await replicate.run(
        "salesforce/blip:2e1dddc8621f72155f24cf2e0adbde548458d3cab9f00c0139eea840d0ac4746",
        {
          input: {
            image: imageDataURL,
          },
        }
      );

      const word = W.toLowerCase();
      console.log(output);
      const blip = output.data[0].toLowerCase();

      console.log(word);
      console.log(blip);

      localStorage.setItem("caption", blip);
      window.location.href = blip.indexOf(word) > -1 ? "/Success" : "/Share";
    } catch (error) {
      console.error("Error:", error);
    }
  };

  sendData = () => {
    this.props.parentCallback(this.state.caption);
  };

  render() {
    const myStyle = {
      height: "100vh",
      backgroundPosition: "relative",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };

    return (
      <div style={myStyle}>
        <div className="misc">
          <div className="Timer">
            <Timer />
          </div>

          <div>
            {this.state.loading ? (
              <div className="word font-link"> loading...</div>
            ) : (
              <div>
                <div className="font-link word">{this.state.word}</div>
              </div>
            )}
          </div>

          <div>
            <a href="./Game">
              <button className="buttonprops">
                <img src={npButton} width={115} height={30} alt="New Prompt" />
              </button>
            </a>

            <button
              onClick={() => {
                // Define a variable to store the base64 data URL
                let imageDataURL = "";

                // Call exportImage and store the result when it's available
                this.canvas.current
                  .exportImage("jpeg")
                  .then((imagedata) => {
                    // Store the base64 data URL
                    imageDataURL = imagedata;

                    // Now you can use imageDataURL to perform the API request or other actions
                    // Call your previously defined runBlipAPI function here
                    this.runBlipAPI(imageDataURL);
                  })
                  .catch((e) => {
                    console.log(e);
                  });
              }}
              className="buttonprops"
            >
              <img
                onMouseDown={this.handleMouseClick}
                src={this.state.subButton}
                width={100}
                height={30}
                alt="Submit!"
              />
            </button>
          </div>
        </div>

        <div className="Gamebox">
          <ReactSketchCanvas
            ref={this.canvas}
            width="100"
            strokeWidth={10}
            strokeColor="black"
            canvasColor="white"
            style={myStyle}
          />
        </div>
      </div>
    );
  }
}

export default Game;
