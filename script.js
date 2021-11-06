let place = document.querySelector('input')
const form = document.querySelector('form')
let temperature = document.querySelector('#temperature')
let city = document.querySelector('#location')
let image = document.querySelector('img')


form.addEventListener('submit', (e) => {
  e.preventDefault()
  const information = getData()
  information.then((res) => {
    console.log(res.data)
    city.textContent = res.data.location.name
    temperature.textContent = res.data.current.temp_c + '°C' + ' ' + res.data.current.condition.text
    image.src = res.data.current.condition.icon
  })


})


const getData = async () => {
  try {
    let userInput = form.elements.query.value
    const config = {
      params: { q: userInput }
    }

    const info = await axios.get('http://api.weatherapi.com/v1/current.json?key=eaad8b54e7f642fdac190640211410', config)

    return info
  }
  catch{
    console.log(e)
  }
}


// const getMainInfo = async () => {
//   let value = await getData()
//   let location = value.data.location
//   console.log(location.name, location.country)
// }
