function Withdraw(){
    const [show, setShow]           = React.useState(true);
    const [status, setStatus]       = React.useState('');
    const [withdraw, setWithdraw]   = React.useState('');
    const [balance, setBalance]     = React.useState('0.00');
    const ctx = React.useContext(UserContext);

function validate(field, label){
    if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''), 3000);
        return false;
    }
        return true;
}

function handleWithdraw (){
    
    setBalance(Number(balance) - Number(withdraw))

};

function clearForm(){
    setWithdraw('');
    setShow(true);
}

    return (
        <Card 
            bgcolor="secondary"
            header="Withdraw"
            status={status}
            body={show ? (
            <>

            <h5>CURRENT BALANCE: ${balance} </h5> <br/>

            AMOUNT TO WITHDRAW: <br/>
            <input type="input" className="form-control" id="withdraw" placeholder="withdraw amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} /> <br/>
            
            <button type="submit" className="btn btn=light" onClick={handleWithdraw}> Withdraw </button>
            </>
        ) : (
            <>
            <h5> Success </h5>
            <button type="submit" className="btn btn=light" onClick={clearForm}> Make another withdraw </button>
            </>
        )}
    />
)
}