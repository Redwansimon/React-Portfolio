// import { Link } from "react-router-dom";


// const Error = () => {
//     return (
//         <div>
//             <h1>oppsssss!!!</h1>
//             <Link to="/"><button>Go Back To Home Page</button></Link>
//         </div>
//     );
// };

// export default Error;
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);
  return <div>Something went wrong: {error.message || "Unknown error"}</div>;
};

export default Error;
