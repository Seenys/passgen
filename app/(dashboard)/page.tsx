import { FormCreatePassword, PasswordList } from './_components';

const DashboardPage = () => {
  return (
    <div className="container mx-auto px-4">
      <FormCreatePassword />

      <PasswordList />
    </div>
  );
};

export default DashboardPage;
