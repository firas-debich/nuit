
import {useEffect,useState} from 'react'
import web3 from "web3"

const useGetContract = (provider,scAddress,contractAbi) => {
 const [contract,setContract]=useState(null)

    useEffect( ()=> {
        const getContract = async ()=> {
            const web3_ = new web3(provider);
            web3_.setProvider(window.ethereum);
            return new web3_.eth.Contract(
                contractAbi,
                scAddress
            )
        }
        getContract().then(contract=>setContract(contract))
    },[])
  return [contract]  
}

export default useGetContract
