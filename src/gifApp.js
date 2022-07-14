import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

function GifApp() {
  const [categories, setCategories] = useState(["one punch"]);

  const onAddCategory = (newValue) => {

    setCategories([...categories, newValue]);

  };

  return (
    <>
      {/* title */}
      <h1> Gif App </h1>
      {/* input */}
      <AddCategory onNewValue={onAddCategory} />
      {/* listado de gifs */}
     <ol>
        {categories.map((category) => (
            <GifGrid key={category} category={category} />
        ))}
     </ol>



    </>
  );
}

export default GifApp;
