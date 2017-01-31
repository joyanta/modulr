export interface IAccount {
    id: string;
    name: string;
    balance: number;
    currency: string;
    status: number;
    imageUrl: string;
    identifiers: IAccountIdentity[];
    customerId?: string;
    externalReference: string;
}

export interface IAccountIdentity {
  type: string;
  accountNumber: string;
  sortCode: string;
}
