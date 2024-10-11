import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import App from '@/App';
import PrivateRoute from '@/components/common/PrivateRoute';

const Main = lazy(() => import('@/pages/Main'));
const Education = lazy(() => import('@/pages/Education'));
const DepositMission = lazy(() => import('@/pages/deposit/DepositMission'));
const DepositExplain = lazy(() => import('@/pages/deposit/DepositExplain'));
const DepositSignup = lazy(() => import('@/pages/deposit/DepositSignup'));
const DepositAgree = lazy(() => import('@/pages/deposit/DepositAgree'));
const DepositMoney = lazy(() => import('@/pages/deposit/DepositMoney'));
const DepositProduct = lazy(() => import('@/pages/deposit/DepositProduct'));
const DepositAccount = lazy(() => import('@/pages/deposit/DepositAccount'));
const DepositPassword = lazy(() => import('@/pages/deposit/DepositPassword'));
const DepositSuccess = lazy(() => import('@/pages/deposit/DepositSuccess'));
const CancelDepositMission = lazy(
  () => import('@/pages/depositCancel/CancelDepositMission'),
);
const Login = lazy(() => import('@/pages/auth/Login'));
const Signup = lazy(() => import('@/pages/auth/Signup'));
const CancelDepositExplain = lazy(
  () => import('@/pages/depositCancel/CancelDepositExplain'),
);
const CancelDepositProduct = lazy(
  () => import('@/pages/depositCancel/CancelDepositProduct'),
);
const CancelDepositPassword = lazy(
  () => import('@/pages/depositCancel/CancelDepositPassword'),
);
const CancelDepositSuccess = lazy(
  () => import('@/pages/depositCancel/CancelDepositSuccess'),
);
const CancelSavingsExplain = lazy(
  () => import('@/pages/savingsCancel/CancelSavingsExplain'),
);
const CancelSavingsProduct = lazy(
  () => import('@/pages/savingsCancel/CancelSavingsProduct'),
);
const CancelSavingsPassword = lazy(
  () => import('@/pages/savingsCancel/CancelSavingsPassword'),
);
const CancelSavingsSuccess = lazy(
  () => import('@/pages/savingsCancel/CancelSavingsSuccess'),
);
const SavingsExplain = lazy(() => import('@/pages/savings/SavingsExplain'));
const SavingsMission = lazy(() => import('@/pages/savings/SavingsMission'));
const SavingsAgree = lazy(() => import('@/pages/savings/SavingsAgree'));
const SavingsMoney = lazy(() => import('@/pages/savings/SavingsMoney'));
const SavingsAccount = lazy(() => import('@/pages/savings/SavingsAccount'));
const SavingsSignup = lazy(() => import('@/pages/savings/SavingsSignup'));
const SavingsProduct = lazy(() => import('@/pages/savings/SavingsProduct'));
const SavingsPassword = lazy(() => import('@/pages/savings/SavingsPassword'));
const SavingsSuccess = lazy(() => import('@/pages/savings/SavingsSuccess'));
const SavingsSuccessMission = lazy(
  () => import('@/pages/savings/SavingsSuccessMission'),
);
const EducationVideo = lazy(
  () => import('@/pages/education/video/EducationVideoHard'),
);
const EducationVideo2 = lazy(
  () => import('@/pages/education/video/EducationVideo'),
);
const EducationCertificate = lazy(
  () => import('@/pages/education/certificate/EducationCertificate'),
);
const QuizMain = lazy(() => import('@/pages/quiz/QuizMain'));
const QuizQuestion = lazy(() => import('@/pages/quiz/QuizQuestion'));
const QuizSuccess = lazy(() => import('@/pages/quiz/QuizSuccess'));
const EducationWriting = lazy(
  () => import('@/pages/education/certificate/EducationCertificateWriting'),
);
const EducationDownload = lazy(
  () => import('@/pages/education/certificate/EducationCertificateDownload'),
);
const ExchangeAgree = lazy(() => import('@/pages/exchange/ExchangeAgree'));
const ExchangeMoney = lazy(() => import('@/pages/exchange/ExchangeMoney'));
const ExchangeAccount = lazy(() => import('@/pages/exchange/ExchangeAccount'));
const ExchangePassword = lazy(
  () => import('@/pages/exchange/ExchangePassword'),
);
const ExchangeComplete = lazy(
  () => import('@/pages/exchange/ExchangeComplete'),
);
const ExchangeSuccess = lazy(() => import('@/pages/exchange/ExchangeSuccess'));
const ExchangeMission = lazy(() => import('@/pages/exchange/ExchangeMission'));
const ExchangeExplain = lazy(() => import('@/pages/exchange/ExchangeExplain'));
const UtilityPayInfoInput = lazy(
  () => import('@/pages/utilityPayment/UtilityPayInfoInput'),
);
const UtilityPayMission = lazy(
  () => import('@/pages/utilityPayment/UtilityPayMission'),
);
const UtilityPayScan = lazy(
  () => import('@/pages/utilityPayment/UtilityPayScan'),
);
const UtilityPayMoney = lazy(
  () => import('@/pages/utilityPayment/UtilityPayMoney'),
);
const UtilityPayAccount = lazy(
  () => import('@/pages/utilityPayment/UtilityPayAccount'),
);
const UtilityPayPassword = lazy(
  () => import('@/pages/utilityPayment/UtilityPayPassword'),
);
const UtilityPayExplain = lazy(
  () => import('@/pages/utilityPayment/UtilityPayExplain'),
);
const UtilityPaySuccess = lazy(
  () => import('@/pages/utilityPayment/UtilityPaySuccess'),
);

const AccountOpenMission = lazy(
  () => import('@/pages/account/AccountOpenMission'),
);
const AccountCheck = lazy(() => import('@/pages/account/AccountCheck'));
const AccountAddCash = lazy(() => import('@/pages/account/AccountAddCash'));
const AccountProductsList = lazy(
  () => import('@/pages/account/AccountProductsList'),
);
const AccountDepositProducts = lazy(
  () => import('@/pages/account/AccountDepositProducts'),
);
const AccountTransferMission = lazy(
  () => import('@/pages/account/transfer/AccountTransferMission'),
);
const AccountTransferAccountInfo = lazy(
  () => import('@/pages/account/transfer/AccountTransferAccountInfo'),
);
const AccountTransferAmount = lazy(
  () => import('@/pages/account/transfer/AccountTransferAmount'),
);
const AccountTransferDepositName = lazy(
  () => import('@/pages/account/transfer/AccountTransferDepositName'),
);
const AccountTransferInfoCheck = lazy(
  () => import('@/pages/account/transfer/AccountTransferInfoCheck'),
);
const AccountTransferPassword = lazy(
  () => import('@/pages/account/transfer/AccountTransferPassword'),
);
const AccountTransferSuccess = lazy(
  () => import('@/pages/account/transfer/AccountTransferSuccess'),
);
const AccountList = lazy(() => import('@/pages/account/AccountList'));
const AccountDepositList = lazy(
  () => import('@/pages/account/AccountDepositList'),
);

const SmishingAgree = lazy(
  () => import('@/pages/smishingPrevention/SmishingAgree'),
);
const SmishingMessageList = lazy(
  () => import('@/pages/smishingPrevention/SmishingMessageList'),
);
const SmishingMessageDetail = lazy(
  () => import('@/pages/smishingPrevention/SmishingMessageDetail'),
);
const SmishingEnding = lazy(
  () => import('@/pages/smishingPrevention/SmishingEnding'),
);
const MissionStamps = lazy(() => import('@/pages/gamification/MissionStamps'));
const ChatBotPage = lazy(() => import('@/pages/chatBot/ChatBotPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div></div>}>
        <App />
      </Suspense>
    ),
    // 인증이 필요한 페이지
    children: [
      {
        element: <PrivateRoute />,
        children: [
          { path: '', element: <Main /> },
          { path: 'education', element: <Education /> },
          // 예금
          { path: 'deposit', element: <DepositMission /> },
          { path: 'deposit/explain', element: <DepositExplain /> },
          { path: 'deposit/signup', element: <DepositSignup /> },
          { path: 'deposit/agree', element: <DepositAgree /> },
          { path: 'deposit/money', element: <DepositMoney /> },
          { path: 'deposit/account', element: <DepositAccount /> },
          { path: 'deposit/product', element: <DepositProduct /> },
          { path: 'deposit/password', element: <DepositPassword /> },
          { path: 'deposit/success', element: <DepositSuccess /> },
          // 적금
          { path: 'savings', element: <SavingsExplain /> },
          { path: 'savings/mission', element: <SavingsMission /> },
          { path: 'savings/agree', element: <SavingsAgree /> },
          { path: 'savings/signup', element: <SavingsSignup /> },
          { path: 'savings/money', element: <SavingsMoney /> },
          { path: 'savings/account', element: <SavingsAccount /> },
          { path: 'savings/product', element: <SavingsProduct /> },
          { path: 'savings/password', element: <SavingsPassword /> },
          { path: 'savings/success', element: <SavingsSuccess /> },
          {
            path: 'savings/success/mission',
            element: <SavingsSuccessMission />,
          },
          // 예금 중도해지
          { path: 'cancel/deposit/explain', element: <CancelDepositExplain /> },
          { path: 'cancel/deposit/product', element: <CancelDepositProduct /> },
          {
            path: 'cancel/deposit/password',
            element: <CancelDepositPassword />,
          },
          { path: 'cancel/deposit/success', element: <CancelDepositSuccess /> },
          {
            path: 'cancel/deposit/mission',
            element: <CancelDepositMission />,
          },
          // 적금 중도해지
          { path: 'cancel/savings/explain', element: <CancelSavingsExplain /> },
          { path: 'cancel/savings/product', element: <CancelSavingsProduct /> },
          {
            path: 'cancel/savings/password',
            element: <CancelSavingsPassword />,
          },
          { path: 'cancel/savings/success', element: <CancelSavingsSuccess /> },
          // 금융 교육 영상
          { path: 'education/video/hard', element: <EducationVideo /> },
          { path: 'education/video', element: <EducationVideo2 /> },
          // 이수증
          { path: 'education/certificate', element: <EducationCertificate /> },
          { path: 'education/writing', element: <EducationWriting /> },
          { path: 'education/download', element: <EducationDownload /> },
          // 퀴즈
          { path: 'education/quiz', element: <QuizMain /> },
          { path: 'education/quiz/:part', element: <QuizQuestion /> },
          { path: 'education/quiz/:part/success', element: <QuizSuccess /> },
          // 환전
          { path: 'exchange/mission', element: <ExchangeMission /> },
          { path: 'exchange/explain', element: <ExchangeExplain /> },
          { path: 'exchange/agree', element: <ExchangeAgree /> },
          { path: 'exchange/money', element: <ExchangeMoney /> },
          { path: 'exchange/account', element: <ExchangeAccount /> },
          { path: 'exchange/password', element: <ExchangePassword /> },
          { path: 'exchange/complete', element: <ExchangeComplete /> },
          { path: 'exchange/success', element: <ExchangeSuccess /> },
          // 공과금 납부
          { path: 'utility/mission', element: <UtilityPayMission /> },
          { path: 'utility/explain', element: <UtilityPayExplain /> },
          { path: 'utility/input', element: <UtilityPayInfoInput /> },
          { path: 'utility/scan', element: <UtilityPayScan /> },
          { path: 'utility/money', element: <UtilityPayMoney /> },
          { path: 'utility/account', element: <UtilityPayAccount /> },
          { path: 'utility/password', element: <UtilityPayPassword /> },
          { path: 'utility/success', element: <UtilityPaySuccess /> },
          // 계좌 조회
          { path: 'account/list', element: <AccountList /> },
          { path: 'account/deposit/list', element: <AccountDepositList /> },
          { path: 'account/check', element: <AccountCheck /> },
          { path: 'account/add-cash', element: <AccountAddCash /> },
          // 계좌 생성
          { path: 'account/products', element: <AccountProductsList /> },
          {
            path: 'account/products/deposit',
            element: <AccountDepositProducts />,
          },
          { path: 'account/products/mission', element: <AccountOpenMission /> },
          // 계좌 이체
          {
            path: 'account/transfer/mission',
            element: <AccountTransferMission />,
          },
          {
            path: 'account/transfer/account-info',
            element: <AccountTransferAccountInfo />,
          },
          {
            path: 'account/transfer/amount',
            element: <AccountTransferAmount />,
          },
          {
            path: 'account/transfer/deposit-name',
            element: <AccountTransferDepositName />,
          },
          {
            path: 'account/transfer/info-check',
            element: <AccountTransferInfoCheck />,
          },
          {
            path: 'account/transfer/password',
            element: <AccountTransferPassword />,
          },
          {
            path: 'account/transfer/success',
            element: <AccountTransferSuccess />,
          },
          // 금융 사기 예방
          {
            path: 'prevention/agree',
            element: <SmishingAgree />,
          },
          {
            path: 'prevention/messages',
            element: <SmishingMessageList />,
          },
          {
            path: 'prevention/messages/:messageType',
            element: <SmishingMessageDetail />,
          },
          {
            path: 'prevention/messages/:messageType/ending',
            element: <SmishingEnding />,
          },
          // 게이미피케이션
          { path: 'education/stamp', element: <MissionStamps /> },
          // 챗봇
          { path: 'education/chatbot', element: <ChatBotPage /> },
        ],
      },
      { path: 'signup', element: <Signup /> },
      { path: 'login', element: <Login /> },
    ],
  },
]);

export default router;
