function Spa(){
    const Route = ReactRouterDOM.Route;
    const Link = ReactRouterDOM.Link;
    const HashRouter = ReactRouterDOM.HashRouter;
    
    return (
        <HashRouter>
        <NavBar/>
        <UserContext.Provider value={{users: [{name:'', email: '',password:''}]}}>
        <div className="container" style={{padding: "20px"}}>
        <Route path="/" exact component={Home} />
        <Route path="/deposit/" component={Deposit} />
        <Route path="/withdraw/" component={Withdraw} />
        <Route path="/alldata/" component={AllData} />
        <Route path="/createaccount/" component={CreateAccount} />
        </div>
        </UserContext.Provider>
        </HashRouter>
    );
}

ReactDOM.render(<Spa/>, document.getElementById("root"))

