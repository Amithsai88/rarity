import { useState, useEffect } from 'react';

function typeExists(trait, arr) {
  return arr.some(function (el) {
    return el.type === trait;
  });
}

function findRarity(traittypes, trait) {
  let index = traittypes.findIndex((obj) => {
    return obj.type === trait;
  });
  let rarity = traittypes[index]['trait'] / traittypes[index]['total'];
  return rarity;
}

function Rarity(props) {
  const { arts, id } = props;
  const [rarity, setRarity] = useState(0);
  let traittypes = [];

  arts.map((art) =>
    art.attributes.map((attribute) =>
      typeExists(attribute.trait_type, traittypes)
        ? traittypes.some((item) => item.hasOwnProperty(`${attribute.value}`))
          ? (traittypes[
              traittypes.findIndex((obj) => {
                return obj.type === attribute.trait_type;
              })
            ][`${attribute.value}`] += 1) &
            (traittypes[
              traittypes.findIndex((obj) => {
                return obj.type === attribute.trait_type;
              })
            ]['total'] += 1)
          : (traittypes[
              traittypes.findIndex((obj) => {
                return obj.type === attribute.trait_type;
              })
            ][`${attribute.value}`] = 1) &
            (traittypes[
              traittypes.findIndex((obj) => {
                return obj.type === attribute.trait_type;
              })
            ]['total'] += 1)
        : (traittypes = [
            ...traittypes,
            { type: attribute.trait_type, [attribute.value]: 1, total: 1 },
          ])
    )
  );
  console.log(traittypes);
  return (
    <div>
      {/* {
      arts.map((art) => art.id === id ? (art.attributes.map((attribute) =>
      setRarity(findRarity(traittypes,attribute.trait_type)) )): setRarity(0)
      <h3>Rarity: {rarity}</h3> */}
      {arts.map((art) =>
        art.id === id
          ? art.attributes.map((attribute) =>
              setRarity(findRarity(traittypes, attribute.trait_type))
            )
          : setRarity(0)
      )}
      <h3>Rarity: {rarity}</h3>
    </div>
  );
}

export default Rarity;
