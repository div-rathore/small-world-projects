import React, { useEffect, useState } from "react";

const MemoryGame = () => {
  const [cards, setCards] = useState(generateGrid());
  const [isLock, setIsLock] = useState(false)
  const [flippedCards, setFlippedCards] = useState([])

  const handleClick = (index) => {
    if(cards[index].isFlipped || isLock){
        return
    }
    const copyCards = [...cards];
    copyCards[index].isFlipped = true
    setCards(copyCards)
    setFlippedCards([...flippedCards, index])
  }

  useEffect(()=>{
    if(flippedCards.length===2){
        setIsLock(true);
        setTimeout(()=>{
            if(cards[flippedCards[0]].number !== cards[flippedCards[1].number]){
                setCards((prev)=> {
                    const copyCards = [...prev];
                    copyCards[flippedCards[0]].isFlipped = false;
                    copyCards[flippedCards[1]].isFlipped = false;
                    return copyCards;
                })
            }
            setIsLock(false)
            setFlippedCards([])
        },3000)

    }
  },[flippedCards])

  return (
    <div className="grid-container">
      {cards?.map(({ id, number, isFlipped }) => {
        return <div onClick={()=> handleClick(id)} className="cards" key={id}>{isFlipped ? number : "?"}</div>;
      })}
    </div>
  );
};

function generateGrid() {
  const arr = Array.from({ length: 18 }, (_, index) => index + 1);
  const grid = [...arr, ...arr].sort(() => Math.random() - 0.5);
  const cards = grid.map((item, index) => {
    return { id: index, number: item, isFlipped: false };
  });
  return cards;
}

export default MemoryGame;
