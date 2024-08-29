"use client";

import { useState } from "react";
import slugify from "slugify";

const SluggerForm = () => {
  const [text, setText] = useState("");
  const [slug, setSlug] = useState("");

  const handleSlugify = () => {
    const result = slugify(text, { lower: true });
    setSlug(result);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here"
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleSlugify}>Generate Slug</button>
      {slug && (
        <div style={{ marginTop: "20px" }}>
          <h2>Slug: {slug}</h2>
        </div>
      )}
    </div>
  );
};

export default SluggerForm;
