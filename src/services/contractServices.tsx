import Web3 from 'web3';
import { contractABI, contractAddress } from '../config/contractConfig'; // ABI y dirección del contrato

const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
const contract = new web3.eth.Contract(contractABI, contractAddress);

type createCourseType = {
    name: string,
    description: string,
    category: string,
    price: string,
    img: string,
    video: string,
    userAddress: string,
}

export async function createCourse(context: createCourseType) {
  try {
    await contract.methods.createCourse(context).send({ from: context.userAddress });
  } catch (error) {
    console.error(error);
  }
}
