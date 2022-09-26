import { useState } from "react";

const Button = () => {
  const [age, setAge] = useState(12);
  return (
    <div>
      <button className="btn btn-secondary" onClick={() => setAge(age + 1)}>
        Increase
      </button>
      {age}
    </div>
  );
};

export default Button;
