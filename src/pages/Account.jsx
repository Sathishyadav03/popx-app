import MobileContainer from "../components/MobileContainer";

function Account() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <MobileContainer>

      <div className="account-page">

        <div className="account-header">
          <h2>Account Settings</h2>
        </div>

        <div className="profile-section">

          <div className="profile-info">

          <div className="profile-image emoji-profile">
  👨
</div>

            <div>
              <h3>{user?.fullName || "Guest User"}</h3>

              <p>{user?.email || "guest@gmail.com"}</p>
            </div>

          </div>

          <p className="description">
            Lorem Ipsum Dolor Sit Amet,
            Consetetur Sadipscing Elitr,
            Sed Diam Nonumy Eirmod Tempor
            Invidunt Ut Labore Et Dolore
            Magna Aliquyam Erat, Sed Diam
          </p>

        </div>

      </div>

    </MobileContainer>
  );
}

export default Account;