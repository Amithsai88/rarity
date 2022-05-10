import Rare from './Rare';
function typeExists(trait, arr) {
  return arr.some(function (el) {
    return el.type === trait;
  });
}

function Rarity(props) {
  const { arts, id } = props;
  let rarity = 0;
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

  rarity = rarity / traittypes.length;

  console.log(rarity);

  return <Rare traittypes={traittypes} arts={arts} id={id}></Rare>;
}

export default Rarity;
