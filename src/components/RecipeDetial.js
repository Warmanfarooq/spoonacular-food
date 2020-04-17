import React, { Component } from "react";
import { recipeI } from "../tempDetails";
export default class RecipeDetial extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, imgurl } = this.props;
    // const title = this.title;
    // const imgurl = this.imgurl;
    const { handleIndex } = this.props;
    console.log(title, imgurl);
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button
                type="button"
                className="btn btn-warning mb-5 text-capitalize"
                onClick={() => handleIndex(1)}
              >
                back to recipe
              </button>

              <img src={imgurl} className="d-block w-100" />
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <ul className="list-group.mt-4">
                {recipeI.ingredients.map((item, index) => {
                  return (
                    <li key={index} className="list-group-item text-slanted">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
