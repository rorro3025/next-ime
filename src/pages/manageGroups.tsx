import type {NextPage} from 'next';
import Layout from '../components/Layout';
import TableList from "../components/GroupsTable";

const ManageGroups: NextPage = () => {
  return (
    <Layout>
      <h1>Manage Groups</h1>
      <TableList semester={6} />
    </Layout>
  );
};

export default ManageGroups;