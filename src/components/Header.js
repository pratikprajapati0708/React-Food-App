import React from 'react'

const Header = (props) => {
    return <div className ="jumbtron">
            <h1 className= "display-1">
                <i class="material-icons brand-icon">fastfood</i> Food Recipe
                </h1>
                
<div class="input-group mb-3 w-50 mx-auto">
  <input type="text" class="form-control"
   placeholder="Search your Recipe...." 
   value={props.search}
   onChange={props.onInputChange}
   
   />
  <button className="btn btn-dark">Search Recipe</button>
</div>
        </div>  
}
export default Header;