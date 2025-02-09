import { axiosInstance } from '@/utils/axiosInstance';
import { AxiosResponse } from 'axios';

// 입출금 계좌 조회
export const getUserFreeAccount = async () => {
  const response = await axiosInstance(
    '/finances/demand-deposits/accounts/detail',
  );
  return response;
};

// 입출금 계좌 거래 내역 조회
export const getUserFreeAccountTransactions = (accountNo: string) => {
  const response = axiosInstance('/finances/transactions', {
    params: {
      accountNo,
    },
  });
  return response;
};

// 입출금 계좌 입금
export const postUserFreeAccountAddCash = async (
  accountNo: string,
  transactionBalance: number,
  transactionSummary: string,
) => {
  const response = await axiosInstance.post(
    '/finances/demand-deposits/accounts/deposit',
    {
      accountNo,
      transactionBalance,
      transactionSummary,
    },
  );
  return response;
};

// 입출금 계좌 입금
export const postUserFreeAccount = async () => {
  const response = await axiosInstance.post(
    '/finances/demand-deposits/accounts',
  );
  return response;
};

// 입출금 계좌 이체
export const postUserFreeAccountTransfer = (
  depositAccountNo: string,
  depositTransactionSummary: string,
  transactionBalance: number,
  withdrawalAccountNo: string,
  withdrawalTransactionSummary: string,
  password: string,
): Promise<AxiosResponse<{ statusCode: number; message: string }>> => {
  return axiosInstance.post('/finances/demand-deposits/accounts/transfer', {
    depositAccountNo,
    depositTransactionSummary,
    transactionBalance,
    withdrawalAccountNo,
    withdrawalTransactionSummary,
    password,
  });
};

// 입출금 계좌 소유자 이름 조회
export const getFreeAcountHolder = async (accountNo: string) => {
  const response = await axiosInstance(
    'finances/demand-deposits/accounts/holder',
    {
      params: { accountNo },
    },
  );
  return response;
};
