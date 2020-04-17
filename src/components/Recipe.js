import React, { Component } from "react";

export default class Recipe extends Component {
  render() {
    const { id, title, readyInMinutes, servings, image } = this.props.recipe;
    const { handleDetail } = this.props;

    const imgurl = "https://spoonacular.com/recipeImages/" + image;

    return (
      <React.Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img
              src={imgurl}
              style={{ height: "14rem" }}
              alt="recipe"
              className="img-card-top"
            />
            <div className="card-body text-capitalize">
              <h6>{title}</h6>
              <h6 className="text-warning text-slanted">
                Ready In Minutes:{readyInMinutes} and Serve:{servings} A Dish
              </h6>
            </div>
            <div className="card-footer">
              <button
                type="button"
                className="btn mx-2 btn-primary"
                onClick={() => handleDetail(0, title, imgurl)}
              >
                Detial
              </button>
              <a href="#" className="btn btn-success" target="-blank">
                Recipe Url
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
