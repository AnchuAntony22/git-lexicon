const handleClick = () => {
    console.log('Button clicked!');
  };

const target = document.getElementById("btn");
target.addEventListener("click", handleClick);

const handleClick1 = () => {
    const targetElement = document.getElementById("btn");
    targetElement.style.backgroundColor = "blue";
    targetElement.style.color = "white";
  };

  const handleClick2 = () => {
    const targetElement = document.getElementById("content");
    targetElement.innerHTML = "<p>New content added!</p>";
  }; 