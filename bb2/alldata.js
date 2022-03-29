function AllData() {
    const ctx                        = React.useContext(UserContext);


    const users = ctx.users;

    const names = users.map(user => user.name);
    const email = users.map(user => user.email);
    const password = users.map(user => user.password);


    return (
      
            <>
                <Card
                    bgcolor="secondary"
                    header="Accounts"
                    body={
                            <>  
                                <h5> Accounts opened: </h5>
                                <div>
                                    <h6>Name: {names}</h6>
                                    <h6>Email address: {email}</h6>
                                    <h6>Password: {password}</h6> 
                                 								
                                </div>
                </>
                    }
                />
                </>
                )}
