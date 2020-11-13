import React, { Component } from "react";

class Discover extends Component {

  render() {
    return (
      <div>
        <h1 className="text-center">PORTFOLIO</h1>
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <img className="portImg" src="https://i.imgur.com/CG1pftR.jpg" />
                <div className="row">
                  <a className="col-md-6" href="https://shrouded-stream-06971.herokuapp.com/" > <button>BURGER BUILDER</button> </a>
                  <a className="col-md-6" href="https://github.com/leanndemetro/ultimateBurger" > <button>REPOSITORY</button> </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <img className="portImg" src="https://i.imgur.com/luGf2J8.jpg" />
                <div className="row">
                  <a className="col-md-6" href="https://github.com/AnthonnyMitch/Growth" > <button>GROWTH</button> </a>
                  <a className="col-md-6" href="https://github.com/AnthonnyMitch/Growth" > <button>REPOSITORY</button> </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <img className="portImg" src="https://i.imgur.com/UUGc1aB.jpg" />
                <div className="row">
                  <a className="col-md-6" href="https://leanndemetro.github.io/Homework-10-OOP/" > <button>TEAM BUILDER</button> </a>
                  <a className="col-md-6" href="https://github.com/leanndemetro/Homework-10-OOP" > <button>REPOSITORY</button> </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-sm-12">
            <p>hi</p>
          </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <img className="portImg" src="https://i.imgur.com/kGPhjDR.jpg" />
                  <div className="row">
                    <a className="col-md-6" href="https://leanndemetro.github.io/workDayScheduler/" > <button>WORK SCHEDULER</button> </a>
                    <a className="col-md-6" href="https://github.com/leanndemetro/workDayScheduler" > <button>REPOSITORY</button> </a>
                  </div>
                </div>
              </div>
            </div>
              <div className="col-sm-4">
                <div className="card">
                  <div className="card-body">
                    <img className="portImg" src="https://i.imgur.com/J1LSvJY.png" />
                    <div className="row">
                      <a className="col-md-6" href="https://brandongreenoab.github.io/Peckish/" > <button>PECKISH</button> </a>
                      <a className="col-md-6" href="https://github.com/BrandonGreenOAB/Peckish" > <button>REPOSITORY</button> </a>
                    </div>
                  </div>
                </div>
              </div>
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <img className="portImg" src="https://i.imgur.com/y6v8Ye3.jpg" />
                      <div className="row">
                        <a className="col-md-6" href="https://leanndemetro.github.io/codeRefactor/" > <button>HORISEON</button> </a>
                        <a className="col-md-6" href="https://github.com/leanndemetro/codeRefactor" > <button>REPOSITORY</button> </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default Discover;
