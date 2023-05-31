import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserThunk } from "../../store/session";
import { useModal } from "../../context/Modal";
import "./UpdateUserModal.css";

const UserProileModal = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [imgFile, setImageFile] = useState(null);
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [error, setError] = useState(null);

  const maxBioLength = 250;

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setBio(user.bio);
    }
  }, [user]);

  const handleBioChange = (e) => {
    const inputBio = e.target.value;
    if (inputBio.length <= maxBioLength) {
      setBio(inputBio);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id === 4) {
      closeModal();
      alert("Sign Up for an account to unlock profile feature!");
      return;
    }
    if (!username) {
      setError("Username is required");
      return;
    }
    if (firstName === null) {
      setError("First name is required");
      return;
    }
    if (lastName === null) {
      setError("Last name is required");
      return;
    }
    if (bio === null) {
      setError("Bio is required");
      return;
    }
    const formData = new FormData();
    if (user.username !== username) {
      formData.append("username", username);
    } else {
      formData.append(
        "username",
        "giraffenostrilwidenderplusULTRA"
      );
    }
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("bio", bio);
    if (imgFile) {
      formData.append("profile_image", imgFile);
    }

    dispatch(updateUserThunk(formData, user.id));
    closeModal();
  };

  return (
    <div className="user-modal">
      <div>
        <h1>UPDATE USER ACCOUNT</h1>
      </div>
      <form onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}
        <label>
          <div>UserName</div>
          <input
            type="text"
            placeholder={username || "username"}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <div>First Name</div>
          <input
            type="text"
            placeholder={firstName || "first name"}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          <div>Last Name</div>
          <input
            type="text"
            placeholder={lastName || "last name"}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          <div>Bio</div>
          <input
            type="text"
            placeholder={bio || "bio"}
            onChange={handleBioChange}
          />
          <div className="bio-counter">
            {bio?.length}/{maxBioLength}
          </div>
        </label>
        <div className="profilePictureupload">
          <input
            id="hideprofilepicture1"
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="hideprofilepicture"
          />
          <label htmlFor="hideprofilepicture1" className="upload-button">
            <i className="fas fa-cloud-upload-alt"></i>
            {imgFile ? "Picture Ready to Upload" : "Upload Picture"}
          </label>
        </div>
        <div></div>
        <div className="seperatingDeleteandUpdate">
          <div>
            <button className="submit" type="submit">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserProileModal;
