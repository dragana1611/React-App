import React from "react";
import ReactDom from "react-dom";
import HemisphereDisplay from "./HemisphereDisplay";

class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { latitude: null, errorMessage: "" };
//   }

  state = { latitude: null, errorMessage: "" }; // shorter way of lines 5-8
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

    
  // componentDidUpdate(){
  //     console.log('componentDidUpdate');
  // }

  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>{this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return <div><HemisphereDisplay latitude = {this.state.latitude}/></div>;
    } else {
      return <div>Loading...</div>;
    }
  }
}

// const App = ()=>{
//     window.navigator.geolocation.getCurrentPosition(
//       (position) => console.log(position),
//       (error) => console.log(error)
//     )
//     return(
//         <div>
//             latitude:
//         </div>
//     )
// }


ReactDom.render(<App />, document.querySelector("#root"));
