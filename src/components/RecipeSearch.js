import React, { Component } from "react";

export default class RecipeSearch extends Component {
  render() {
    const { value, handleChange, handleSubmit } = this.props;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="mx-auto col-md-6 mt-3 text-center">
              <h1 className="text-slanted text-capitalize">
                Search Recipe with {""}
                <strong className="text-danger">spoonacular</strong>
              </h1>
              <form className="mt-4" onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="text"
                    name="search"
                    placeholder="Apple,Carrote"
                    className="form-control"
                    value={value}
                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="input-group-text bg-primary text-white"
                    >
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
