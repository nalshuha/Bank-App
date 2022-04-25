function Deposit(){
  const [deposit, setDeposit] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [show, setShow] = React.useState(true);
  const ctx = React.useContext(UserContext); 

  function validate(field){
    if(!field || isNaN(field)){
      setStatus('Error: Not a Number');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    if(field < 0){
      setStatus('Error: Number Must be positive');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function handleDeposit(){
    if(!validate(deposit)) return;
    ctx.users[ctx.users.length-1].balance+= Number(deposit);
    setShow(false);
  }

  function clearForm(){
    setDeposit(0);
    setShow(true);
  }

  return (
    <Card
   bgcolor="primary"
   header="Deposit"
   status={status}
   body={show? (
     <>
     Balance: {ctx.users[ctx.users.length-1].balance}<br/>
    Deposit Amount<br/>
     <input type="input" className="form-control" id="deposit" placehoder="Enter Amount" value={deposit} onChange={e=> setDeposit(e.currentTarget.value)}/><br/>
     <button type="submit" className="btn btn-light" onClick={handleDeposit}>Submit</button>
     </>
   ):(
    <>
    <h5>Success</h5>
    <button type="submit" className="btn btn-light" onClick={clearForm}>Make another Deposit</button>
    </>
   )}
   />
  )
}
