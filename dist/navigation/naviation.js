import { useNavigate } from 'react-router-dom';
export default function Navigation() {
    const navigate = useNavigate();
    const goToLogin = () => navigate('/login');
    const goToSystemPage = () => navigate('/systemPage');
    const goToDashboard = () => navigate('/dashboard');
    const goBack = () => navigate(-1);
    return {
        navigate,
        goToLogin,
        goToSystemPage,
        goToDashboard,
        goBack,
    };
}
