function LoggedIn(){
    const ctx = React.useContext (UserContext);
    return (
        
        <div>
            <logout/>
            <h3>Hello!</h3>
            {JSON.stringify(ctx.users)}
        </div>
    )
}