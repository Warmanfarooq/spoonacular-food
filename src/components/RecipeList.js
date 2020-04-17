import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";
import { recipe } from "../tempDetails";
export default class RecipeList extends Component {
  render() {
    const {
      error,
      recipes,
      value,
      handleDetail,
      handleChange,
      handleSubmit,
    } = this.props;

    return (
      <React.Fragment>
        <RecipeSearch
          value={value}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {/* title */}
        <div className="container my-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-upper-case mb-3">
              <h1 className="text-slanted">Recipe List</h1>
            </div>
          </div>
          {/* end title */}
          <div className="row">
            {error ? (
              <h1 className="text text-danger">{error}</h1>
            ) : (
              recipes.map((recipe) => {
                return (
                  <Recipe
                    key={recipe.id}
                    recipe={recipe}
                    handleDetail={handleDetail}
                  />
                );
              })
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
