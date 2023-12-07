import React, { useState } from "react";

function Ornek3() {
  const [first, setfirst] = useState("");

  const tikla = (agu) => {
    setfirst(agu.target.value);
  };

  return (
    <div>
      <input value={first} onChange={tikla} />
      <p>{first}</p>
    </div>
  );
}

export default Ornek3;
