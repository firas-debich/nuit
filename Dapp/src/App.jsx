import { useState,useEffect } from 'react'
import './App.css'
import artifact from "../../artifacts/contracts/messagerie.sol/Messagerie.json";
import useGetContract from './hooks/useGetContract'

function App() {
  const [currentUser,setCurrentUser]=useState(null)
 const [contract] = useGetContract(import.meta.env.RPC_URL,import.meta.env.SC_ADDRESS,artifact.abi);
 console.log(contract)
  const connectWalletrHandler = ()=> {
    window.ethereum.enable().then(accounts=>{
      setCurrentUser(accounts[0])
    })
  }
  const checkIfMetaMaskInstalled=()=> {
      if (typeof window.ethereum == "undefined"){
        return "please install metamask";
      } 
  }
   
    const handleCreateZombie= async()=> {
      const params = {
        from :currentUser
      }
  
    const receipt = await contract.methods.createRandomZombie("hedn").send(params);
      // listen to the event create New Zombie
      console.log(receipt.events.returnValues, "receipt");

   
    }

  
    useEffect( ()=> {
      checkIfMetaMaskInstalled()
    },[])
    
  return (
    <div className="App">
      <button onClick={connectWalletrHandler}>connect wallet </button>
      <>
    {currentUser}
  
      </>
    </div>
  )
}

export default App
