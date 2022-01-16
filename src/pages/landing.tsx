import Header from '../components/Header';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
import FormIllustration from '../assets/forms-illustration.svg';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <Layout>
          <div className="flex items-center">
            <Logo />
            <Button
              style={{ marginLeft: 'auto' }}
              variant="contained"
              color="primary"
              disableElevation
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
          </div>
        </Layout>
      </Header>
      <Layout>
        <div className="flex flex-col items-center py-2">
          <img
            src={FormIllustration}
            alt="Form illustration"
            className="h-96 mt-20"
          />
        </div>
      </Layout>
    </>
  );
}
