import React, { useState, useEffect } from "react";
import { ProfileStyle, SubProfileStyle } from "../styles/ProfileStyle";

import {
  // useUserProfileQuery,
  useUpdateUserProfileMutation,
} from "../../features/Post/PostApi";
// import { useNavigate } from "react-router-dom";

const ProfileComponents = ({ data }) => {
  const [updateUser] = useUpdateUserProfileMutation();
  // console.log(id);
  // console.log(dataUser);
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  // console.log(dateOfBirth);

  const formData = new FormData();
  // console.log(postUpdateImage.name);

  formData.append("first_name", firstName);
  formData.append("last_name", lastName);
  formData.append("email", email);
  formData.append("phone_number", phoneNumber);
  formData.append("gender", gender);
  formData.append("date_of_birth", dateOfBirth);
  formData.append("username", username);
  if (profilePicture) {
    formData.append("profile_picture", profilePicture.name);
  }
  // console.log(profilePicture);

  const SubmitHandler = async (e) => {
    // e.preventDefault();
    let dataL = await updateUser({ formData, id });
    if (dataL === undefined) {
      // console.log("its undefined");
    } else {
      localStorage.setItem("userInfo", JSON.stringify(dataL));
      console.log(dataL);
    }
  };

  // console.log(error);
  // console.log(dataUser);

  useEffect(() => {
    setId(data.id);
    setFirstName(data.first_name);
    setLastName(data.last_name);
    setEmail(data.email);
    setPhoneNumber(data.phone_number);
    setGender(data.gender);
    setDateOfBirth(data.date_of_birth);
    setUsername(data.username);
    setProfilePicture(data.profile_picture);
  }, [data]);

  return (
    <ProfileStyle>
      <>
        <h2>{username}</h2>
        <img src={`http://127.0.0.1:8000${profilePicture}`} alt={username} />
      </>
      <input
        accept="images/*"
        type="file"
        id="profilePicture"
        name="profilePicture"
        placeholder="change"
        value={profilePicture}
        onChange={(e) => setProfilePicture(e.target.files[0])}
      />
      <label htmlFor="profilePicture" id="pictureLabel">
        Change Picture
      </label>
      <SubProfileStyle>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            id="firstName"
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </SubProfileStyle>
      <SubProfileStyle>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="tel"
          />
        </div>
      </SubProfileStyle>
      <SubProfileStyle>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            id="dateOfBirth"
            type="date"
            placeholder="MM/DD/YEAR"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="gender">
            Gender: <strong>{gender}</strong>
          </label>
          <select name="" id="" onChange={(e) => setGender(e.target.value)}>
            <option>-----</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </SubProfileStyle>
      <button onClick={SubmitHandler}>Update Changes</button>
    </ProfileStyle>
  );
};

export default ProfileComponents;
