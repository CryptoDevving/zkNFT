/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface SemaphoreCoreInterface extends utils.Interface {
  contractName: "SemaphoreCore";
  functions: {
    "verifyProof(uint256[2],uint256[2][2],uint256[2],uint256[4])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "verifyProof",
    values: [
      [BigNumberish, BigNumberish],
      [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      [BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "verifyProof",
    data: BytesLike
  ): Result;

  events: {
    "NullifierHashAdded(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NullifierHashAdded"): EventFragment;
}

export type NullifierHashAddedEvent = TypedEvent<
  [BigNumber],
  { nullifierHash: BigNumber }
>;

export type NullifierHashAddedEventFilter =
  TypedEventFilter<NullifierHashAddedEvent>;

export interface SemaphoreCore extends BaseContract {
  contractName: "SemaphoreCore";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SemaphoreCoreInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    verifyProof(
      a: [BigNumberish, BigNumberish],
      b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      c: [BigNumberish, BigNumberish],
      input: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<[boolean] & { r: boolean }>;
  };

  verifyProof(
    a: [BigNumberish, BigNumberish],
    b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
    c: [BigNumberish, BigNumberish],
    input: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    verifyProof(
      a: [BigNumberish, BigNumberish],
      b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      c: [BigNumberish, BigNumberish],
      input: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "NullifierHashAdded(uint256)"(
      nullifierHash?: null
    ): NullifierHashAddedEventFilter;
    NullifierHashAdded(nullifierHash?: null): NullifierHashAddedEventFilter;
  };

  estimateGas: {
    verifyProof(
      a: [BigNumberish, BigNumberish],
      b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      c: [BigNumberish, BigNumberish],
      input: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    verifyProof(
      a: [BigNumberish, BigNumberish],
      b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      c: [BigNumberish, BigNumberish],
      input: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}