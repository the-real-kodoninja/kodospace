// pages/[username]/[filter].jsx
import { useRouter } from 'next/router';
import usrPge_fltr from '../../components/u/usrPge_fltr'; // Adjust the import path as necessary

const UserFilterPage = () => {
  const router = useRouter();
  const { username, filter } = router.query;

  return (
    <div>
      {/* You can pass the filter directly to your usrPge_fltr component */}
      <usrPge_fltr selectedFilter={filter} />
      <h2>{username+' '+filter}</h2>
    </div>
  );
};

export default UserFilterPage;