/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MessageBus, MessageBusInterface } from "../MessageBus";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ISigsVerifier",
        name: "_sigsVerifier",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum MessageReceiver.MsgType",
        name: "msgType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "enum MessageReceiver.TxStatus",
        name: "status",
        type: "uint8",
      },
    ],
    name: "Executed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dstChainId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "Message",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dstChainId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "bridge",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "srcTransferId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "MessageWithTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "srcChainId",
            type: "uint64",
          },
        ],
        internalType: "struct MessageReceiver.RouteInfo",
        name: "_route",
        type: "tuple",
      },
      {
        internalType: "bytes[]",
        name: "_sigs",
        type: "bytes[]",
      },
      {
        internalType: "address[]",
        name: "_signers",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_powers",
        type: "uint256[]",
      },
    ],
    name: "executeMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        components: [
          {
            internalType: "enum MessageReceiver.TransferType",
            name: "t",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "seqnum",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "srcChainId",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "refId",
            type: "bytes32",
          },
        ],
        internalType: "struct MessageReceiver.TransferInfo",
        name: "_transfer",
        type: "tuple",
      },
      {
        internalType: "bytes[]",
        name: "_sigs",
        type: "bytes[]",
      },
      {
        internalType: "address[]",
        name: "_signers",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_powers",
        type: "uint256[]",
      },
    ],
    name: "executeMessageWithTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "executedMessages",
    outputs: [
      {
        internalType: "enum MessageReceiver.TxStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "executedTransfers",
    outputs: [
      {
        internalType: "enum MessageReceiver.TxStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeBase",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feePerByte",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidityBridge",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pegBridge",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pegVault",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_dstChainId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_dstChainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_bridge",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_srcTransferId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "sendMessageWithTransfer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "setFeeBase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "setFeePerByte",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "setLiquidityBridge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "setPegBridge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "setPegVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sigsVerifier",
    outputs: [
      {
        internalType: "contract ISigsVerifier",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_cumulativeFee",
        type: "uint256",
      },
      {
        internalType: "bytes[]",
        name: "_sigs",
        type: "bytes[]",
      },
      {
        internalType: "address[]",
        name: "_signers",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_powers",
        type: "uint256[]",
      },
    ],
    name: "withdrawFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "withdrawnFees",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620021fd380380620021fd8339810160408190526200003491620000a3565b80620000403362000053565b6001600160a01b031660805250620000d5565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215620000b657600080fd5b81516001600160a01b0381168114620000ce57600080fd5b9392505050565b608051612105620000f860003960008181610392015261060f01526121056000f3fe6080604052600436106101755760003560e01c80639a9f76da116100cb578063cd2abd661161007f578063e2c1ed2511610059578063e2c1ed2514610424578063f2fde38b14610444578063f60bbe2a1461046457600080fd5b8063cd2abd66146103b4578063d8257d17146103e4578063dfa2dbaf1461040457600080fd5b80639f3ce55a116100b05780639f3ce55a1461034d578063a223221314610360578063ccf2683b1461038057600080fd5b80639a9f76da146102f05780639b05a7751461032d57600080fd5b80635b3e5f501161012d57806382980dc41161010757806382980dc4146102845780638da5cb5b146102bc57806395e911a8146102da57600080fd5b80635b3e5f501461020f578063654317bf1461024f578063715018a61461026f57600080fd5b80632ff4c4111161015e5780632ff4c411146101bc5780634289fbb3146101dc578063588be02b146101ef57600080fd5b806303cbfe661461017a57806306c28bd61461019c575b600080fd5b34801561018657600080fd5b5061019a610195366004611822565b61047a565b005b3480156101a857600080fd5b5061019a6101b7366004611844565b6104fb565b3480156101c857600080fd5b5061019a6101d73660046118a9565b61055a565b61019a6101ea36600461199f565b6107b0565b3480156101fb57600080fd5b5061019a61020a366004611822565b61085f565b34801561021b57600080fd5b5061023c61022a366004611822565b60036020526000908152604090205481565b6040519081526020015b60405180910390f35b34801561025b57600080fd5b5061019a61026a366004611a17565b6108db565b34801561027b57600080fd5b5061019a610aed565b34801561029057600080fd5b506006546102a4906001600160a01b031681565b6040516001600160a01b039091168152602001610246565b3480156102c857600080fd5b506000546001600160a01b03166102a4565b3480156102e657600080fd5b5061023c60015481565b3480156102fc57600080fd5b5061032061030b366004611844565b60046020526000908152604090205460ff1681565b6040516102469190611b2d565b34801561033957600080fd5b5061019a610348366004611822565b610b53565b61019a61035b366004611b41565b610bcf565b34801561036c57600080fd5b5061019a61037b366004611b9b565b610c78565b34801561038c57600080fd5b506102a47f000000000000000000000000000000000000000000000000000000000000000081565b3480156103c057600080fd5b506103206103cf366004611844565b60056020526000908152604090205460ff1681565b3480156103f057600080fd5b506008546102a4906001600160a01b031681565b34801561041057600080fd5b506007546102a4906001600160a01b031681565b34801561043057600080fd5b5061019a61043f366004611844565b610eaa565b34801561045057600080fd5b5061019a61045f366004611822565b610f09565b34801561047057600080fd5b5061023c60025481565b6000546001600160a01b031633146104d95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b600780546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146105555760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104d0565b600155565b600046306040516020016105b092919091825260601b6bffffffffffffffffffffffff191660208201527f77697468647261774665650000000000000000000000000000000000000000006034820152603f0190565b60408051808303601f19018152828252805160209182012090830181905260608c901b6bffffffffffffffffffffffff19168383015260548084018c9052825180850390910181526074840192839052633416de1160e11b90925292507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169163682dbc2291610656918b908b908b908b908b908b90607801611d56565b60006040518083038186803b15801561066e57600080fd5b505afa158015610682573d6000803e3d6000fd5b505050506001600160a01b0389166000908152600360205260408120546106a9908a611e66565b9050600081116106fb5760405162461bcd60e51b815260206004820152601960248201527f4e6f206e657720616d6f756e7420746f2077697468647261770000000000000060448201526064016104d0565b60008a6001600160a01b03168261c35090604051600060405180830381858888f193505050503d806000811461074d576040519150601f19603f3d011682016040523d82523d6000602084013e610752565b606091505b50509050806107a35760405162461bcd60e51b815260206004820152601660248201527f6661696c656420746f207769746864726177206665650000000000000000000060448201526064016104d0565b5050505050505050505050565b6002546107bd9082611e7d565b6001546107ca9190611e9c565b34101561080c5760405162461bcd60e51b815260206004820152601060248201526f496e73756666696369656e742066656560801b60448201526064016104d0565b336001600160a01b03167fd3a99ca6c57c96f2129445eb07508eb2930b9eb112fc12656115ba87ab85982887878787878760405161084f96959493929190611eb4565b60405180910390a2505050505050565b6000546001600160a01b031633146108b95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104d0565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b60006108e8888b8b610feb565b90506000808281526005602052604090205460ff16600381111561090e5761090e611b03565b1461095b5760405162461bcd60e51b815260206004820152601860248201527f6d65737361676520616c7265616479206578656375746564000000000000000060448201526064016104d0565b600046306040516020016109b192919091825260601b6bffffffffffffffffffffffff191660208201527f4d657373616765000000000000000000000000000000000000000000000000006034820152603b0190565b60408051601f1981840301815282825280516020918201206006549184018190528383018690528251808503840181526060850193849052633416de1160e11b90935293506001600160a01b03169163682dbc2291610a1e918c908c908c908c908c908c90606401611d56565b60006040518083038186803b158015610a3657600080fd5b505afa158015610a4a573d6000803e3d6000fd5b50505050600080610a5c8b8e8e61104f565b90508015610a6d5760019150610a72565b600291505b6000848152600460205260409020805483919060ff19166001836003811115610a9d57610a9d611b03565b02179055507f29122f2c841ca2c3b2feefc4c23e90755d735d8e5b84f307151532e0f1ad62e760018584604051610ad693929190611ef9565b60405180910390a150505050505050505050505050565b6000546001600160a01b03163314610b475760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104d0565b610b51600061115e565b565b6000546001600160a01b03163314610bad5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104d0565b600880546001600160a01b0319166001600160a01b0392909216919091179055565b600254610bdc9082611e7d565b600154610be99190611e9c565b341015610c2b5760405162461bcd60e51b815260206004820152601060248201526f496e73756666696369656e742066656560801b60448201526064016104d0565b336001600160a01b03167f73837570099154c2d8761dc02aaeaac3339739a8ce3bfb47898eaaf8044306a985858585604051610c6a9493929190611f2b565b60405180910390a250505050565b6000610c83886111ae565b90506000808281526004602052604090205460ff166003811115610ca957610ca9611b03565b14610cf65760405162461bcd60e51b815260206004820152601960248201527f7472616e7366657220616c72656164792065786563757465640000000000000060448201526064016104d0565b60004630604051602001610d4c92919091825260601b6bffffffffffffffffffffffff191660208201527f4d657373616765576974685472616e7366657200000000000000000000000000603482015260470190565b604051602081830303815290604052805190602001209050600660009054906101000a90046001600160a01b03166001600160a01b031663682dbc2282848e8e604051602001610d9f9493929190611f5e565b6040516020818303038152906040528a8a8a8a8a8a6040518863ffffffff1660e01b8152600401610dd69796959493929190611d56565b60006040518083038186803b158015610dee57600080fd5b505afa158015610e02573d6000803e3d6000fd5b50505050600080610e148b8e8e611762565b90508015610e255760019150610e46565b610e308b8e8e6117d2565b90508015610e415760039150610e46565b600291505b6000848152600460205260409020805483919060ff19166001836003811115610e7157610e71611b03565b02179055507f29122f2c841ca2c3b2feefc4c23e90755d735d8e5b84f307151532e0f1ad62e760008584604051610ad693929190611ef9565b6000546001600160a01b03163314610f045760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104d0565b600255565b6000546001600160a01b03163314610f635760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104d0565b6001600160a01b038116610fdf5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016104d0565b610fe88161115e565b50565b6000610ffa6020850185611822565b61100a6040860160208701611822565b61101a6060870160408801611f7f565b8585604051602001611030959493929190611fa9565b6040516020818303038152906040528051906020012090509392505050565b6000806110626040860160208701611822565b6001600160a01b0316631599d26560e01b6110806020880188611822565b6110906060890160408a01611f7f565b87876040516024016110a59493929190611ffa565b60408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909416939093179092529051611110919061202d565b6000604051808303816000865af19150503d806000811461114d576040519150601f19603f3d011682016040523d82523d6000602084013e611152565b606091505b50909695505050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000808060016111c16020860186612049565b60048111156111d2576111d2611b03565b1415611372576111e86040850160208601611822565b6111f86060860160408701611822565b6112086080870160608801611822565b608087013561121d60e0890160c08a01611f7f565b6040516bffffffffffffffffffffffff19606096871b8116602083015294861b851660348201529290941b9092166048820152605c8101919091526001600160c01b031960c092831b8116607c8301524690921b909116608482015260e0850135608c82015260ac0160408051808303601f19018152908290528051602090910120600654633c64f04b60e01b8352600483018290529093506001600160a01b031691508190633c64f04b9060240160206040518083038186803b1580156112e457600080fd5b505afa1580156112f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061131c919061206a565b151560011461136d5760405162461bcd60e51b815260206004820152601660248201527f6272696467652072656c6179206e6f742065786973740000000000000000000060448201526064016104d0565b61171c565b60026113816020860186612049565b600481111561139257611392611b03565b141561150457466113a960c0860160a08701611f7f565b6113b96060870160408801611822565b6113c96080880160608901611822565b6040516001600160c01b031960c095861b811660208301529390941b90921660288401526bffffffffffffffffffffffff19606091821b8116603085015291901b1660448201526080850135605882015260780160408051808303601f19018152908290528051602090910120600654631c13568560e31b8352600483018290529093506001600160a01b03169150819063e09ab4289060240160206040518083038186803b15801561147b57600080fd5b505afa15801561148f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114b3919061206a565b151560011461136d5760405162461bcd60e51b815260206004820152601960248201527f627269646765207769746864726177206e6f742065786973740000000000000060448201526064016104d0565b60036115136020860186612049565b600481111561152457611524611b03565b148061154d5750600461153a6020860186612049565b600481111561154b5761154b611b03565b145b1561171c576115626060850160408601611822565b6115726080860160608701611822565b60808601356115876040880160208901611822565b61159760e0890160c08a01611f7f565b604051606095861b6bffffffffffffffffffffffff19908116602083015294861b851660348201526048810193909352931b909116606882015260c09190911b6001600160c01b031916607c82015260e0850135608482015260a40160408051601f1981840301815291905280516020909101209150600361161c6020860186612049565b600481111561162d5761162d611b03565b141561164557506007546001600160a01b0316611653565b506008546001600160a01b03165b6040516301e6472560e01b8152600481018390526001600160a01b038216906301e647259060240160206040518083038186803b15801561169357600080fd5b505afa1580156116a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116cb919061206a565b151560011461171c5760405162461bcd60e51b815260206004820152601460248201527f706567207265636f7264206e6f7420657869737400000000000000000000000060448201526064016104d0565b6040516bffffffffffffffffffffffff19606083901b1660208201526034810183905260540160408051601f198184030181529190528051602090910120949350505050565b6000806117756060860160408701611822565b6001600160a01b031663671aeecd60e11b6117966040880160208901611822565b6117a66080890160608a01611822565b60808901356117bb60e08b0160c08c01611f7f565b89896040516024016110a59695949392919061208c565b6000806117e56060860160408701611822565b6001600160a01b03166378079ce760e11b6117966040880160208901611822565b80356001600160a01b038116811461181d57600080fd5b919050565b60006020828403121561183457600080fd5b61183d82611806565b9392505050565b60006020828403121561185657600080fd5b5035919050565b60008083601f84011261186f57600080fd5b50813567ffffffffffffffff81111561188757600080fd5b6020830191508360208260051b85010111156118a257600080fd5b9250929050565b60008060008060008060008060a0898b0312156118c557600080fd5b6118ce89611806565b975060208901359650604089013567ffffffffffffffff808211156118f257600080fd5b6118fe8c838d0161185d565b909850965060608b013591508082111561191757600080fd5b6119238c838d0161185d565b909650945060808b013591508082111561193c57600080fd5b506119498b828c0161185d565b999c989b5096995094979396929594505050565b60008083601f84011261196f57600080fd5b50813567ffffffffffffffff81111561198757600080fd5b6020830191508360208285010111156118a257600080fd5b60008060008060008060a087890312156119b857600080fd5b6119c187611806565b9550602087013594506119d660408801611806565b935060608701359250608087013567ffffffffffffffff8111156119f957600080fd5b611a0589828a0161195d565b979a9699509497509295939492505050565b6000806000806000806000806000898b0360e0811215611a3657600080fd5b8a3567ffffffffffffffff80821115611a4e57600080fd5b611a5a8e838f0161195d565b909c509a508a91506060601f1984011215611a7457600080fd5b60208d01995060808d0135925080831115611a8e57600080fd5b611a9a8e848f0161185d565b909950975060a08d0135925088915080831115611ab657600080fd5b611ac28e848f0161185d565b909750955060c08d0135925086915080831115611ade57600080fd5b5050611aec8c828d0161185d565b915080935050809150509295985092959850929598565b634e487b7160e01b600052602160045260246000fd5b60048110611b2957611b29611b03565b9052565b60208101611b3b8284611b19565b92915050565b60008060008060608587031215611b5757600080fd5b611b6085611806565b935060208501359250604085013567ffffffffffffffff811115611b8357600080fd5b611b8f8782880161195d565b95989497509550505050565b6000806000806000806000806000898b03610180811215611bbb57600080fd5b8a3567ffffffffffffffff80821115611bd357600080fd5b611bdf8e838f0161195d565b909c509a508a9150610100601f1984011215611bfa57600080fd5b60208d0199506101208d0135925080831115611c1557600080fd5b611c218e848f0161185d565b90995097506101408d0135925088915080831115611c3e57600080fd5b611c4a8e848f0161185d565b90975095506101608d0135925086915080831115611ade57600080fd5b60005b83811015611c82578181015183820152602001611c6a565b83811115611c91576000848401525b50505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b8183526000602080850194508260005b85811015611cfc576001600160a01b03611ce983611806565b1687529582019590820190600101611cd0565b509495945050505050565b81835260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831115611d3957600080fd5b8260051b8083602087013760009401602001938452509192915050565b6080815260008851806080840152611d758160a0850160208d01611c67565b601f01601f1916820182810360a090810160208501528101889052600588901b810160c09081019082018a60005b8b811015611e165784840360bf190183528135368e9003601e19018112611dc957600080fd5b8d01803567ffffffffffffffff811115611de257600080fd5b8036038f1315611df157600080fd5b611dff868260208501611c97565b955050506020928301929190910190600101611da3565b5050508381036040850152611e2c81888a611cc0565b9150508281036060840152611e42818587611d07565b9a9950505050505050505050565b634e487b7160e01b600052601160045260246000fd5b600082821015611e7857611e78611e50565b500390565b6000816000190483118215151615611e9757611e97611e50565b500290565b60008219821115611eaf57611eaf611e50565b500190565b60006001600160a01b03808916835287602084015280871660408401525084606083015260a06080830152611eed60a083018486611c97565b98975050505050505050565b6060810160028510611f0d57611f0d611b03565b848252836020830152611f236040830184611b19565b949350505050565b6001600160a01b0385168152836020820152606060408201526000611f54606083018486611c97565b9695505050505050565b84815283602082015281836040830137600091016040019081529392505050565b600060208284031215611f9157600080fd5b813567ffffffffffffffff8116811461183d57600080fd5b60006bffffffffffffffffffffffff19808860601b168352808760601b166014840152506001600160c01b03198560c01b166028830152828460308401375060009101603001908152949350505050565b6001600160a01b038516815267ffffffffffffffff84166020820152606060408201526000611f54606083018486611c97565b6000825161203f818460208701611c67565b9190910192915050565b60006020828403121561205b57600080fd5b81356005811061183d57600080fd5b60006020828403121561207c57600080fd5b8151801515811461183d57600080fd5b60006001600160a01b03808916835280881660208401525085604083015267ffffffffffffffff8516606083015260a06080830152611eed60a083018486611c9756fea2646970667358221220a3b229c4e3cb08f3e1e24e206ad750ce47195151f80214c0a95180d0742bfe4064736f6c63430008090033";

export class MessageBus__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _sigsVerifier: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MessageBus> {
    return super.deploy(_sigsVerifier, overrides || {}) as Promise<MessageBus>;
  }
  getDeployTransaction(
    _sigsVerifier: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_sigsVerifier, overrides || {});
  }
  attach(address: string): MessageBus {
    return super.attach(address) as MessageBus;
  }
  connect(signer: Signer): MessageBus__factory {
    return super.connect(signer) as MessageBus__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MessageBusInterface {
    return new utils.Interface(_abi) as MessageBusInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MessageBus {
    return new Contract(address, _abi, signerOrProvider) as MessageBus;
  }
}