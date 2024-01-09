import { useParams } from 'react-router-dom';

const MobilePayment = () => {
  const { deepLink } = useParams();

  window.location.replace(deepLink!);
  return null;
};

export default MobilePayment;