import React, { Component } from "react";
import { Link } from "react-router-dom";
class SliderArea extends Component {
  render() {
    return (
      <>
        <section className="hero-slider">
          {/* Single Slider */}
          <div className="single-slider">
            <div className="container">
              <div className="row no-gutters">
                <div className="col-lg-9 offset-lg-3 col-12">
                  <div className="text-inner">
                    <div className="row">
                      <div className="col-lg-7 col-12">
                        <div className="hero-text">
                          <h1>
                            <span>UP TO 50% OFF </span>Shirt For Man
                          </h1>
                          <p>
                            Maboriosam in a nesciung eget magnae <br /> dapibus
                            disting tloctio in the find it pereri <br /> odiy
                            maboriosm.
                          </p>
                          <div className="button">
                            <Link to="/bag" className="btn">
                              Shop Now!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ End Single Slider */}
        </section>
      </>
    );
  }
}

export default SliderArea;
