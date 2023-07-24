import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Product = () => {
  const { product } = config;
  const { items } = product;

  return (
    <section className={`bg-background py-8`} id="why-us">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        {items.map((item, index) => {
          const { title, description, img } = item;
          const isOdd = index % 2 === 0;

          return isOdd ? (
            <div className={`flex flex-wrap`}>
              <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
                <h3
                  className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
                >
                  {title}
                </h3>
                <p className={`text-gray-600`}>{description}</p>
              </div>
              <div className={`w-full sm:w-1/2 p-6`}>
                <img className="h-6/6" src={img} alt={title} />
              </div>
            </div>
          ) : (
            <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
              <div className={`w-full sm:w-1/2 p-6`}>
                <img className="h-6/6" src={img} alt={title} />
              </div>
              <div className={`w-full sm:w-1/2 p-6 mt-20`}>
                <div className={`align-middle`}>
                  <h3
                    className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
                  >
                    {title}
                  </h3>
                  <p className={`text-gray-600 mb-8`}>{description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Product;
