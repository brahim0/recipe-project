import React, { Component } from 'react'

export default class Recipe extends Component {
  render() {
      const {

        recipe_id,
        image_url,
        title,
        publisher,
        source_url
      }=this.props;
     
    return (
      <div>
        {title}
      </div>
    )
  }
}
