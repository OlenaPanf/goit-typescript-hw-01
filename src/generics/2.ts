type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};
//від ментора
function compare<T extends Pick<AllType, keyof AllType>>(top: T, bottom: T) {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
// моя функція
// function compare<T extends AllType, U extends AllType>(
//   top: Pick<T, keyof AllType>,
//   bottom: Pick<U, keyof AllType>
// ): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   };
// }

export {};

//=========================================================
// умова
// function compare(top, bottom): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   };
// }
