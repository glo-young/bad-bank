
function Deposit(){
    
    const [status, setStatus]       = React.useState('');
    const [deposit, setDeposit]     = React.useState('');
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

function handleDeposit (){
    
    setBalance(Number(balance) + Number(deposit));
};

function clearForm(){
    setDeposit('');
    setShow(true);
    }

return (
    <Card 
        bgcolor="secondary"
        header="Deposit"
        status={status}
        body={ 
            <>
            <h5>CURRENT BALANCE: ${balance} </h5> <br/>
            AMOUNT TO DEPOSIT: <br/>
            <input type="input" className="form-control" id="deposit" placeholder="deposit amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /> <br/>
            
            <button type="submit" className="btn btn=light" onClick={handleDeposit}> Deposit </button>
            </>
            
        }
    />
)
}
