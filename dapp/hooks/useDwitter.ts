import Dwitter from './Dwitter.json';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

const ContractABI = Dwitter.abi;
const ContractAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3';
const Ethereum = typeof window !== 'undefined' && (window as any).ethereum;

const getDwitterContract = () => {
  const provider = new ethers.providers.Web3Provider(Ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(ContractAddress, ContractABI, signer);
};

const useDwitter = () => {
  //const Dwitter = getDwitterContract();
  const [currentAccount, setCurrentAccount] = useState<string>('');
  const connect = async () => {
    try {
      if (!Ethereum) {
        alert('Please install MetaMask');
        return;
      }
      const accounts = await Ethereum.request({
        method: 'eth_requestAccounts',
      });
      if (accounts.length === 0) {
        console.log('No authorized accounts');
        return;
      }
      const account = accounts[0];
      console.log('Connected to account', account);
      setCurrentAccount(account);
      return;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!Ethereum) {
      console.log('No ethereum wallets found, please get metamaask');
      return;
    }
    connect();
  }, []);

  return { connect, account: currentAccount };
};

export default useDwitter;
