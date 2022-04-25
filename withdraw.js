function Withdraw(){
  const [withdraw, setWithdraw] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [show, setShow] = React.useState(true);
  const ctx = React.useContext(UserContext); 

  function validate(field, balance){
    if(!field || isNaN(field)){
      setStatus('Error: Not a Number');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    if(field > balance){
      setStatus('Error: Not enough balance');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function handleWithdraw(){
    let balance = ctx.users[ctx.users.length-1].balance;
    if(!validate(withdraw, balance)) return;
    ctx.users[ctx.users.length-1].balance-= Number(withdraw);
    setShow(false);
  }

  function clearForm(){
    setWithdraw(0);
    setShow(true);
  }

  return (
    <Card
   bgcolor="primary"
   header="Withdraw"
   status={status}
   body={show? (
     <>
     Balance: {ctx.users[ctx.users.length-1].balance}<br/>
   Withdraw Amount<br/>
     <input type="input" className="form-control" id="withdraw" placehoder="Enter Amount" value={withdraw} onChange={e=> setWithdraw(e.currentTarget.value)}/><br/>
     <button type="submit" className="btn btn-light" onClick={handleWithdraw}>Submit</button>
     </>
   ):(
    <>
    <h5>Success</h5>
    <button type="submit" className="btn btn-light" onClick={clearForm}>Make another Withdraw</button>
    </>
   )}
   />
  )
}
