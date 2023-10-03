const WhatWeDo = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="lg:grid lg:grid-cols-3  gap-4">
        <div className="text-center mt-5">
          <h1>Price Checker</h1>
          <p>Check estimated price of delivery</p>
        </div>
        <div className="text-center mt-5">
          <h1>Create Order</h1>
          <p>Make a logistics order</p>
        </div>
        <div className="text-center mt-5">
          <h1>Fulfil Order</h1>
          <p>Fulfil a logistics order as a certified</p>
          <p>logistics operator.</p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
