import type { NextPage } from "next";
import Layout from "../components/Layout";
import TableAsing from "../components/GroupsTableAdmin";

const ManageGroups: NextPage = () => {
  return (
    <Layout>
      <h2 className={"text-center"}>Manage Groups</h2>
      <TableAsing />
    </Layout>
  );
};

export default ManageGroups;
