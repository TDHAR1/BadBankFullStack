function Spa() {
  const [authenticatedUser, setAuthenticatedUser] = React.useState(null);
  return (
    <HashRouter>
      <div>
        <NavBar/>   
        <UserContext.Provider value={{ authenticatedUser, setAuthenticatedUser }}>
          <div className="container" style={{padding: "20px"}}>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            {/* <Route path="/transactions/" component={Transactions} /> */}
            <Route path="/balance/" component={Balance} />
            <Route path="/alldata/" component={AllData} />
            {/* <Route path="/loggedin/" component={LoggedIn} /> */}

          </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
