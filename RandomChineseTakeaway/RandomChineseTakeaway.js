function RandomNumber(number) {
    // generates a random number from 0 -> num - 1
    return Math.floor(Math.random() * number)
  }
  
  const dishes = {
    starter1: ['BBQ ribs', 'Spring Rolls', 'Prawn Toast', 'Wontons', 'Salt and Pepper Wings'],
    starter2: ['Crispy Aromatic Duck Pancakes', 'Chicken and Sweetcorn Soup', 'Pork Soup Dumplings', 'Chicken Gyoza', 'Vegetable Bao Buns'],
    mainDish: ['Duck in Plum Sauce', 'Beef in Black Bean Sauce', 'Crispy Shredded Beef', 'Sweet and Sour Chicken', 'Pork in Oyster Sauce', 'Special Chicken Curry'],
    sideDish: ['Egg-fried Rice', 'Special Fried Rice', 'Mushroom Rice', 'Chips', 'Salt and Pepper Chips', 'Prawn Crackers'],
  }
  
  // Store the data in a blank array
  let combinedMeal = []
  
  // Iterate over the object
  for(let choice in dishes) {
    let selection = RandomNumber(dishes[choice].length)
  
    switch(choice) {
      case 'starter1':
        combinedMeal.push(`You should have ${dishes[choice][selection]} as your first starter.`)
        break
      case 'starter2':
        combinedMeal.push(`You should have ${dishes[choice][selection]} as your second starter.`)
        break
      case 'mainDish':
        combinedMeal.push(`You should have ${dishes[choice][selection]} as your main course.`)
        break
      case 'sideDish':
        combinedMeal.push(`You should have ${dishes[choice][selection]} as your side dish.`)
        break
      default:
        combinedMeal.push('There is not enough info.')
    }
  }
  
  function formatOrder(result) {
    const formatted = combinedMeal.join('\n')
    console.log(formatted)
  }
  
  formatOrder(combinedMeal);