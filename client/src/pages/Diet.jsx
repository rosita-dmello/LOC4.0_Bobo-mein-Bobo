import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { generateMeal } from '../data/api';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Button } from '@mui/material';
import MediaCard from '../components/MediaCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const sampleMealData = {
    "week": {
        "monday": {
            "meals": [
                {
                    "id": 634006,
                    "imageType": "jpg",
                    "title": "Banana Bread",
                    "readyInMinutes": 45,
                    "servings": 6,
                    "sourceUrl": "https://spoonacular.com/banana-bread-634006"
                },
                {
                    "id": 354611,
                    "imageType": "jpeg",
                    "title": "Grilled BBQ Pizza",
                    "readyInMinutes": 28,
                    "servings": 4,
                    "sourceUrl": "http://www.foodnetwork.com/recipes/patrick-and-gina-neely/grilled-bbq-pizza-recipe.html"
                },
                {
                    "id": 60515,
                    "imageType": "jpg",
                    "title": "Cook the Book: Torta de las Tres Leches",
                    "readyInMinutes": 45,
                    "servings": 8,
                    "sourceUrl": "http://www.seriouseats.com/recipes/2010/03/torta-de-las-tres-leches-cake-recipe.html"
                }
            ],
            "nutrients": {
                "calories": 1999.79,
                "protein": 54.84,
                "fat": 102.95,
                "carbohydrates": 218.52
            }
        },
        "tuesday": {
            "meals": [
                {
                    "id": 300213,
                    "imageType": "jpg",
                    "title": "Chocolate-Butterscotch Chewy Crispy Bars",
                    "readyInMinutes": 45,
                    "servings": 20,
                    "sourceUrl": "http://www.myrecipes.com/recipe/chocolate-butterscotch-chewy-bars-50400000130463/"
                },
                {
                    "id": 293691,
                    "imageType": "jpeg",
                    "title": "Texas Hold-Ums Mini Chipotle Beef Burgers with Warm Fire Roasted Garlic Ketchup",
                    "readyInMinutes": 16,
                    "servings": 6,
                    "sourceUrl": "http://www.foodnetwork.com/recipes/rachael-ray/texas-hold-ums-mini-chipotle-beef-burgers-with-warm-fire-roasted-garlic-ketchup-recipe.html"
                },
                {
                    "id": 680408,
                    "imageType": "jpg",
                    "title": "Pulled pork grilled cheese sandwich",
                    "readyInMinutes": 15,
                    "servings": 2,
                    "sourceUrl": "http://simply-delicious-food.com/2015/10/01/pulled-pork-grilled-cheese-sandwich/"
                }
            ],
            "nutrients": {
                "calories": 2000.01,
                "protein": 108.95,
                "fat": 95.2,
                "carbohydrates": 175.78
            }
        },
        "wednesday": {
            "meals": [
                {
                    "id": 376439,
                    "imageType": "jpg",
                    "title": "Southern Pralines",
                    "readyInMinutes": 35,
                    "servings": 42,
                    "sourceUrl": "http://www.tasteofhome.com/Recipes/southern-pralines"
                },
                {
                    "id": 668492,
                    "imageType": "jpg",
                    "title": "Creamy zucchini and ham pasta",
                    "readyInMinutes": 25,
                    "servings": 4,
                    "sourceUrl": "https://spoonacular.com/creamy-zucchini-and-ham-pasta-668492"
                },
                {
                    "id": 378040,
                    "imageType": "jpg",
                    "title": "Bacon 'n' Egg Bagels",
                    "readyInMinutes": 20,
                    "servings": 4,
                    "sourceUrl": "http://www.tasteofhome.com/Recipes/bacon--n--egg-bagels"
                }
            ],
            "nutrients": {
                "calories": 2000.52,
                "protein": 62.56,
                "fat": 122.6,
                "carbohydrates": 160.23
            }
        },
        "thursday": {
            "meals": [
                {
                    "id": 1697561,
                    "imageType": "jpg",
                    "title": "Berries and Cream Chocolate Pie",
                    "readyInMinutes": 45,
                    "servings": 8,
                    "sourceUrl": "https://spoonacular.com/berries-and-cream-chocolate-pie-1697561"
                },
                {
                    "id": 19557,
                    "imageType": "jpg",
                    "title": "Gnocchi with Sausage and Spinach",
                    "readyInMinutes": 15,
                    "servings": 4,
                    "sourceUrl": "http://www.myrecipes.com/recipe/gnocchi-with-sausage-spinach-10000001586871/"
                },
                {
                    "id": 660133,
                    "imageType": "jpg",
                    "title": "Simple Roast Chicken",
                    "readyInMinutes": 45,
                    "servings": 4,
                    "sourceUrl": "https://spoonacular.com/simple-roast-chicken-660133"
                }
            ],
            "nutrients": {
                "calories": 1999.96,
                "protein": 69.76,
                "fat": 129.88,
                "carbohydrates": 141.85
            }
        },
        "friday": {
            "meals": [
                {
                    "id": 204826,
                    "imageType": "jpg",
                    "title": "Easter Egg Cake",
                    "readyInMinutes": 120,
                    "servings": 12,
                    "sourceUrl": "http://www.seriouseats.com/recipes/2013/03/easter-egg-cake-recipe.html"
                },
                {
                    "id": 568014,
                    "imageType": "jpg",
                    "title": "Italian Nachos",
                    "readyInMinutes": 15,
                    "servings": 3,
                    "sourceUrl": "https://azestybite.com/italian-nachos/"
                },
                {
                    "id": 403510,
                    "imageType": "jpg",
                    "title": "Three-Cheese Sausage Lasagna",
                    "readyInMinutes": 60,
                    "servings": 12,
                    "sourceUrl": "http://www.tasteofhome.com/recipes/three-cheese-sausage-lasagna"
                }
            ],
            "nutrients": {
                "calories": 2001.93,
                "protein": 64.76,
                "fat": 148.16,
                "carbohydrates": 103.8
            }
        },
        "saturday": {
            "meals": [
                {
                    "id": 1096058,
                    "imageType": "jpg",
                    "title": "Sausage and Egg Breakfast Burrito",
                    "readyInMinutes": 20,
                    "servings": 1,
                    "sourceUrl": "https://spoonacular.com/sausage-and-egg-breakfast-burrito-1096058"
                },
                {
                    "id": 1525133,
                    "imageType": "jpg",
                    "title": "Tuscan Bean Soup",
                    "readyInMinutes": 10,
                    "servings": 6,
                    "sourceUrl": "https://www.jocooks.com/recipes/tuscan-bean-soup/"
                },
                {
                    "id": 628681,
                    "imageType": "jpg",
                    "title": "Gluten Free Banana Cheesecake (With Almond Meal Crust)",
                    "readyInMinutes": 45,
                    "servings": 6,
                    "sourceUrl": "http://www.fussfreecooking.com/recipe-categories/sugary-treats/gluten-free-banana-cheesecake-almond-meal-crust/"
                }
            ],
            "nutrients": {
                "calories": 1999.37,
                "protein": 68.85,
                "fat": 148.94,
                "carbohydrates": 115.05
            }
        },
        "sunday": {
            "meals": [
                {
                    "id": 633970,
                    "imageType": "jpg",
                    "title": "Banana & Oreo Muffin",
                    "readyInMinutes": 45,
                    "servings": 4,
                    "sourceUrl": "https://spoonacular.com/banana-oreo-muffin-633970"
                },
                {
                    "id": 1591655,
                    "imageType": "jpg",
                    "title": "Everything Bagel Breakfast Burger",
                    "readyInMinutes": 15,
                    "servings": 1,
                    "sourceUrl": "https://www.healingtomato.com/everything-bagel-breakfast-burger/"
                },
                {
                    "id": 1669933,
                    "imageType": "jpg",
                    "title": "French Onion Soup with Roasted Poblano",
                    "readyInMinutes": 120,
                    "servings": 6,
                    "sourceUrl": "https://fortheloveofcooking.net/article/french-onion-soup-with-roasted-poblano"
                }
            ],
            "nutrients": {
                "calories": 2000.13,
                "protein": 97.98,
                "fat": 88.67,
                "carbohydrates": 194.37
            }
        }
    }
}



function FormRow({meals, day}) {

  return (
    <React.Fragment>
       
       {meals.map((meal) => (
            <Grid item xs={4} key={meal.id}>
            <MediaCard sourceUrl={meal.sourceUrl} readyInMinutes={meal.readyInMinutes} title={meal.title} day={day} />
            </Grid>
           ))

        }
      
      
    
    </React.Fragment>
    

  );
}

export default function Diet() {

    const [show, setShow] = React.useState(false);
    const [mealData, setMealData] = React.useState(sampleMealData);
    const getMealData = async () => {
        const response = await generateMeal(2000);
        setMealData(response)
    
    }
   
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
        {show ? <Grid container spacing={1}>

        
         <Grid container item spacing={3}>
        
            <FormRow meals={mealData.week.monday.meals} day="Monday"/>
          </Grid>
          <Grid container item spacing={3}>
            <FormRow meals={mealData.week.tuesday.meals} day="Tuesday"/>
          </Grid>
          <Grid container item spacing={3}>
            <FormRow meals={mealData.week.wednesday.meals} day="Wednesday"/>
          </Grid>
          <Grid container item spacing={3}>
            <FormRow meals={mealData.week.thursday.meals} day="Thursday"/>
          </Grid>
          <Grid container item spacing={3}>
            <FormRow meals={mealData.week.friday.meals} day="Friday"/>
          </Grid>
          <Grid container item spacing={3}>
            <FormRow meals={mealData.week.saturday.meals} day="Saturday"/>
          </Grid>
          <Grid container item spacing={3}>
            <FormRow meals={mealData.week.sunday.meals} day="Sunday"/>
          </Grid>
      </Grid> : 
      <Box sx={{padding: 5, minHeight: "60vh"}}>
       <Typography variant="h2">Based on your BMI, we can generate a weekly meal plan for you if you like.</Typography>
       <Button variant="contained" onClick={() => {
           getMealData();
           setShow(true);
       }}
       sx={{
           my: 3
       }}>
           Generate my custom meal</Button>
        
        </Box>
}
     
    </Box>
  );
}