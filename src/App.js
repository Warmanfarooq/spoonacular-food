import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { recipes } from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetial from "./components/RecipeDetial";

export default class App extends Component {
  state = {
    imgurl: "https://spoonacular.com/recipeImages/579247-556x370.jpg",
    thumburl: "https://spoonacular.com/cdn/equipment_250x250/slow-cooker.jpg",
    recipes: recipes,
    // recipes: [],
    pageIndex: 1,
    title: "",
    imgurl: "",
    url:
      "https://api.spoonacular.com/recipes/search?apiKey=702535526a8141f7a80648038682aa82&number=10&query=apple",
    surl:
      "https://api.spoonacular.com/recipes/search?apiKey=702535526a8141f7a80648038682aa82&number=10&query=",
    // url:"https://api.spoonacular.com/recipes/search?apiKey=702535526a8141f7a80648038682aa82&query=fish",
    search: "",
    error: "",
  };

  async getRecipe() {
    console.log("called");
    try {
      const data = await fetch(this.state.url);

      const jsonData = await data.json();

      if (jsonData.results.length === 0) {
        this.setState(() => {
          return { error: "Sorry Nothing find" };
        });
      } else {
        this.setState({
          recipes: jsonData.results,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  // componentDidMount() {
  //   this.getRecipe();
  // }
  // getData() {
  //   return fetch(this.state.url)
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState({ recipes: responseJson });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  displayPage = (index) => {
    switch (index) {
      case 1:
        return (
          <RecipeList
            recipes={this.state.recipes}
            handleDetail={this.handleDetail}
            value={this.state.search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            error={this.state.error}
          />
        );
        break;
      case 0:
        return (
          <RecipeDetial
            handleIndex={this.handleIndex}
            title={this.state.title}
            imgurl={this.state.imgurl}
          />
        );
        break;
    }
  };

  handleIndex = (index) => {
    this.setState({
      pageIndex: index,
    });
  };

  handleDetail = (index, title, imgurl1) => {
    console.log(title, imgurl1);
    this.setState({
      pageIndex: index,
      title: title,
      imgurl: imgurl1,
    });
  };

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("called form submit");
    this.setState({
      error: "",
    });
    this.setState(
      () => {
        return {
          url: `${this.state.surl}${this.state.search}`,
        };
      },
      () => {
        this.getRecipe();
      }
    );
  };
  render() {
    // console.log(this.state.recipes);
    return (
      <React.Fragment>{this.displayPage(this.state.pageIndex)}</React.Fragment>
    );
  }
}
