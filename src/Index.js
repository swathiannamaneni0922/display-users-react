import React from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

import "./styles.css";

class AppUser extends React.Component {
  state = {
    data: null,
    filter: "",
    isOpen: false,
    activeFirstName: "",
    activeLastName: "",
    activePicture: null,
    activeAge: "",
    activeStreetName: "",
    activeStreetNum: "",
    activeAddressState: "",
    activeAddressCountry: "",
    activeEmail: "",
    activePhone: null,
    };
  toggleModal = (user) => {
    this.setState({
      isOpen: !this.state.isOpen,
      activeFirstName: user.name.first,
      activeLastName: user.name.last,
      activePicture: user.picture.medium,
      activeAge: user.dob.age,
      activeStreetNum: user.location.street.number,
      activeStreetName: user.location.street.name,
      activeAddressState: user.location.state,
      activeAddressCountry: user.location.country,
      activePhone: user.phone,
      activeEmail: user.email,
    });
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=9")
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.results
        });
      });
  }
  render() {
    return (
     <div>
       <div>
       <div className="Title"> FieldRoutes </div>
       <button className="contactus"> Contact US</button>
       </div>
       <div>
       <h2 className="Title"> This is body content </h2>
       <div>
       <p> lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum</p>
       </div>
       </div>
      <div className="App">
 
        {this.state.data &&
          this.state.data
            .filter(user => user.email.includes(this.state.filter))
            .map(user => (
              <div
                key={user.email}
                className="user"
              >
                <div className="box">
                <img src={user.picture.medium} />
                <div>
                <span className="name">{user.name.first} {user.name.last} | {user.location.state}, {user.location.country}</span>
                </div>
                <div className="learnmore" onClick={() => this.toggleModal(user)}>
                  learn more
                </div>
                </div>
                <Modal show={this.state.isOpen} 
          onClose={() => this.toggleModal(user)}>
          <img src={this.state.activePicture} />
                <div>
                <span className="name">{this.state.activeFirstName} {this.state.activeLastName}</span>
                <div className="name">{this.state.activeAge} </div>
                <div className="name">{this.state.activeStreetNum} {this.state.activeStreetName}</div>
                <div className="name">{this.state.activeAddressState} {this.state.activeAddressCountry}</div>
                <div className="name">{this.state.activePhone} </div>
                <div className="name">{this.state.activeEmail}</div>


                </div>
        </Modal>
              </div>
              
            ))}
            
      </div>
      <div class="col">
          <div class="input-form">
               <div >
                                           
                                            <input type="text" placeholder="First Name" />
                                            <input type="text"  placeholder="Last Name" />
                                        </div>

                                        <div >
                                        <input type="email" placeholder="Company Name" />
                                            <input type="email"  placeholder="Email" />
                                        </div>

                                            <div class="form-group">
                                                <input type="email" placeholder="Phone" />
                                                    <select  placeholder="Choose one">
                                                        <option>Industry</option>
                                                
                                                    </select>
                                            </div>
                                            <div>
                                                    <select  placeholder="Choose one">
                                                        <option>Position applying for</option>
                                                
                                                    </select>
                                            </div>

                                        <div >
                                            <label for="check1">Are you located in United States</label>
                                            <input id="check1" type="checkbox"></input>
                                            <input id="check1"  type="checkbox"></input>
                                        </div>

                                        <div class="space"></div>

                                        <div >
                                            <button class="btn-info">Send</button>
                                        </div>

                                    </div>
                                </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <AppUser />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

