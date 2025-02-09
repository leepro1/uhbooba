import Button from '@/components/common/buttons/Button';
import { useNavigate } from 'react-router';
import LevelBar from '@/components/common/LevelBar';
import NoModal from '@/components/modals/NoModal';
import clsx from 'clsx';
import { useAtom, useSetAtom } from 'jotai';
import {
  selectAccountAtom,
  withdrawalAccountAtom,
} from '@/atoms/deposit/depositDataAtoms';
import { useEffect, useState } from 'react';
import TopBar from '@/components/layouts/TopBar';
import { getUserFreeAccount } from '@/services/account';
import { DepositAccountDetail } from '@/types/deposit';
import MainWrapper from '@/components/layouts/MainWrapper';
import TitleText from '@/components/common/TitleText';

const DepositAccount = () => {
  const navigate = useNavigate();
  const [selectAccount, setSelectAccount] = useAtom(selectAccountAtom);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accountDetails, setAccountDetails] =
    useState<DepositAccountDetail | null>(null);
  const setWithdrawalAccount = useSetAtom(withdrawalAccountAtom);

  useEffect(() => {
    setSelectAccount(null);
    setIsModalOpen(false);

    const fetchAccountDetails = async () => {
      try {
        const response = await getUserFreeAccount();
        const account = response.data.result;
        if (account) {
          setAccountDetails(account);
        } else {
          console.error('계좌가 없으요');
        }
      } catch (error) {
        console.error('에러났어', error);
      }
    };

    fetchAccountDetails();
  }, [setSelectAccount, setIsModalOpen]);

  const GoBack = () => {
    navigate(-1);
  };

  const GoNext = () => {
    if (selectAccount === null) {
      setIsModalOpen(true);
    } else {
      navigate('/deposit/product');
    }
  };

  const accountClick = () => {
    if (accountDetails) {
      setSelectAccount(0);
      setWithdrawalAccount(accountDetails);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <TopBar title='예금 가입' />
      <MainWrapper>
        <LevelBar currentLevel={3} totalLevel={5} />
        <TitleText>어떤 계좌에서 출금할까요</TitleText>

        <div className='mt-4 pb-4 pl-4 text-lg font-bold'>
          <span>출금계좌 선택</span>
        </div>

        {accountDetails ? (
          <div
            onClick={accountClick}
            className={clsx(
              'm-4 cursor-pointer rounded-lg border-2 p-4',
              selectAccount === 0
                ? 'border-blue-400 text-blue-400'
                : 'border-gray-200',
            )}
          >
            <div className='text-base font-bold'>
              {accountDetails.accountName}
            </div>
            <div className='text-sm text-gray-500'>
              {accountDetails.accountNo}
            </div>
            <div className='mt-2 text-right'>
              <span className='mr-6 text-gray-400'>출금가능금액</span>
              <span className='font-bold text-black'>
                {accountDetails.balance
                  ? `${accountDetails.balance.toLocaleString()} 원`
                  : '정보없음'}
              </span>
            </div>
          </div>
        ) : (
          // 일단 api 못받아오면 하드코딩 뜨게 했음 아랫부분
          <div
            onClick={accountClick}
            className={clsx(
              'm-4 cursor-pointer rounded-lg border-2 p-4',
              selectAccount === 0
                ? 'border-blue-400 text-blue-400'
                : 'border-gray-200',
            )}
          >
            <div className='text-base font-bold'>자유입출금 계좌 1</div>
            <div className='text-sm text-gray-500'>183-217-673215</div>
            <div className='mt-2 text-right'>
              <span className='mr-6 text-gray-400'>출금가능금액</span>
              <span className='font-bold text-black'>100,000,000 원</span>
            </div>
          </div>
        )}

        <div className='mb-2 flex w-full items-center justify-center p-4'>
          <Button
            label='이전'
            size='medium'
            color='orange'
            onClick={GoBack}
            className='mr-2'
          />
          <Button
            label='다음'
            size='medium'
            color='orange'
            onClick={GoNext}
            className='ml-2'
          />
        </div>

        <NoModal
          isOpen={isModalOpen}
          ModalClose={closeModal}
          title='계좌 선택'
          description='출금할 계좌를 선택해주세요.'
          imageSrc='/assets/icons/warning.png'
        />
      </MainWrapper>
    </div>
  );
};

export default DepositAccount;
