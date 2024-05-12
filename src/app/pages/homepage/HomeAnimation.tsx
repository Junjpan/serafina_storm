const HomeAnimation = () => {
  const array = Array.from(Array(22).keys());

  return (
    <div className="loader">
      <div className="loader__container">
        {Array.from(array).map((num) => {
          return (
            <span key={num} style={{ "--i": num + 1 } as React.CSSProperties}>
              <i className="fa-solid fa-star"></i>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default HomeAnimation;
