import type {NextPage} from 'next';
import Layout from '../components/Layout';
import TableList from "../components/GroupsTable";

const ManageGroups: NextPage = () => {
  return (
    <Layout>
      <h2 className={"text-center"}>Manage Groups</h2>
      <TableList semester={6} />
    </Layout>
  );
};

export default ManageGroups;