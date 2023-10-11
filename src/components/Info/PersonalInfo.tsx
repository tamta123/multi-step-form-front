import { useState } from "react";

const PersonalInfo = () => {
  const [name, setName] = useState("e.g. Stephen King");
  const [email, setEmail] = useState("e.g. stephenking@lorem.com");
  const [mobile, setMobile] = useState("e.g. +1 234 567 890");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  return (
    <div>
      <form action="/action_page.php">
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <br />
        <label htmlFor="email">Email Address:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <label htmlFor="mobile">Mobile:</label>
        <br />
        <input
          type="text"
          id="mobile"
          name="mobile"
          value={mobile}
          onChange={handleMobileChange}
        />
        <br />
        <br />
      </form>
    </div>
  );
};

export default PersonalInfo;

// const PersonalInfo = () => {
//   const dispatch = useDispatch(); // Get the dispatch function

//   // Use useSelector to access the Redux state
//   const name = useSelector((state) => state.customer.name);
//   const email = useSelector((state) => state.customer.email);

//   // Define event handlers to dispatch actions when input values change
//   const handleNameChange = (event) => {
//     const newName = event.target.value;
//     dispatch(setName(newName)); // Dispatch the setName action
//   };

//   const handleEmailChange = (event) => {
//     const newEmail = event.target.value;
//     dispatch(setEmail(newEmail)); // Dispatch the setEmail action
//   };

//   return (
//     <div>
//       <form action="/action_page.php">
//         <label htmlFor="name">Name:</label>
//         <br />
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={name}
//           onChange={handleNameChange}
//         />
//         <br />
//         <label htmlFor="email">Email Address:</label>
//         <br />
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={email}
//           onChange={handleEmailChange}
//         />
//         <br />
//         <label htmlFor="mobile">Mobile:</label>
//         <br />
//         {/* Add the mobile input here */}
//         <br />
//         <br />
//       </form>
//     </div>
//   );
// };

// export default PersonalInfo;
