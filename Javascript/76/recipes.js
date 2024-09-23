/* global $*/
(function () {
    window.onload = (async function () {
        try {
            const r = await fetch('recipes.json');
            if (!r.ok) {
                throw new Error(`${r.status} - ${r.statusText}`);
            }
            const loadedRecipes = await r.json();
            loadedRecipes.forEach(recipe => {
                const option = document.createElement('option');
                option.value = recipe.value;
                option.id = recipe.value;
                option.innerText = recipe.name;
                document.querySelector('#recipeDropdown').appendChild(option);
            });
        } catch (e) {
            console.error(e);
        }

    });
    $('#submitButton').click(async function (event) {
        event.preventDefault();
        try {
            const selectedRecipe = document.querySelector('#recipeDropdown').value;
            const r = await fetch(`${selectedRecipe}.json`);
            if (!r.ok) {
                throw new Error(`${r.status} - ${r.statusText}`);
            }
            const recipePage = await r.json();
            displayRecipe(recipePage);
        }
        catch (e) {
            console.error(e);
        }


    });
    function displayRecipe(recipe) {
        const recipeDisplay = document.querySelector('#recipeDisplay');
        let recipeHtml = '';
        recipe.ingredients.forEach(ingredient => 
            recipeHtml += `<p> ${ingredient} </p>`            
        );

        recipeDisplay.innerHTML = `<h2>${recipe.name}</h2>
                                    <h3>Ingredients:
                                    ${recipeHtml}</h3>                                   
                                    <img src="${recipe.image}" alt="${recipe.name}" style="max-width: 300px; height: auto;">`;
    }
}());