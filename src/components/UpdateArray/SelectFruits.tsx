export default function SelectFruits({ addFood }: any) {
  return (
    <select name="fruits" id="fruits" onChange={(e) => addFood(e.target.value)}>
      <option value="">Select new Fruit</option>
      <option value="Apple">Apple</option>
      <option value="Pear">Pear</option>
      <option value="Plum">Plum</option>
      <option value="Peach">Peach</option>
      <option value="Cherry">Cherry</option>
      <option value="Grape">Grape</option>
      <option value="Fig">Fig</option>
      <option value="Quince">Quince</option>
      <option value="Apricot">Apricot</option>
      <option value="Strawberry">Strawberry</option>
      <option value="Raspberry">Raspberry</option>
      <option value="Blackberry">Blackberry</option>
      <option value="Currant">Currant</option>
      <option value="Gooseberry">Gooseberry</option>
      <option value="Blueberry">Blueberry</option>
      <option value="Mulberry">Mulberry</option>
      <option value="Kiwi">Kiwi</option>
      <option value="Lemon">Lemon</option>
      <option value="Lime">Lime</option>
      <option value="Orange">Orange</option>
      <option value="Mandarin">Mandarin</option>
      <option value="Pomegranate">Pomegranate</option>
      <option value="Melon">Melon</option>
      <option value="Watermelon">Watermelon</option>
      <option value="Elderberry">Elderberry</option>
      <option value="Goji Berry">Goji Berry</option>
      <option value="Rowan Berry">Rowan Berry</option>
      <option value="Bilberry">Bilberry</option>
      <option value="Lingonberry">Lingonberry</option>
      <option value="Sea Buckthorn">Sea Buckthorn</option>
      <option value="Medlar">Medlar</option>
      <option value="Sloe">Sloe</option>
      <option value="Loganberry">Loganberry</option>
    </select>
  );
}
