import React, { Fragment, useState, useEffect } from 'react';

const SchRsl = () => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false); // Track loading state
//   const [error, setError] = useState(null); // Track errors

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true); // Set loading state to true
//       try {
//         const response = await fetch('/api/schRsl.py');
//         if (!response.ok) {
//           throw new Error(`Network response was not ok: ${response.status}`);
//         }
//         const data = await response.json();
//         setData(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError(error.message); // Set error message
//       } finally {
//         setIsLoading(false); // Set loading state to false regardless of success/error
//       }
//     };

//     fetchData();
//   }, []);

//   // Handle loading and error states conditionally:
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }


//   #########################################################################################
// temp data

const allPostData = {
    1: { id: 1, type: "post:video", data: "This is some text", date: "4/5/2024" },
    2: { id: 2, type: "user:following", data: "This is another text example", date: "4/6/2024" },
    3: { id: 3, type: "post:text", data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", date: "4/7/2024" },
    4: { id: 4, type: "user:comment", data: "This is a comment on a post", date: "4/8/2024" },
    5: { id: 5, type: "post:image", data: "Hello, World!", date: "4/9/2024" },
    6: { id: 6, type: "comment:video", data: "Another comment on a different post", date: "4/10/2024" }
};

let imgSrc, imgClass;
for (const [key, value] of Object.entries(allPostData)) {
  const { type } = value;
  imgSrc = type.startsWith("post:") || type === "channel" || type === "user:video"
    ? "img/no_imgLnk2.svg"
    : "img/no_imgLnk.svg";
  imgClass = type.startsWith("post:") || type === "channel" || type === "user:video"
    ? "schImg_2"
    : "schImg_1";
};


//   #########################################################################################

  // If data is available, render it:
  return (
    <Fragment>
        {/*  */}
        {Object.entries(allPostData).map(([key, value]) => (
            <div key={key} className="SchRsl_cnt">
                <div className="dI">
                    <div>{value.data} <small>{value.date}</small></div>
                    <div><small>{value.type}</small></div>
                </div>
                <div className="dI fR">
                    <img src={imgSrc} alt="No Image" className={imgClass} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25" />
                    </svg>
                </div>
            </div>
        ))}
        {/*  */}
        {/* {JSON.stringify(data, null, 2)} */}
    </Fragment>
  );
};

export default SchRsl;