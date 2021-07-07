import React from 'react'

const Recipes = (props) => {
    return (
        <div class="row">
            {
                recipes.map(recipe => (
                    <div class="col-md-3">
                        <div class="card py-2 text-center">
                            <img 
                            src={recipe.recipe.image}
                            className="img-fluid w-50 mx-auto rounded-circle"
                            />
                            <div class="card-body">
                                <h5>{recipe.recipe.label}</h5>
                            </div>
                        </div>
                        </div>
                ))}
        </div>
    )
}

export default Recipes
