import { useEffect } from 'react';

function findRarity(traittypes, trait, value) {
  let index = traittypes.findIndex((obj) => {
    return obj.type === trait;
  });
  let rarity = traittypes[index][value] / traittypes[index]['total'];
  return rarity;
}

export default function Rare(props) {
  const { traittypes, arts, id } = props;
  let rarity = 0;
  useEffect(() => {
    const fetchData = async () => {
      arts.map((art) =>
        art.id === id
          ? art.attributes.map(
              (attribute) =>
                (rarity += findRarity(
                  traittypes,
                  attribute.trait_type,
                  attribute.value
                ))
            )
          : (rarity = 0)
      );
    };
    fetchData();
  }, []);
  return (
    <div>
      <p>Rarity: {rarity}</p>
    </div>
  );
}
