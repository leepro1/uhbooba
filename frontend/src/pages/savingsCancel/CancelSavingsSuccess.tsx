import Button from '@/components/common/buttons/Button';
import TopBar from '@/components/layouts/TopBar';
import { useNavigate } from 'react-router';
import { useAtomValue, useSetAtom } from 'jotai';
import {
  savingAccountAtom,
  selectedSavingsAccountAtom,
} from '@/atoms/savings/savingsDataAtoms';
import { deleteSavingsAccount } from '@/services/saving';
import { useEffect } from 'react';
import MainWrapper from '@/components/layouts/MainWrapper';

const CancelSavingsSuccess = () => {
  const navigate = useNavigate();
  const setSavingAccount = useSetAtom(savingAccountAtom);
  const selectedSavingsAccount = useAtomValue(selectedSavingsAccountAtom);

  const GoNext = () => {
    navigate('/');
  };

  // 적금 계좌 삭제 api 보내는 로직
  useEffect(() => {
    const deleteAccount = async () => {
      try {
        if (selectedSavingsAccount) {
          await deleteSavingsAccount(selectedSavingsAccount.accountNo);
          setSavingAccount(null);
        }
      } catch (error) {
        console.error(error);
      }
    };

    deleteAccount();
  }, [setSavingAccount, selectedSavingsAccount]);

  return (
    <div>
      <TopBar title='적금 중도해지' showBackButton={false} />
      <MainWrapper>
        <div className='text-center'>
          <p className='mt-4 text-5xl font-bold'>적금 상품</p>
          <p className='mt-4 text-5xl font-bold'>중도해지 완료</p>
        </div>

        {/* 말풍선 부분 */}
        <div className='relative z-10 ml-20 mt-20 w-[270px]'>
          <div className='relative rounded-lg border-2 border-gray-300 bg-gray-100 p-4 font-bold'>
            <p className='text-start text-lg text-black'>
              성공적으로 상품 중도해지를
            </p>
            <p className='text-start text-lg text-black'>완료했습니다.</p>
            <p className='text-start text-lg text-black'>
              원금과 이자는 가입하셨던
            </p>
            <p className='text-start text-lg text-black'>계좌로 입급됩니다.</p>

            {/* 말풍선 꼬리 부분 */}
            <div className='absolute bottom-[-22px] left-[15%] -translate-x-1/2 transform'>
              {/* 바깥쪽 삼각형*/}
              <div className='h-0 w-0 border-l-[2px] border-r-[22px] border-t-[22px] border-solid border-l-transparent border-r-transparent border-t-gray-300'></div>

              {/* 안쪽 삼각형*/}
              <div className='absolute left-[50%] top-[-1px] h-0 w-0 -translate-x-1/2 transform border-l-[2px] border-r-[20px] border-t-[20px] border-solid border-l-transparent border-r-transparent border-t-gray-100'></div>
            </div>
          </div>
        </div>

        <div className='mt-4'>
          {/* 돼지 이미지 */}
          <div className='flex justify-start'>
            <img src='/assets/images/pig.png' alt='Pig' className='h-60 w-60' />
          </div>
        </div>

        {/* 버튼 */}
        <div className='mb-2 flex items-center p-4'>
          <Button
            label='메인화면으로 이동하기'
            size='large'
            color='orange'
            className='w-full py-4'
            onClick={GoNext}
          />
        </div>
      </MainWrapper>
    </div>
  );
};

export default CancelSavingsSuccess;
