const cities = [
  {
    name: 'Cluj Napoca',
    population: 250000,
    location: {
        continent: 'Europe',
        country: 'Romania',
    },
    touristAttractions: [],
    isCapital: false,
},
{
    name: 'Tokyo',
    population: 1396000,
    location: {
        continent: 'Asia',
        country: 'Japan',
    },
    touristAttractions: ['Tokyo Sky Tree', 'Ueno Park'],
    isCapital: true,
},
{
    name: 'Busan',
    population: 3430000,
    location: {
        continent: 'Asia',
        country: 'South Korea',
    },
    touristAttractions: ['Beomeosa', 'Diamond Tower', 'BIFF Square'],
    isCapital: false,
},
{
    name: 'Paris',
    population: 2161000,
    location: {
        continent: 'Europe',
        country: 'France',
    },
    touristAttractions: ['Eiffel Tower', 'Arc de Triomphe', 'Louvre'],
    isCapital: true,
},
{
    name: 'Milan',
    population: 1352000,
    location: {
        continent: 'Europe',
        country: 'Italy',
    },
    touristAttractions: ['Duomo Cathedral', 'Castello Sforzesco'],
    isCapital: false,
},
{
    name: 'London',
    population: 8982000,
    location: {
        continent: 'Europe',
        country: 'United Kingdom',
    },
    touristAttractions: ['Hyde Park'],
    isCapital: true,
},
{
    name: 'Warsaw',
    population: 1744400,
    location: {
        continent: 'Europe',
        country: 'Poland',
    },
    touristAttractions: ['Palace of Culture and Science'],
    isCapital: true,
  },
  {
    name: 'Copenhagen',
    population: 1000000,
    location: {
        continent: 'Europe',
        country: 'Denmark',
    },
    touristAttractions: ['Tivoli Gardens', 'The Round Tower'],
    isCapital: false,
  },
  {
    name: 'Budapest',
    population: 1752000,
    location: {
        continent: 'Europe',
        country: 'Hungary',
    },
      touristAttractions: ['Heroes Square'],
      isCapital: true,
  },
  {
    name: 'Dubai',
    population: 3331000,
    location: {
        continent: 'Asia',
        country: 'United Arab Emirates',
    },
    touristAttractions: ['Burj Khalifa', 'Desert Safari', 'Legoland', 'Dolphinarium'],
    isCapital: false,
},
]

function renderCities() {
  const citiesList = document.querySelector('#cities-list')

  cities.forEach((city) => {
    const cityWrapper = document.createElement('div')
    cityWrapper.classList.add('city-wrapper')

    let capitalTitle = ''
    let capitalDescription = ''

    if (city.isCapital) {
      cityWrapper.classList.add('capital')
      capitalTitle = ' (capital)'
      capitalDescription = ` ${city.name} is the capital of ${city.location.country}.`
    }
  
    const cityTitle = document.createElement('h2')
    cityTitle.textContent = city.name + capitalTitle
  
    const cityDescription = document.createElement('p')
    cityDescription.textContent = `${city.name} city is located in ${city.location.continent}, ${city.location.country} and has population of ${city.population} people.${capitalDescription}`
  
    cityWrapper.append(cityTitle, cityDescription)

    if (city.touristAttractions.length > 0) {
      const touristAttractionsWrapper = document.createElement('div')
      touristAttractionsWrapper.classList.add('tourist-attractions-list')
  
      const touristAttractionsTitle = document.createElement('h3')
  
      if (city.touristAttractions.length > 1) {
        touristAttractionsTitle.textContent = `Tourist attractions of ${city.name} are:`
      } else {
        touristAttractionsTitle.textContent = `Tourist attraction of ${city.name} is:`
      }
  
      const touristAttractionsList = document.createElement('ul')
  
      city.touristAttractions.forEach(attraction => {
        const touristAttractionItem = document.createElement('li')
        touristAttractionItem.textContent = attraction
  
        touristAttractionsList.append(touristAttractionItem)
      })
  
      touristAttractionsWrapper.append(touristAttractionsTitle, touristAttractionsList)
  
      cityWrapper.append(touristAttractionsWrapper)
    }

    citiesList.append(cityWrapper)
  })
}

renderCities()

function styleCities() {
  const citiesCapitals = document.querySelectorAll('.capital h2')

  citiesCapitals.forEach((capitalTitle) => {
    capitalTitle.style.color = 'red'
  })

  const allCities = document.querySelectorAll('.city-wrapper')

  for (let i = 0; i < allCities.length; i += 2) {
    allCities[i].style.backgroundColor = '#f0f0f0'
  }

  const touristAttractionLists = document.querySelectorAll('.tourist-attractions-list ul')
  touristAttractionLists.forEach(ulElement => {
    const liElements = ulElement.querySelectorAll('li')
    liElements.forEach((liElement, index) => {
      if (index === 0) {
        liElement.style.color = 'green'
      } else if (index > 2) {
        liElement.style.color = 'red'
      } else {
        liElement.style.color = 'orange'
      }
    })
  })

  const citiesList = document.querySelector('#cities-list')
 
  citiesList.style = `display: flex;
                      flex-wrap: wrap;
                      gap: 20px;`

  allCities.forEach((city, index) => {
    console.log(index, city)
    city.style.padding = '15px'
    city.style.boxSizing = 'border-box'
    
    if (index === allCities.length - 1 && index % 2 === 0) {
      city.style.width = '100%'
    } else {
      city.style.width = 'calc((100% - 20px) / 2)'
    }
  })
}

styleCities()