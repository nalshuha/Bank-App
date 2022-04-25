function AllData(){
  const ctx = React.useContext(UserContext); 
  console.log(ctx);
  return (
    
    ctx.users.map((user)=>(
      <Card
      txtcolor="black"
   header={user.name}
   body={ (
     <>
     Email Address: {user.email}<br/>
     Password: {user.password}<br/>
     Balance: {user.balance}
     
     </>
   )}
   />
    ))
    
    
  );
}
