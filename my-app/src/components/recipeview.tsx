import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function ViewRecipe() {
    const{ id } = useParams();
    const navigate = useNavigate();
    const [recipes, setRecipe] = useState([{
        _id: '',
        name: '',
        pic: '',
        instuctions: '',
        type: '',
    }]) 
    useEffect(() =>{
        fetch(`http://localhost:5002/recipes/${id}`)
        .then(res => {
            return res.json();
    })
    .then(recipe => {
        setRecipe(recipe)  
    })
}, [])


const deleteRecipe = (id: string | undefined) => {
    axios.delete(`http://localhost:5002/recipes/${id}`)
}    
    return (
        <div className="Recipe-view-page">
            <div className='recipe-view-details'>
            <h1 className='recipe-view-name'>{recipes.name}</h1>
            <img className='recipe-view-img' src={recipes.pic}></img>
            <p className='recipe-view-instructions'>{recipes.instructions}</p>
            </div>
            <Link key={recipes._id} to={{pathname:`/recipes/${recipes._id}/edit`}}><Button variant="outline-warning" className='recipe-view-button'>Edit Recipe</Button></Link>
            <a href='/recipes'><Button variant="outline-warning" className='recipe-view-button' onClick={() => {deleteRecipe(id)}}>Delete Recipe</Button></a>
            <Button className='recipe-view-button' variant="outline-warning" onClick={() => navigate(-1)}>Go Back</Button>
        </div>
    )
}
    
export default ViewRecipe;
