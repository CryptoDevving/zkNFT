/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { BaseContract, BigNumber, Signer, utils } from "ethers";
import { EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ISemaphoreNullifiersInterface extends utils.Interface {
  contractName: "ISemaphoreNullifiers";
  functions: {};

  events: {
    "ExternalNullifierAdded(uint256)": EventFragment;
    "ExternalNullifierRemoved(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ExternalNullifierAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExternalNullifierRemoved"): EventFragment;
}

export type ExternalNullifierAddedEvent = TypedEvent<
  [BigNumber],
  { externalNullifier: BigNumber }
>;

export type ExternalNullifierAddedEventFilter =
  TypedEventFilter<ExternalNullifierAddedEvent>;

export type ExternalNullifierRemovedEvent = TypedEvent<
  [BigNumber],
  { externalNullifier: BigNumber }
>;

export type ExternalNullifierRemovedEventFilter =
  TypedEventFilter<ExternalNullifierRemovedEvent>;

export interface ISemaphoreNullifiers extends BaseContract {
  contractName: "ISemaphoreNullifiers";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISemaphoreNullifiersInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "ExternalNullifierAdded(uint256)"(
      externalNullifier?: null
    ): ExternalNullifierAddedEventFilter;
    ExternalNullifierAdded(
      externalNullifier?: null
    ): ExternalNullifierAddedEventFilter;

    "ExternalNullifierRemoved(uint256)"(
      externalNullifier?: null
    ): ExternalNullifierRemovedEventFilter;
    ExternalNullifierRemoved(
      externalNullifier?: null
    ): ExternalNullifierRemovedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}