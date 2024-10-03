import TopBar from '@/components/layouts/TopBar';
import { BottomTab } from '@/components/layouts/BottomTab';
import AccountProduct from '@/components/common/AccountProduct';
import { useAtom } from 'jotai';
import { selectedKeywordAtom } from '@/atoms/deposit/depositDataAtoms';
import { useNavigate } from 'react-router';

const AccountProductsList = () => {
  const [selectedKeyword, setSelectedKeyword] = useAtom(selectedKeywordAtom);
  const navigate = useNavigate();

  const ProductsList = [
    {
      name: '자유입출금 통장',
      description: '돈을 자유롭게 입금하고 출금해요.',
      moveTo: '',
    },
    {
      name: '정기 예금',
      description: '목돈을 맡겨두고 높은 이자를 받아요.',
      moveTo: '/account/products/deposit',
    },
    {
      name: '정기 적금',
      description: '일정 주기마다 정해진 금액을 맡겨요.',
      moveTo: '/account/products/deposit',
    },
  ];

  const handleProductClick = (product) => {
    setSelectedKeyword(
      product.name.includes('예금') ? '예금 상품' : '적금 상품',
      // 클릭한거에 예금이 있으면 예금상품 버튼을 보여주고, 아니면 적금상품 버튼을 보여줌
      // 다음 페이지 들어가서 예금상품과 적금상품 버튼 무엇 클릭할지 결정하는거임
    );
    navigate(product.moveTo);
  };

  return (
    <div>
      <TopBar title='계좌 개설' showXButton={false} />
      <div className='flex flex-col items-center justify-center'>
        {ProductsList.map((product, index) => (
          <AccountProduct
            key={index}
            name={product.name}
            description={product.description}
            moveTo={product.moveTo}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </div>
      <div className='fixed bottom-0 left-0 w-full'>
        <BottomTab />
      </div>
    </div>
  );
};

export default AccountProductsList;
