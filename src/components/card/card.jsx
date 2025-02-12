import { useEffect, useState } from "react"

import image from '/pokeball.png'

// way to rotate card, the card must stop at 90deg in order to show the back side
// card.style.transform = 'rotateY(90deg)'

const Card = (props) => {
  const [name, sprite, found, handler] = [
    props.obj.name, props.obj.sprite, props.obj.found, props.handler
  ]
  const [flipped, setFlip] = useState(false)

  const handleStyle = () => {
    if(found){
      return {border: "2px solid #000"}
    }else{
      return {border: "2px solid #fff"}
    }
  }

  const handleFlipped = () => {
    setFlip(!flipped)
  }

  const handleClicked = () => {
    if(found) return
  }

  useEffect(() => {}, [found])
  
  if(found){
    return (
      <div className="card" style={handleStyle()} onClick={() => {
      handleClicked()
      handler(props.obj)
    }}>
      <img src={sprite} alt="" />
      <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
    </div>
    )
  }else{
    return (
      <div className="back-side" style={{backgroundImage:`url(${image})`}} onClick={() => {
        handler(props.obj)
        handleClicked()
      }}>
      </div>
    )
  }
}

export default Card