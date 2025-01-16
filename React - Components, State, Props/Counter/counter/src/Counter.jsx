import React, { useState } from "react";

function Counter() {
  const [data, setData] = useState(0);
  return (
    <div>
    <div className="container mt-5  pt-5 text-center align-content-between ">
    
        <div>
          <h1 class="h1 text-white">React Web</h1>
          <h2 class="h2 text-white">Counter App</h2>
        </div>

        <div>
          <h1>{data}</h1>
        </div>

        <div>
          <button
            class="btn btn-dark rounded"
            onClick={() => setData(data+1)}
          >
            Increment
          </button>
        

        
          <button
            class="btn btn-dark rounded mx-1"
            onClick={() => {
              if (data > 0) {
                setData(data - 1);
              }
            }}
          >

            Decrement
          </button>
          </div>
       

        <div>
          <button class="btn btn-dark rounded mt-3" onClick={() => setData(0)}>
                     Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
