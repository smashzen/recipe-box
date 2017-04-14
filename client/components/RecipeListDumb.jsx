import React from 'react'
import RecipeTitle from './RecipeTitle'

const RecipeListDumb = ({ recipeTitles, changeActiveRecipe }) => (
  <ul>
    {recipeTitles.map(item =>
      <RecipeTitle
        key={item.id}
        title={item.title}
        changeActiveRecipe={() => changeActiveRecipe(item.id)}
      />
    )}
  </ul>
)

RecipeListDumb.propTypes = {
  recipeTitles: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      id: React.PropTypes.string.isRequired
    })
  ),
  changeActiveRecipe: React.PropTypes.func.isRequired
}

export default RecipeListDumb
